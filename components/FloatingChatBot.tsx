"use client"

import type React from "react"
import type { SpeechRecognition } from "web-speech-api" // Declare SpeechRecognition here

import { useState, useEffect, useRef, useCallback } from "react"
import { X, MessageCircle, Send, EyeOff, Volume2, VolumeX, Mic, MicOff, Square, Phone, PhoneOff } from "lucide-react"
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

      const savedIsOpen = localStorage.getItem("chatbot-open")
      if (savedIsOpen === "true") {
        setIsOpen(true)
      }

      const savedHidden = localStorage.getItem("chatbot-hidden")
      if (savedHidden === "true") {
        setIsHidden(true)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chatbot-open", String(isOpen))
    }
  }, [isOpen])

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

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative flex flex-col bg-slate-900/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 w-[340px] md:w-[380px] max-w-[calc(100vw-3rem)]">
          {/* Close Button */}
          <button
            onClick={() => {
              setIsOpen(false)
              stopSpeaking()
              if (voiceMode) {
                stopListening()
              }
            }}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-slate-700 hover:bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="p-4 flex items-center gap-3 border-b border-white/10">
            <div className="relative">
              <SiriOrb
                size="48px"
                animationDuration={status === "in_progress" ? 8 : 20}
                isActive={status === "in_progress" || isSpeaking}
                className="drop-shadow-lg"
              />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">Panida</p>
              <p className="text-slate-400 text-xs">
                {status === "in_progress"
                  ? "Thinking..."
                  : isSpeaking
                    ? "Speaking..."
                    : isListening
                      ? "Listening..."
                      : "PND50 Assistant"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {speechSupported && recognitionSupported && (
                <button
                  onClick={toggleVoiceMode}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    voiceMode
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                  aria-label={voiceMode ? "Disable voice mode" : "Enable voice mode"}
                  title={voiceMode ? "Voice mode ON" : "Enable voice mode"}
                >
                  {voiceMode ? <Phone className="w-4 h-4" /> : <PhoneOff className="w-4 h-4" />}
                </button>
              )}
              {speechSupported && !voiceMode && (
                <button
                  onClick={toggleVoice}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    voiceEnabled
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                  aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                  title={voiceEnabled ? "Disable voice" : "Enable voice"}
                >
                  {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>
              )}
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Stop speaking"
                  title="Stop speaking"
                >
                  <Square className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Voice Mode Indicator */}
          {voiceMode && (
            <div className="px-4 py-2 flex items-center justify-center gap-2 border-b border-white/10 bg-green-500/10">
              <div
                className={`w-2 h-2 rounded-full ${isListening ? "bg-red-500 animate-pulse" : isSpeaking ? "bg-green-500 animate-pulse" : "bg-green-500"}`}
              />
              <span className="text-xs font-medium text-green-400">
                {isListening
                  ? "Listening..."
                  : isSpeaking
                    ? "Speaking..."
                    : status === "in_progress"
                      ? "Thinking..."
                      : "Voice mode active"}
              </span>
              {isListening && (
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <span
                      key={i}
                      className="w-0.5 bg-red-400 rounded-full"
                      style={{
                        height: `${Math.random() * 10 + 6}px`,
                        animation: `pulse 0.5s ease-in-out infinite ${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                    message.role === "user" ? "bg-blue-500 text-white" : "bg-white/10 text-white border border-white/10"
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
                  <div className="flex items-center justify-between mt-1 gap-2">
                    <p className={`text-xs ${message.role === "user" ? "text-white/70" : "text-slate-400"}`}>
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
                        className="text-slate-400 hover:text-white transition-colors p-0.5"
                        aria-label="Speak this message"
                        title="Speak this message"
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
                <div className="bg-white/10 text-white border border-white/10 rounded-2xl px-3 py-2">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isListening ? "Listening..." : voiceMode ? "Speak or type..." : "Type a message..."}
                disabled={status === "in_progress"}
                className={`flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${isListening ? "border-red-500 ring-2 ring-red-500/30" : voiceMode ? "border-green-500/50" : ""}`}
              />
              {recognitionSupported && (
                <button
                  onClick={isListening ? stopListening : startListening}
                  disabled={status === "in_progress"}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isListening
                      ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                      : voiceMode
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  aria-label={isListening ? "Stop listening" : "Start voice input"}
                  title={isListening ? "Stop listening" : "Start voice input"}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              )}
              <button
                onClick={handleSend}
                disabled={status === "in_progress" || !inputValue.trim()}
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Closed state buttons */}
      {!isOpen && (
        <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-start gap-2 group">
          {isMobile ? (
            <button
              onClick={handleHide}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-slate-700 hover:bg-red-500 text-white rounded-full shadow-lg border border-white/10 flex items-center justify-center transition-all duration-300 active:scale-95"
              aria-label="Hide AI assistant"
            >
              <EyeOff className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleHide}
              className="bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-red-400 rounded-full shadow-lg hover:shadow-xl p-2 transition-all duration-500 hover:scale-110 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
              aria-label="Hide AI assistant"
              title="Hide AI assistant"
            >
              <EyeOff className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
            </button>
          )}

          {/* Main chat button */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-slate-900/95 hover:bg-slate-800 backdrop-blur-md text-white rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex gap-3 md:gap-4 px-5 py-3 md:px-6 md:py-4 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 items-center overflow-hidden group/button"
            aria-label="Open chat with Panida"
          >
            {/* SiriOrb mini */}
            <div className="flex items-center justify-center relative z-10">
              <SiriOrb size="36px" animationDuration={20} isActive={false} className="drop-shadow-lg" />
            </div>

            {/* Two-line text layout */}
            <div className="flex flex-col items-start relative z-10">
              <span className="text-sm md:text-base font-medium text-white leading-tight">Panida</span>
              <span className="text-xs text-slate-400 leading-tight">PND50 Assistant</span>
            </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </>
  )
}
