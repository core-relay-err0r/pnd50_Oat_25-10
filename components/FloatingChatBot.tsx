"use client"

import type React from "react"
import type { SpeechRecognition } from "web-speech-api"

import { useState, useEffect, useRef, useCallback } from "react"
import { X, Send, Mic, Square, MessageSquare, History, Plus, Trash2, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/components/ui/use-mobile"
import { AnimatePresence, motion } from "framer-motion"
import { ColorOrb } from "@/components/ui/color-orb"
import {
  getOrCreateSession,
  getChatSessions,
  getChatMessages,
  saveMessage,
  updateSessionTitle,
  deleteChatSession,
  createNewSession,
  generateTitle,
  type ChatSession,
} from "@/app/actions/chat-history"

const WELCOME_MESSAGE = {
  id: "welcome-static",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi there! I'm Panida, your digital assistant from PND50. \n\nReady to get your accounting quote?😊 ",
    },
  ],
  createdAt: new Date(),
}

const CALCULATOR_WELCOME_MESSAGE = {
  id: "welcome-calculator",
  role: "assistant" as const,
  parts: [
    {
      type: "text" as const,
      text: "Hi! I see you're building a quote — great choice! 🎯\n\nAre you starting a new business, or do you already have a company registered in Thailand?",
    },
  ],
  createdAt: new Date(),
}

const SPEED_FACTOR = 1

function getSessionToken(): string {
  if (typeof window === "undefined") return ""
  let token = localStorage.getItem("panida_session_token")
  if (!token) {
    token = `anon_${crypto.randomUUID()}`
    localStorage.setItem("panida_session_token", token)
  }
  return token
}

