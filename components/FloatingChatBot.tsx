"use client"

import type React from "react"
import type { SpeechRecognition } from "web-speech-api"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, Send, Volume2, VolumeX, Mic, MicOff, Square, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/components/ui/use-mobile"
import { AnimatePresence, motion } from "framer-motion"
import { ColorOrb } from "@/components/ui/color-orb"

const WELCOME_MESSAGE = {
  id: "welcome-static",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi there! I'm Panida, your digital assistant from PND50.\n\nI can help you find the right accounting or tax service for your company — and get your quotation in just a few minutes.\n\nShall we get started?",
    },
  ],
  createdAt: new Date(),
}

const SPEED_FACTOR = 1

export function FloatingChatBot() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const [showTooltip, setShowTooltip] = useState(false)

  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognitionSupported, setRecognitionSupported] = useState(false)

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const lastSpokenMessageRef = useRef<string | null>(null)

  const [inputValue, setInputValue] = useState("")

  // Panel dimensions
  const PANEL_WIDTH = isMobile ? 340 : 400
  const PANEL_HEIGHT = 520
  const COLLAPSED_HEIGHT = 52

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("speechSynthesis" in window) {
        setSpeechSupported(true)
        synthRef.current = window.speechSynthesis
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        setRecognitionSupported(true)
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "en-US"
      }

      const savedVoicePref = localStorage.getItem("chatbot-voice-enabled")
      if (savedVoicePref === "true") {
        setVoiceEnabled(true)
      }
    }
  }, [])

  useEffect(() => {
    const hidden = localStorage.getItem("chatbot-hidden")
    if (hidden === "true") {
      setIsHidden(true)
    }
  }, [])

  useEffect(() => {
    if (!isHidden) {
      setShowTooltip(false)
      return
    }

    // Show tooltip after 2 seconds initially
    const initialTimeout = setTimeout(() => {
      setShowTooltip(true)
    }, 2000)

    // Then toggle it every 8 seconds (show for 4s, hide for 4s)
    const interval = setInterval(() => {
      setShowTooltip((prev) => !prev)
    }, 4000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [isHidden])

  // Click outside to close
  useEffect(() => {
    function clickOutsideHandler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler)
    return () => document.removeEventListener("mousedown", clickOutsideHandler)
  }, [isOpen])

  const {
    messages: aiMessages,
    sendMessage,
    status,
  } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chatbot",
      headers: {
        "X-Current-Page": pathname || "/",
      },
    }),
  })

  const messages = [WELCOME_MESSAGE, ...aiMessages]

  const speakText = useCallback(
    (text: string) => {
      if (!speechSupported || !synthRef.current || !voiceEnabled) return
      synthRef.current.cancel()

      const cleanText = text
        .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
        .replace(/[\u{1F300}-\u{1F5FF}]/gu, "")
        .replace(/[\u{1F680}-\u{1F6FF}]/gu, "")
        .replace(/[\u{2600}-\u{26FF}]/gu, "")
        .replace(/[\u{2700}-\u{27BF}]/gu, "")
        .replace(/[*#_~`]/g, "")
        .trim()

      if (!cleanText) return

      const utterance = new SpeechSynthesisUtterance(cleanText)
      utterance.rate = 1.0
      utterance.pitch = 1.1
      utterance.volume = 1.0

      const voices = synthRef.current.getVoices()
      const femaleVoice =
        voices.find(
          (voice) =>
            voice.name.includes("Female") ||
            voice.name.includes("Samantha") ||
            voice.name.includes("Victoria") ||
            voice.name.includes("Karen") ||
            voice.name.includes("Moira") ||
            (voice.lang.startsWith("en") && voice.name.toLowerCase().includes("female")),
        ) || voices.find((voice) => voice.lang.startsWith("en"))

      if (femaleVoice) {
        utterance.voice = femaleVoice
      }

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      synthRef.current.speak(utterance)
    },
    [speechSupported, voiceEnabled],
  )

  const stopSpeaking = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }, [])

  useEffect(() => {
    if (!voiceEnabled || aiMessages.length === 0) return

    const lastMessage = aiMessages[aiMessages.length - 1]
    if (lastMessage.role === "assistant" && status !== "in_progress") {
      const messageText = lastMessage.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join(" ")

      if (messageText && messageText !== lastSpokenMessageRef.current) {
        lastSpokenMessageRef.current = messageText
        speakText(messageText)
      }
    }
  }, [aiMessages, status, voiceEnabled, speakText])

  const toggleVoice = useCallback(() => {
    const newValue = !voiceEnabled
    setVoiceEnabled(newValue)
    localStorage.setItem("chatbot-voice-enabled", String(newValue))

    if (!newValue && isSpeaking) {
      stopSpeaking()
    }
  }, [voiceEnabled, isSpeaking, stopSpeaking])

  const startListening = useCallback(() => {
    if (!recognitionRef.current || isListening) return

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInputValue((prev) => prev + (prev ? " " : "") + transcript)
      setIsListening(false)
    }

    recognitionRef.current.onerror = () => {
      setIsListening(false)
    }

    recognitionRef.current.onend = () => {
      setIsListening(false)
    }

    try {
      recognitionRef.current.start()
      setIsListening(true)
    } catch (error) {
      console.error("Speech recognition error:", error)
      setIsListening(false)
    }
  }, [isListening])

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [isListening])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim() || status === "in_progress") return
    sendMessage({ text: inputValue })
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false)
      stopSpeaking()
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleHide = () => {
    setIsHidden(true)
    setIsOpen(false)
    stopSpeaking()
    localStorage.setItem("chatbot-hidden", "true")
  }

  const handleShow = () => {
    setIsHidden(false)
    localStorage.removeItem("chatbot-hidden")
  }

  const triggerOpen = useCallback(() => {
    setIsOpen(true)
    setTimeout(() => {
      textareaRef.current?.focus()
    }, 300)
  }, [])

  if (isHidden) {
    const tooltipMessages = ["Need help?", "Got questions?", "Talk to me!", "I'm here to help"]
    const randomMessage = tooltipMessages[Math.floor(Date.now() / 8000) % tooltipMessages.length]

    return (
      <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
            >
              <div className="relative bg-foreground text-background text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                {randomMessage}
                {/* Arrow pointing down */}
                <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-foreground rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={handleShow}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => isHidden && setShowTooltip(false)}
          className="rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Show AI assistant"
        >
          <ColorOrb dimension="48px" tones={{ base: "oklch(22.64% 0 0)" }} spinDuration={15} />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-end justify-end">
      <motion.div
        ref={wrapperRef}
        className="bg-background relative flex flex-col overflow-hidden border border-border shadow-2xl"
        initial={false}
        animate={{
          width: isOpen ? PANEL_WIDTH : "auto",
          height: isOpen ? PANEL_HEIGHT : COLLAPSED_HEIGHT,
          borderRadius: isOpen ? 20 : 26,
        }}
        transition={{
          type: "spring",
          stiffness: 550 / SPEED_FACTOR,
          damping: 45,
          mass: 0.7,
          delay: isOpen ? 0 : 0.08,
        }}
      >
        {/* Collapsed Dock Bar */}
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={triggerOpen}
              className="flex h-[52px] items-center justify-center whitespace-nowrap select-none cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-center gap-3 px-4">
                <ColorOrb dimension="28px" tones={{ base: "oklch(22.64% 0 0)" }} spinDuration={15} />
                <span className="flex h-fit flex-1 justify-start rounded-full px-3 py-1.5 text-sm font-medium truncate">
                  Ask Panida
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleHide()
                  }}
                  className="text-muted-foreground hover:text-foreground p-1.5 rounded-full hover:bg-muted transition-colors"
                  aria-label="Hide assistant"
                >
                  <EyeOff className="w-4 h-4" />
                </button>
              </div>
            </motion.footer>
          )}
        </AnimatePresence>

        {/* Expanded Chat Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 550 / SPEED_FACTOR, damping: 45, mass: 0.7 }}
              className="flex h-full flex-col"
              style={{ width: PANEL_WIDTH, height: PANEL_HEIGHT }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <ColorOrb dimension="32px" tones={{ base: "oklch(22.64% 0 0)" }} spinDuration={15} />
                  <div>
                    <p className="text-foreground font-semibold text-sm">Panida</p>
                    <p className="text-muted-foreground text-xs">
                      {status === "in_progress" ? "Typing..." : isSpeaking ? "Speaking..." : "PND50 Assistant"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {speechSupported && (
                    <button
                      onClick={toggleVoice}
                      className={`text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors ${voiceEnabled ? "bg-muted text-foreground" : ""}`}
                      aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                    >
                      {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                  )}
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors animate-pulse"
                      aria-label="Stop speaking"
                    >
                      <Square className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      stopSpeaking()
                    }}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                        message.role === "user"
                          ? "bg-foreground text-background"
                          : "bg-background text-foreground border border-border/50"
                      }`}
                    >
                      {message.parts.map((part, index) => {
                        if (part.type === "text") {
                          return (
                            <p key={index} className="text-sm leading-relaxed whitespace-pre-wrap">
                              {part.text}
                            </p>
                          )
                        }
                        return null
                      })}
                      <div className="flex items-center justify-between mt-1.5 gap-2">
                        <p
                          className={`text-[10px] ${message.role === "user" ? "text-background/60" : "text-muted-foreground"}`}
                        >
                          {message.createdAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                        {message.role === "assistant" && speechSupported && message.id !== "welcome-static" && (
                          <button
                            onClick={() => {
                              const text = message.parts
                                .filter((p) => p.type === "text")
                                .map((p) => p.text)
                                .join(" ")
                              speakText(text)
                            }}
                            className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
                            aria-label="Speak this message"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {status === "in_progress" && (
                  <div className="flex justify-start">
                    <div className="bg-background text-foreground border border-border/50 rounded-2xl px-4 py-3">
                      <div className="flex gap-1.5">
                        <span
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border/50 bg-background">
                <div className="flex gap-2 items-end">
                  <div className="flex-1 relative">
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={isListening ? "Listening..." : "Ask me anything..."}
                      disabled={status === "in_progress"}
                      rows={1}
                      className={`w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${isListening ? "border-primary ring-2 ring-primary/30" : ""}`}
                      style={{ minHeight: "42px", maxHeight: "120px" }}
                    />
                  </div>
                  {recognitionSupported && (
                    <Button
                      onClick={isListening ? stopListening : startListening}
                      disabled={status === "in_progress"}
                      size="icon"
                      variant={isListening ? "destructive" : "outline"}
                      className={`rounded-xl h-[42px] w-[42px] shrink-0 ${isListening ? "animate-pulse" : ""}`}
                      aria-label={isListening ? "Stop listening" : "Start voice input"}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                  )}
                  <Button
                    onClick={handleSend}
                    disabled={status === "in_progress" || !inputValue.trim()}
                    size="icon"
                    className="rounded-xl h-[42px] w-[42px] shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2 px-1">
                  <p className="text-[10px] text-muted-foreground">
                    {recognitionSupported ? "Enter to send · Click mic to speak" : "Enter to send"}
                  </p>
                  <div className="flex gap-1">
                    <kbd className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5 font-mono">
                      Esc
                    </kbd>
                    <span className="text-[10px] text-muted-foreground">to close</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
