"use client"

import type React from "react"

import { useState, useEffectEvent, useEffect } from "react"
import { X, MessageCircle, Send, Sparkles, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { usePathname } from "next/navigation"

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

  useEffect(() => {
    const hidden = localStorage.getItem("chatbot-hidden")
    if (hidden === "true") {
      setIsHidden(true)
    }
  }, [])

  const handleHide = () => {
    setIsHidden(true)
    setIsOpen(false)
    localStorage.setItem("chatbot-hidden", "true")
  }

  const handleShow = () => {
    setIsHidden(false)
    localStorage.removeItem("chatbot-hidden")
  }

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

  const performSend = useEffectEvent((message: string) => {
    sendMessage({ text: message })
    setInputValue("")
  })

  const handleSend = () => {
    if (!inputValue.trim() || status === "in_progress") return
    performSend(inputValue)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (isHidden) {
    return (
      <button
        onClick={handleShow}
        className="fixed bottom-6 right-6 z-50 bg-muted hover:bg-muted/80 text-muted-foreground rounded-full shadow-lg px-4 py-2 text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
        aria-label="Show AI assistant"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Show AI Chat</span>
      </button>
    )
  }

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
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
                  {status === "in_progress" ? "Typing..." : "Online"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 rounded-lg p-1.5 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
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
                  <p
                    className={`text-xs mt-1 ${message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                  >
                    {message.createdAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
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
          </div>

          {/* Input */}
          <div className="p-4 bg-background border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={status === "in_progress"}
                className="flex-1 px-4 py-2.5 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed bg-background text-foreground"
              />
              <Button
                onClick={handleSend}
                disabled={status === "in_progress" || !inputValue.trim()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Press Enter to send</p>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-start gap-2 group">
          <button
            onClick={handleHide}
            className="bg-muted hover:bg-muted/80 text-muted-foreground rounded-full shadow-lg p-2 transition-all duration-300 hover:scale-105 opacity-0 group-hover:opacity-100"
            aria-label="Hide AI assistant"
            title="Hide AI assistant"
          >
            <EyeOff className="w-4 h-4" />
          </button>

          {/* Main chat button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-background hover:bg-accent text-foreground rounded-full shadow-2xl flex gap-4 px-7 py-5 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-100 shadow-xl border-4 border-dotted border-primary items-center"
            aria-label="Open chat with Panida"
          >
            {/* Sparkle icon with primary color */}
            <div className="flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>

            {/* Two-line text layout */}
            <div className="flex flex-col items-start">
              <span className="text-base font-bold text-foreground leading-tight">AI assistant</span>
              <span className="text-sm text-muted-foreground leading-tight">Chat with Panida</span>
            </div>
          </button>
        </div>
      )}

      {/* Close button when chat is open */}
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105"
          aria-label="Close chat"
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </>
  )
}
