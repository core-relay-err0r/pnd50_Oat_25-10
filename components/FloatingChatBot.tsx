"use client"

import type React from "react"
import type { SpeechRecognition } from "web-speech-api" // Declare SpeechRecognition here

import { useState, useEffect, useRef, useCallback } from "react"
import { X, MessageCircle, Send, EyeOff, Volume2, VolumeX, Mic, MicOff, Square } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/components/ui/use-mobile"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"

interface OrbProps {
  dimension?: string
  className?: string
  tones?: {
    base?: string
    accent1?: string
    accent2?: string
    accent3?: string
  }
  spinDuration?: number
}

const ColorOrb: React.FC<OrbProps> = ({ dimension = "192px", className, tones, spinDuration = 20 }) => {
  const fallbackTones = {
    base: "oklch(95% 0.02 264.695)",
    accent1: "oklch(75% 0.15 350)",
    accent2: "oklch(80% 0.12 200)",
    accent3: "oklch(78% 0.14 280)",
  }

  const palette = { ...fallbackTones, ...tones }

  const dimValue = Number.parseInt(dimension.replace("px", ""), 10)

  const blurStrength = dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4)

  const contrastStrength = dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5)

  const pixelDot = dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1)

  const shadowRange = dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2)

  const maskRadius = dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%"

  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength

  return (
    <div
      className={cx("color-orb", className)}
      style={
        {
          width: dimension,
          height: dimension,
          "--base": palette.base,
          "--accent1": palette.accent1,
          "--accent2": palette.accent2,
          "--accent3": palette.accent3,
          "--spin-duration": `${spinDuration}s`,
          "--blur": `${blurStrength}px`,
          "--contrast": adjustedContrast,
          "--dot": `${pixelDot}px`,
          "--shadow": `${shadowRange}px`,
          "--mask": maskRadius,
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .color-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          transform: scale(1.1);
        }

        .color-orb::before,
        .color-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }

        .color-orb::before {
          background:
            conic-gradient(
              from calc(var(--angle) * 2) at 25% 70%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 45% 75%,
              var(--accent2),
              transparent 30% 60%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * -3) at 80% 20%,
              var(--accent1),
              transparent 40% 60%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 15% 5%,
              var(--accent2),
              transparent 10% 90%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * 1) at 20% 80%,
              var(--accent1),
              transparent 10% 90%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * -2) at 85% 10%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            );
          box-shadow: inset var(--base) 0 0 var(--shadow) calc(var(--shadow) * 0.2);
          filter: blur(var(--blur)) contrast(var(--contrast));
          animation: spin var(--spin-duration) linear infinite;
        }

        .color-orb::after {
          background-image: radial-gradient(
            circle at center,
            var(--base) var(--dot),
            transparent var(--dot)
          );
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          backdrop-filter: blur(calc(var(--blur) * 2)) contrast(calc(var(--contrast) * 2));
          mix-blend-mode: overlay;
        }

        .color-orb[style*="--mask: 0%"]::after {
          mask-image: none;
        }

        .color-orb:not([style*="--mask: 0%"])::after {
          mask-image: radial-gradient(black var(--mask), transparent 75%);
        }

        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .color-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