export default function FloatingChatBot() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const isCalculatorPage = pathname === "/calculator"

  const [hasAutoSent, setHasAutoSent] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const [voiceMode, setVoiceMode] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognitionSupported, setRecognitionSupported] = useState(false)

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)
  const lastSpokenMessageRef = useRef<string | null>(null)

  const [inputValue, setInputValue] = useState("")

  const [showHistory, setShowHistory] = useState(false)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const [sessionToken, setSessionToken] = useState<string>("")
  const [isLoadingHistory, setIsLoadingHistory] = useState(false)
  const [hasSetTitle, setHasSetTitle] = useState(false)
  const [savedMessageIds, setSavedMessageIds] = useState<Set<string>>(new Set())

  // Panel dimensions
  const PANEL_WIDTH = isMobile ? 340 : 400
  const PANEL_HEIGHT = 520

  useEffect(() => {
    const token = getSessionToken()
    setSessionToken(token)

    if (token) {
      // Get or create a session when component mounts
      getOrCreateSession(token).then((session) => {
        if (session) {
          setCurrentSessionId(session.id)
          // Load existing messages for this session
          getChatMessages(session.id).then((msgs) => {
            if (msgs.length > 0) {
              setHasSetTitle(true)
            }
          })
        }
      })
    }
  }, [])

  useEffect(() => {
    if (showHistory && sessionToken) {
      setIsLoadingHistory(true)
      getChatSessions(sessionToken).then((sessions) => {
        setChatSessions(sessions)
        setIsLoadingHistory(false)
      })
    }
  }, [showHistory, sessionToken])

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

      const savedVoiceMode = localStorage.getItem("chatbot-voice-mode")
      if (savedVoiceMode === "true") {
        setVoiceMode(true)
        setVoiceEnabled(true)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen])

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
    setMessages,
  } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chatbot",
      headers: {
        "X-Current-Page": pathname || "/",
      },
    }),
  })

  const welcomeMessage = isCalculatorPage ? CALCULATOR_WELCOME_MESSAGE : WELCOME_MESSAGE
  const messages = [welcomeMessage, ...aiMessages]

  useEffect(() => {
    if (!currentSessionId || aiMessages.length === 0) return

    const lastMessage = aiMessages[aiMessages.length - 1]
    if (!lastMessage) return

    // Skip if this message was already saved
    if (savedMessageIds.has(lastMessage.id)) return

    // Only save when streaming is complete (status is "ready")
    if (status !== "ready") return

    // Extract text content from message parts
    const content = lastMessage.parts
      .filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("")

    if (!content) return

    // Save message to database
    saveMessage(currentSessionId, lastMessage.role as "user" | "assistant", content, {
      page: pathname,
      voiceMode,
    }).then(() => {
      // Mark this message as saved
      setSavedMessageIds((prev) => new Set([...prev, lastMessage.id]))
    })

    // Auto-generate title from first user message
    if (!hasSetTitle && lastMessage.role === "user") {
      const title = generateTitle(content)
      updateSessionTitle(currentSessionId, title)
      setHasSetTitle(true)
    }
  }, [aiMessages, currentSessionId, pathname, voiceMode, hasSetTitle, status, savedMessageIds])

  const speakWithElevenLabs = useCallback(async (text: string) => {
    if (!text) return

    try {
      setIsSpeaking(true)

      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate speech")
      }

      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)

      if (audioRef.current) {
        audioRef.current.pause()
      }

      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onended = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(audioUrl)
      }

      audio.onerror = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()
    } catch (error) {
      console.error("ElevenLabs TTS error:", error)
      setIsSpeaking(false)
      // Fallback to browser TTS
      speakTextFallback(text)
    }
  }, [])

  const speakTextFallback = useCallback(
    (text: string) => {
      if (!speechSupported || !synthRef.current) return
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
    [speechSupported],
  )

  const speakText = useCallback(
    (text: string) => {
      speakWithElevenLabs(text)
    },
    [speakWithElevenLabs],
  )

  const stopSpeaking = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    if (synthRef.current) {
      synthRef.current.cancel()
    }
    setIsSpeaking(false)
  }, [])

  useEffect(() => {
    if (!voiceMode || aiMessages.length === 0) return

    const lastMessage = aiMessages[aiMessages.length - 1]
    if (lastMessage.role === "assistant" && status !== "in_progress") {
      const messageText = lastMessage.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join(" ")

      if (messageText && messageText !== lastSpokenMessageRef.current) {
        lastSpokenMessageRef.current = messageText
        setIsProcessing(false)
        speakText(messageText)
      }
    }
  }, [aiMessages, status, voiceMode, speakText])

  const toggleVoiceMode = useCallback(() => {
    const newValue = !voiceMode
    setVoiceMode(newValue)
    setVoiceEnabled(newValue)
    localStorage.setItem("chatbot-voice-mode", String(newValue))
    localStorage.setItem("chatbot-voice-enabled", String(newValue))

    if (!newValue && isSpeaking) {
      stopSpeaking()
    }
  }, [voiceMode, isSpeaking, stopSpeaking])

  const toggleVoice = useCallback(() => {
    const newValue = !voiceEnabled
    setVoiceEnabled(newValue)
    localStorage.setItem("chatbot-voice-enabled", String(newValue))

    if (!newValue && isSpeaking) {
      stopSpeaking()
    }
  }, [voiceEnabled, isSpeaking, stopSpeaking])

  const startVoiceModeListening = useCallback(() => {
    if (!recognitionRef.current || isListening || isSpeaking) return

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      if (transcript.trim()) {
        setIsProcessing(true)
        sendMessage({ text: transcript })
      }
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
  }, [isListening, isSpeaking, sendMessage])

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

  const handleNewChat = useCallback(async () => {
    if (!sessionToken) return

    const newSession = await createNewSession(sessionToken)
    if (newSession) {
      setCurrentSessionId(newSession.id)
      setMessages([]) // Clear current messages
      setHasSetTitle(false)
      setSavedMessageIds(new Set()) // Clear saved message tracking
      setIsOpen(true)
    }
  }, [sessionToken, setMessages])

  const handleLoadSession = useCallback(
    async (session: ChatSession) => {
      setCurrentSessionId(session.id)
      setHasSetTitle(!!session.title)

      // Load messages for this session
      const msgs = await getChatMessages(session.id)

      // Convert to the format expected by useChat
      const formattedMessages = msgs.map((msg) => ({
        id: msg.id,
        role: msg.role as "user" | "assistant",
        parts: [{ type: "text" as const, text: msg.content }],
        createdAt: new Date(msg.created_at),
      }))

      setMessages(formattedMessages)
      setShowHistory(false)
    },
    [setMessages],
  )

  const handleDeleteSession = useCallback(
    async (sessionId: string, e: React.MouseEvent) => {
      e.stopPropagation()
      const success = await deleteChatSession(sessionId)
      if (success) {
        setChatSessions((prev) => prev.filter((s) => s.id !== sessionId))
        // If deleting current session, create a new one
        if (sessionId === currentSessionId) {
          handleNewChat()
        }
      }
    },
    [currentSessionId, handleNewChat],
  )

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

  const triggerOpen = useCallback(() => {
    setIsOpen(true)
    if (!voiceMode) {
      setTimeout(() => {
        textareaRef.current?.focus()
      }, 300)
    }
  }, [voiceMode])

  const tooltipMessages = isCalculatorPage
    ? ["Welcome to Schedule page", "Want suggestion in russian?", "Let me help build your quote", "Trust me on this!"]
    : ["Hi, I'm Panida", "Got questions?", "Don't know where to start?", "I'm here to help!"]
  const randomMessage = tooltipMessages[Math.floor(Date.now() / 8000) % tooltipMessages.length]

  const getVoiceModeStatus = () => {
    if (isListening) return "Listening..."
    if (isProcessing || status === "in_progress") return "Thinking..."
    if (isSpeaking) return "Speaking..."
    return "Tap to talk"
  }

  const formatSessionDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex items-end justify-end">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative"
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
                >
                  <div
                    className={`relative text-sm font-medium px-3 py-1.5 rounded-full shadow-lg ${
                      isCalculatorPage ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
                    }`}
                  >
                    {randomMessage}
                    <div
                      className={`absolute -bottom-1.5 right-5 w-3 h-3 rotate-45 ${
                        isCalculatorPage ? "bg-primary" : "bg-foreground"
                      }`}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              onClick={triggerOpen}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => !isOpen && setShowTooltip(false)}
              className="rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 relative"
              aria-label="Open AI assistant"
            >
              {isCalculatorPage && (
                <>
                  {/* Outer slow ping */}
                  <div
                    className="absolute -inset-4 md:-inset-6 rounded-full border-2 border-amber-400/60 animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                  {/* Middle pulse ring */}

                  {/* Inner glow */}
                </>
              )}
              <div
                className={`relative ${isCalculatorPage ? "rounded-full shadow-[0_0_25px_rgba(251,191,36,0.6)]" : ""}`}
              >
                <ColorOrb
                  dimension={isMobile ? "48px" : "64px"}
                  tones={{ base: "oklch(22.64% 0 0)" }}
                  spinDuration={15}
                />
              </div>
            </button>
          </motion.div>
        )}

        {isOpen && voiceMode && (
          <motion.div
            key="voice-mode"
            ref={wrapperRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative flex flex-col items-center"
          >
            {/* Status text above orb */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-center">
              <p className="text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-border/50">
                {getVoiceModeStatus()}
              </p>
            </motion.div>

            {/* Main orb button */}
            <button
              onClick={isListening ? stopListening : startVoiceModeListening}
              disabled={isSpeaking || isProcessing || status === "in_progress"}
              className={`relative rounded-full transition-all duration-300 ${
                isListening ? "scale-110" : "hover:scale-105"
              } ${isSpeaking || isProcessing ? "opacity-80" : ""}`}
              aria-label={isListening ? "Stop listening" : "Start talking"}
            >
              {/* Animated rings when listening or speaking */}
              {(isListening || isSpeaking) && (
                <>
                  <div
                    className={`absolute -inset-4 rounded-full border-2 ${
                      isListening ? "border-red-400/60" : "border-primary/60"
                    } animate-ping`}
                    style={{ animationDuration: "1.5s" }}
                  />
                  <div
                    className={`absolute -inset-2 rounded-full border-2 ${
                      isListening ? "border-red-400/40" : "border-primary/40"
                    } animate-pulse`}
                  />
                </>
              )}

              {/* Processing indicator */}
              {(isProcessing || status === "in_progress") && (
                <div
                  className="absolute -inset-3 rounded-full border-2 border-primary/50 animate-spin"
                  style={{ borderTopColor: "transparent", animationDuration: "1s" }}
                />
              )}

              <div
                className={`relative rounded-full ${
                  isListening
                    ? "shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                    : isSpeaking
                      ? "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                      : "shadow-lg"
                }`}
              >
                <ColorOrb
                  dimension={isMobile ? "80px" : "100px"}
                  tones={{ base: "oklch(22.64% 0 0)" }}
                  spinDuration={isListening ? 5 : isSpeaking ? 8 : 15}
                />
              </div>
            </button>

            <div className="mt-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-full px-1.5 py-1 shadow-md">
              {/* Switch to text mode */}
              <button
                onClick={toggleVoiceMode}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Switch to text mode"
              >
                <MessageSquare className="w-4 h-4" />
              </button>

              {/* Divider */}
              <div className="w-px h-4 bg-border/50" />

              {/* Stop speaking */}
              {isSpeaking && (
                <>
                  <button
                    onClick={stopSpeaking}
                    className="p-1.5 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors animate-pulse"
                    aria-label="Stop speaking"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                  <div className="w-px h-4 bg-border/50" />
                </>
              )}

              {/* Close */}
              <button
                onClick={() => {
                  setIsOpen(false)
                  stopSpeaking()
                  stopListening()
                }}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Expanded Chat Panel */}
        {isOpen && !voiceMode && (
          <motion.div
            key="expanded"
            ref={wrapperRef}
            className="bg-background relative flex flex-col overflow-hidden border border-border shadow-2xl rounded-[20px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 550 / SPEED_FACTOR, damping: 45, mass: 0.7 }}
            style={{ width: PANEL_WIDTH, height: PANEL_HEIGHT }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-gradient-to-r from-muted/30 to-transparent">
              <div className="flex items-center gap-3">
                <ColorOrb dimension="32px" tones={{ base: "oklch(22.64% 0 0)" }} spinDuration={20} />
                <div>
                  <h3 className="font-semibold text-sm text-foreground">Panida</h3>
                  <p className="text-xs text-muted-foreground">PND50 Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className={`text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors ${showHistory ? "bg-muted text-foreground" : ""}`}
                  aria-label="Chat history"
                  title="Chat history"
                >
                  <History className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNewChat}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors"
                  aria-label="New chat"
                  title="New chat"
                >
                  <Plus className="w-4 h-4" />
                </button>
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors animate-pulse"
                    aria-label="Stop speaking"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false)
                    stopSpeaking()
                    setShowHistory(false)
                  }}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-1.5 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 top-[57px] bg-background z-10 flex flex-col"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                    <button
                      onClick={() => setShowHistory(false)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Back to chat
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-2">
                    {isLoadingHistory ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
                      </div>
                    ) : chatSessions.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground text-sm">
                        <History className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>No chat history yet</p>
                        <p className="text-xs mt-1">Start a conversation to see it here</p>
                      </div>
                    ) : (
                      chatSessions.map((session) => (
                        <div
                          key={session.id}
                          onClick={() => handleLoadSession(session)}
                          className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                            session.id === currentSessionId
                              ? "bg-primary/10 border border-primary/30"
                              : "bg-muted/50 hover:bg-muted border border-transparent"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{session.title || "New conversation"}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {formatSessionDate(session.updated_at)}
                            </p>
                          </div>
                          <button
                            onClick={(e) => handleDeleteSession(session.id, e)}
                            className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-all"
                            aria-label="Delete conversation"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
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
                      <span className="text-[10px] text-muted-foreground">
                        {message.createdAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {status === "in_progress" && (
                <div className="flex justify-start">
                  <div className="bg-background text-foreground border border-border/50 rounded-2xl px-4 py-3">
                    <div className="flex gap-1.5">
                      <span
                        className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
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
                    placeholder="Ask me anything..."
                    disabled={status === "in_progress"}
                    rows={1}
                    className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ minHeight: "42px", maxHeight: "120px" }}
                  />
                </div>
                {recognitionSupported && (
                  <Button
                    onClick={toggleVoiceMode}
                    disabled={status === "in_progress"}
                    size="icon"
                    variant="outline"
                    className="rounded-xl h-[42px] w-[42px] shrink-0 bg-transparent"
                    aria-label="Switch to voice mode"
                    title="Switch to voice mode"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                )}
                <Button
                  onClick={handleSend}
                  disabled={status === "in_progress" || !inputValue.trim()}
                  size="icon"
                  className="rounded-xl h-[42px] w-[42px] shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 text-center">
                Enter to send · Click mic for voice mode
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { FloatingChatBot }
