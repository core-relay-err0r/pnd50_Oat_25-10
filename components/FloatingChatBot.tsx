"use client"

import type React from "react"
import type { SpeechRecognition } from "web-speech-api" // Declare SpeechRecognition here

import { useState, useEffect, useRef, useCallback } from "react"
import {
  X,
  MessageCircle,
  Send,
  Sparkles,
  EyeOff,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Square,
  Phone,
  PhoneOff,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/components/ui/use-mobile"
import { SiriOrb } from "@/components/ui/siri-orb"

const WELCOME_MESSAGE = {
  id: "welcome-static",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi there! I'm Panida, your digital assistant from PND50.\n\nI can help you find the right accounting or tax service for your company - and get your quotation in just a few minutes.\n\nShall we get started?",
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

  const [voiceMode, setVoiceMode] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognitionSupported, setRecognitionSupported] = useState(false)
  const [continuousListening, setContinuousListening] = useState(false)

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const lastSpokenMessageRef = useRef<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const startListening = useCallback(() => {
    if (!recognitionRef.current || isListening) return

    try {
      recognitionRef.current.abort()
    } catch (e) {
      // Ignore abort errors
    }

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInputValue((prev) => prev + (prev ? " " : "") + transcript)
      setIsListening(false)

      if (voiceMode && transcript.trim()) {
        setTimeout(() => {
          sendMessage({ text: transcript.trim() })
          setInputValue("")
        }, 500)
      }
    }

    recognitionRef.current.onerror = (event) => {
      if (event.error !== "aborted" && event.error !== "no-speech") {
        console.error("Speech recognition error:", event.error)
      }
      setIsListening(false)
    }

    recognitionRef.current.onend = () => {
      setIsListening(false)
      if (voiceMode && continuousListening && !isSpeaking) {
        setTimeout(() => {
          if (voiceMode && continuousListening && !isListening) {
            startListening()
          }
        }, 1000)
      }
    }

    setTimeout(() => {
      try {
        if (recognitionRef.current && !isListening) {
          recognitionRef.current.start()
          setIsListening(true)
        }
      } catch (error) {
        if (error instanceof Error && !error.message.includes("already started")) {
          console.error("Speech recognition error:", error)
        }
        setIsListening(false)
      }
    }, 100)
  }, [isListening, voiceMode, continuousListening, isSpeaking])

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [isListening])

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

  const toggleVoiceMode = useCallback(() => {
    const newValue = !voiceMode
    setVoiceMode(newValue)
    setVoiceEnabled(newValue)
    localStorage.setItem("chatbot-voice-mode", String(newValue))
    localStorage.setItem("chatbot-voice-enabled", String(newValue))

    if (!newValue) {
      // Turning off voice mode
      if (isSpeaking) stopSpeaking()
      if (isListening) stopListening()
      setContinuousListening(false)
    } else {
      setIsOpen(true)
      // Turning on voice mode - start listening automatically
      setContinuousListening(true)
    }
  }, [voiceMode, isSpeaking, isListening])

  const toggleVoice = useCallback(() => {
    const newValue = !voiceEnabled
    setVoiceEnabled(newValue)
    localStorage.setItem("chatbot-voice-enabled", String(newValue))

    if (!newValue && isSpeaking) {
      stopSpeaking()
    }
  }, [voiceEnabled, isSpeaking, stopSpeaking])

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

      const savedVoiceMode = localStorage.getItem("chatbot-voice-mode")
      if (savedVoiceMode === "true") {
        setVoiceMode(true)
        setVoiceEnabled(true)
      }

      const savedVoicePref = localStorage.getItem("chatbot-voice-enabled")
      if (savedVoicePref === "true") {
        setVoiceEnabled(true)
      }
    }
  }, [])

  useEffect(() => {
    if (voiceMode && continuousListening && !isSpeaking && !isListening && status !== "in_progress") {
      const timer = setTimeout(() => {
        if (voiceMode && continuousListening && !isSpeaking && !isListening) {
          startListening()
        }
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [voiceMode, continuousListening, isSpeaking, isListening, status])

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
    if (voiceMode) {
      setVoiceMode(false)
      setContinuousListening(false)
      stopListening()
    }
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
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 bg-gradient-to-r from-muted to-muted/80 hover:from-muted/90 hover:to-muted/70 text-muted-foreground rounded-full shadow-lg hover:shadow-2xl px-4 py-2 text-sm transition-all duration-500 hover:scale-110 flex items-center gap-2 backdrop-blur-sm border border-border/50 hover:border-primary/30"
        aria-label="Show AI assistant"
      >
        <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
        <span>Chat with Panida </span>
      </button>
    )
  }

  if (voiceMode && isOpen) {
    return (
      <>
        {/* Voice Mode Floating Panel */}
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="relative flex flex-col items-center">
              {/* Close / Exit Voice Mode Button */}
              <button
                onClick={() => {
                  toggleVoiceMode()
                  setIsOpen(false)
                }}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-slate-800/90 hover:bg-red-500/90 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                aria-label="Exit voice mode"
              >
                <X className="w-5 h-5" />
              </button>

              {/* SiriOrb Container */}
              <div className="relative">
                <SiriOrb
                  size={isMobile ? "200px" : "280px"}
                  animationDuration={isListening ? 8 : isSpeaking ? 12 : 20}
                  isActive={isListening || isSpeaking}
                  className="drop-shadow-2xl"
                />

                {/* Center Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
                    <h3 className="text-white font-semibold text-lg mb-1">Panida</h3>
                    <p className="text-slate-300 text-sm">
                      {isListening
                        ? "Listening..."
                        : isSpeaking
                          ? "Speaking..."
                          : status === "in_progress"
                            ? "Thinking..."
                            : "Say something..."}
                    </p>
                    {/* Audio Wave Animation */}
                    {(isListening || isSpeaking) && (
                      <div className="flex justify-center gap-1 mt-3">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-1 rounded-full ${isListening ? "bg-green-400" : "bg-blue-400"}`}
                            style={{
                              height: `${Math.random() * 16 + 8}px`,
                              animation: `pulse 0.5s ease-in-out infinite ${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Text */}
              <div className="mt-6 text-center">
                <p className="text-white/80 text-sm font-medium">
                  {isListening ? "I'm listening to you..." : isSpeaking ? "Let me explain..." : "Tap the orb or speak"}
                </p>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={isListening ? stopListening : startListening}
                  disabled={status === "in_progress" || isSpeaking}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 text-white scale-110 animate-pulse"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  aria-label={isListening ? "Stop listening" : "Start listening"}
                >
                  {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>

                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg"
                    aria-label="Stop speaking"
                  >
                    <Square className="w-6 h-6" />
                  </button>
                )}

                <button
                  onClick={() => {
                    setVoiceMode(false)
                    setVoiceEnabled(false)
                    setContinuousListening(false)
                    if (isListening) stopListening()
                    if (isSpeaking) stopSpeaking()
                  }}
                  className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg"
                  aria-label="Switch to text mode"
                  title="Switch to text mode"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>
              </div>

              {/* Recent Message Preview */}
              {aiMessages.length > 0 && (
                <div className="mt-6 max-w-[280px] md:max-w-[320px]">
                  <div className="bg-slate-800/80 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-xl">
                    <p className="text-slate-300 text-sm line-clamp-3">
                      {aiMessages[aiMessages.length - 1].parts
                        .filter((p) => p.type === "text")
                        .map((p) => p.text)
                        .join(" ")
                        .slice(0, 150)}
                      {aiMessages[aiMessages.length - 1].parts
                        .filter((p) => p.type === "text")
                        .map((p) => p.text)
                        .join(" ").length > 150
                        ? "..."
                        : ""}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Background Overlay */}
        <div
          className="fixed inset-0 z-40 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm"
          onClick={() => {
            toggleVoiceMode()
            setIsOpen(false)
          }}
        />

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scaleY(0.5); }
            50% { transform: scaleY(1); }
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-full max-w-[calc(100vw-2rem)] md:w-[380px] md:max-w-[calc(100vw-3rem)] transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border backdrop-blur-xl">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold">Panida - PND50 Assistant</h3>
                <p className="text-primary-foreground/80 text-xs">
                  {status === "in_progress"
                    ? "Typing..."
                    : isSpeaking
                      ? "Speaking..."
                      : isListening
                        ? "Listening..."
                        : "Online"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {speechSupported && recognitionSupported && (
                <button
                  onClick={toggleVoiceMode}
                  className={`flex items-center gap-1.5 text-xs font-medium rounded-full px-2.5 py-1.5 transition-all ${
                    voiceMode
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/30 animate-pulse"
                      : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                  }`}
                  aria-label={voiceMode ? "Disable voice mode" : "Enable voice mode"}
                  title={voiceMode ? "Voice mode ON - Click to disable" : "Enable voice mode for hands-free chat"}
                >
                  {voiceMode ? (
                    <>
                      <Phone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Voice ON</span>
                    </>
                  ) : (
                    <>
                      <PhoneOff className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Voice</span>
                    </>
                  )}
                </button>
              )}
              {speechSupported && !voiceMode && (
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
                  if (voiceMode) {
                    stopListening()
                  }
                }}
                className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {voiceMode && (
            <div className="bg-gradient-to-r from-green-500/10 via-green-500/20 to-green-500/10 px-4 py-2 flex items-center justify-center gap-2 border-b border-green-500/20">
              <div
                className={`w-2 h-2 rounded-full ${isListening ? "bg-red-500 animate-pulse" : isSpeaking ? "bg-green-500 animate-pulse" : "bg-green-500"}`}
              />
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                {isListening
                  ? "Listening to you..."
                  : isSpeaking
                    ? "Panida is speaking..."
                    : status === "in_progress"
                      ? "Thinking..."
                      : "Voice mode active - speak anytime"}
              </span>
              {isListening && (
                <div className="flex gap-0.5">
                  <span className="w-1 h-3 bg-red-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite]" />
                  <span className="w-1 h-4 bg-red-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.1s]" />
                  <span className="w-1 h-2 bg-red-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s]" />
                  <span className="w-1 h-5 bg-red-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.3s]" />
                  <span className="w-1 h-3 bg-red-500 rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.4s]" />
                </div>
              )}
            </div>
          )}

          {/* Messages */}
          <div className={`${voiceMode ? "h-[360px]" : "h-[400px]"} overflow-y-auto p-4 space-y-4 bg-muted/30`}>
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
                placeholder={
                  isListening
                    ? "Listening..."
                    : voiceMode
                      ? "Voice mode active - speak or type..."
                      : "Type your message..."
                }
                disabled={status === "in_progress"}
                className={`flex-1 px-4 py-2.5 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-background text-foreground ${isListening ? "border-red-500 ring-2 ring-red-500/50" : voiceMode ? "border-green-500/50" : ""}`}
              />
              {recognitionSupported && (
                <Button
                  onClick={isListening ? stopListening : startListening}
                  disabled={status === "in_progress"}
                  className={`rounded-xl px-3 transition-all ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                      : voiceMode
                        ? "bg-green-500 hover:bg-green-600 text-white"
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
              {voiceMode
                ? "Voice mode: Speak naturally and Panida will respond"
                : recognitionSupported
                  ? "Press Enter to send • Click mic to speak"
                  : "Press Enter to send"}
            </p>
          </div>
        </div>
      </div>

      {/* Closed state buttons */}
      {!isOpen && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-start gap-2 group">
          {isMobile ? (
            <button
              onClick={handleHide}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-muted/90 hover:bg-destructive/10 active:bg-destructive/20 text-muted-foreground hover:text-destructive rounded-full shadow-lg border border-border/50 hover:border-destructive/30 flex items-center justify-center transition-all duration-300 active:scale-95 backdrop-blur-sm"
              aria-label="Hide AI assistant"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleHide}
              className="bg-muted/80 hover:bg-muted text-muted-foreground rounded-full shadow-lg hover:shadow-xl p-2 transition-all duration-500 hover:scale-110 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-border/50 hover:border-destructive/30 hover:text-destructive"
              aria-label="Hide AI assistant"
              title="Hide AI assistant"
            >
              <EyeOff className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
            </button>
          )}

          {/* Main chat button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-background hover:bg-white text-foreground rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex gap-3 md:gap-4 px-5 py-4 md:px-7 md:py-5 transition-all duration-500 hover:scale-105 border-4 border-dotted border-primary hover:border-solid hover:border-primary/80 items-center overflow-hidden group/button"
            aria-label="Open chat with Panida"
          >
            {/* Sparkle icon with primary color */}
            <div className="flex items-center justify-center relative z-10">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary transition-all duration-500 group-hover/button:rotate-12 group-hover/button:scale-110 group-hover/button:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
            </div>

            {/* Two-line text layout */}
            <div className="flex flex-col items-start relative z-10">
              <span className="text-sm md:text-base font-bold text-foreground leading-tight transition-colors duration-300 group-hover/button:text-primary">
                PND50 Assistant
              </span>
              <span className="text-xs md:text-sm text-muted-foreground leading-tight transition-colors duration-300 group-hover/button:text-foreground">
                Chat with Panida
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Close button when chat is open */}
      {isOpen && (
        <button
          onClick={() => {
            setIsOpen(false)
            stopSpeaking()
            if (voiceMode) {
              stopListening()
            }
          }}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(var(--primary),0.6)] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-90 backdrop-blur-sm"
          aria-label="Close chat"
        >
          <X className="w-6 h-6 transition-transform duration-300" />
        </button>
      )}
    </>
  )
}