const WELCOME_MESSAGE = {
  id: "welcome-static",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "👋 Hi there! I'm Panida, your digital assistant from PND50.\n\nI can help you find the right accounting or tax service for your company — and get your quotation in just a few minutes.\n\nShall we get started? 📋 ✨",
    },
  ],
  createdAt: new Date(),
}

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const pathname = usePathname()
  const isOnCalculator = pathname === "/calculator"
  const isMobile = useIsMobile()

  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognitionSupported, setRecognitionSupported] = useState(false)

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const lastSpokenMessageRef = useRef<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check TTS support
      if ("speechSynthesis" in window) {
        setSpeechSupported(true)
        synthRef.current = window.speechSynthesis
      }

      // Check STT support
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      if (SpeechRecognition) {
        setRecognitionSupported(true)
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "en-US"
      }

      // Load voice preference
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

  const [inputValue, setInputValue] = useState("")

  const speakText = useCallback(
    (text: string) => {
      if (!speechSupported || !synthRef.current || !voiceEnabled) return

      // Cancel any ongoing speech
      synthRef.current.cancel()

      // Clean text for speech (remove emojis and special characters)
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

      // Try to use a female voice
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
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

  if (isHidden) {
    return (
      <button
        onClick={handleShow}
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-background hover:bg-muted text-muted-foreground rounded-full shadow-lg hover:shadow-xl px-4 py-2 text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 border border-border"
        aria-label="Show AI assistant"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Chat with Panida</span>
      </button>
    )
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-full max-w-[calc(100vw-2rem)] md:w-[380px] md:max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border">
              {/* Header */}
              <div className="bg-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold">Panida - PND50 Assistant</h3>
                    <p className="text-primary-foreground/80 text-xs">
                      {status === "in_progress" ? "Typing..." : isSpeaking ? "Speaking..." : "Online"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {speechSupported && (
                    <button
                      onClick={toggleVoice}
                      className={`text-primary-foreground hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors ${voiceEnabled ? "bg-primary-foreground/20" : ""}`}
                      aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                      title={voiceEnabled ? "Disable voice" : "Enable voice"}
                    >
                      {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                    </button>
                  )}
                  {isSpeaking && (
                    <button
                      onClick={stopSpeaking}
                      className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors animate-pulse"
                      aria-label="Stop speaking"
                      title="Stop speaking"
                    >
                      <Square className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      stopSpeaking()
                    }}
                    className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-muted/30">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-foreground border border-border"
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
                      <div className="flex items-center justify-between mt-1">
                        <p
                          className={`text-xs ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
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
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            aria-label="Speak this message"
                            title="Speak this message"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {status === "in_progress" && (
                  <div className="flex justify-start">
                    <div className="bg-background text-foreground border border-border rounded-2xl px-4 py-2.5">
                      <div className="flex gap-1">
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-background border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isListening ? "Listening..." : "Type your message..."}
                    disabled={status === "in_progress"}
                    className={`flex-1 px-4 py-2.5 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-background text-foreground ${isListening ? "border-primary ring-2 ring-primary/50" : ""}`}
                  />
                  {recognitionSupported && (
                    <Button
                      onClick={isListening ? stopListening : startListening}
                      disabled={status === "in_progress"}
                      className={`rounded-xl px-3 transition-all ${
                        isListening
                          ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground animate-pulse"
                          : "bg-muted hover:bg-muted/80 text-muted-foreground"
                      }`}
                      aria-label={isListening ? "Stop listening" : "Start voice input"}
                      title={isListening ? "Stop listening" : "Start voice input"}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </Button>
                  )}
                  <Button
                    onClick={handleSend}
                    disabled={status === "in_progress" || !inputValue.trim()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {recognitionSupported ? "Press Enter to send • Click mic to speak" : "Press Enter to send"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-center gap-2">
          {/* Hide button */}
          <motion.button
            onClick={handleHide}
            className="bg-background hover:bg-muted text-muted-foreground rounded-full shadow-lg hover:shadow-xl p-2.5 transition-colors border border-border hover:border-destructive/30 hover:text-destructive"
            aria-label="Hide AI assistant"
            title="Hide AI assistant"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <EyeOff className="w-4 h-4" />
          </motion.button>

          {/* Main chat button - MorphPanel style */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative bg-background hover:bg-muted text-foreground rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5 transition-all duration-300 border border-border hover:border-primary/50 group"
            aria-label="Open chat with Panida"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* ColorOrb */}
            <div className="flex-shrink-0">
              <ColorOrb
                dimension="32px"
                tones={{
                  base: "oklch(95% 0.02 220)",
                  accent1: "oklch(65% 0.15 220)",
                  accent2: "oklch(70% 0.12 180)",
                  accent3: "oklch(68% 0.14 200)",
                }}
                spinDuration={15}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-foreground leading-tight">PND50 Assistant </span>
              <span className="text-xs text-muted-foreground leading-tight">Chat with Panida</span>
            </div>
          </motion.button>
        </div>
      )}

      {/* Close button when chat is open */}
      {isOpen && (
        <motion.button
          onClick={() => {
            setIsOpen(false)
            stopSpeaking()
          }}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-colors"
          aria-label="Close chat"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-5 h-5" />
        </motion.button>
      )}
    </>
  )
}
