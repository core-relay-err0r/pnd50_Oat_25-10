"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { X, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

const getSessionId = () => {
  if (typeof window === "undefined") return ""
  let sessionId = sessionStorage.getItem("chatbot-session-id")
  if (!sessionId) {
    sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem("chatbot-session-id", sessionId)
  }
  return sessionId
}

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return false
    return sessionStorage.getItem("chatbot-open") === "true"
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionId = useRef(getSessionId())

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chatbot" }),
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hi there! 👋 I'm here to help with PND50's accounting and tax services. Feel free to ask about our services or click 'Schedule Consultation' to get started!",
          },
        ],
      },
    ],
    body: {
      sessionId: sessionId.current,
    },
  })

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    sessionStorage.setItem("chatbot-open", isOpen.toString())
  }, [isOpen])

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

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-3rem)] transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Chat with PND50 AI Assistant"
        aria-hidden={!isOpen}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">PND50 AI Assistant</h3>
                <p className="text-blue-100 text-xs">{status === "in_progress" ? "Typing..." : "Online"}</p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50" role="log" aria-live="polite">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                  role={message.role === "user" ? "article" : "article"}
                  aria-label={message.role === "user" ? "Your message" : "Assistant message"}
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
                  <p className={`text-xs mt-1 ${message.role === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.createdAt?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {status === "in_progress" && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl px-4 py-2.5">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={status === "in_progress"}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Chat message input"
              />
              <Button
                onClick={handleSend}
                disabled={status === "in_progress" || !inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Press Enter to send</p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 group ${
          isOpen ? "rotate-0" : "rotate-0"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        <MessageCircle className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "scale-0" : "scale-100"}`} />
        <X className={`w-6 h-6 absolute transition-transform duration-300 ${isOpen ? "scale-100" : "scale-0"}`} />

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            AI
          </span>
        )}
      </button>
    </>
  )
}
