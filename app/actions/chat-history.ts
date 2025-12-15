"use server"

import { createServerClient } from "@/lib/supabase/server"

export interface ChatSession {
  id: string
  session_token: string
  title: string | null
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  session_id: string
  role: "user" | "assistant"
  content: string
  metadata: Record<string, unknown>
  created_at: string
}

// Get or create a chat session for the given token
export async function getOrCreateSession(sessionToken: string): Promise<ChatSession | null> {
  try {
    console.log("[v0] getOrCreateSession called with token:", sessionToken)
    const supabase = await createServerClient()

    console.log("[v0] Supabase client created, checking for existing session...")

    // First try to find existing session
    const { data: existing, error: fetchError } = await supabase
      .from("chat_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    console.log("[v0] Existing session query result:", { existing, fetchError })

    if (existing && !fetchError) {
      console.log("[v0] Found existing session:", existing.id)
      return existing as ChatSession
    }

    console.log("[v0] No existing session, creating new one...")

    // Create new session
    const { data: newSession, error } = await supabase
      .from("chat_sessions")
      .insert({ session_token: sessionToken })
      .select()
      .single()

    console.log("[v0] New session creation result:", { newSession, error })

    if (error) {
      console.error("[v0] Error creating chat session:", error)
      console.error("[v0] Error details:", JSON.stringify(error, null, 2))
      return null
    }

    console.log("[v0] Successfully created session:", newSession.id)
    return newSession as ChatSession
  } catch (error) {
    console.error("[v0] Exception in getOrCreateSession:", error)
    console.error("[v0] Error type:", typeof error)
    console.error("[v0] Error stringified:", JSON.stringify(error, null, 2))
    return null
  }
}

// Create a new chat session (for "New Chat" button)
export async function createNewSession(sessionToken: string): Promise<ChatSession | null> {
  try {
    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .insert({ session_token: sessionToken })
      .select()
      .single()

    if (error) {
      console.error("Error creating new session:", error)
      return null
    }

    return data as ChatSession
  } catch (error) {
    console.error("Error in createNewSession:", error)
    return null
  }
}

// Get all chat sessions for a user/device
export async function getChatSessions(sessionToken: string): Promise<ChatSession[]> {
  try {
    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .order("updated_at", { ascending: false })

    if (error) {
      console.error("Error fetching chat sessions:", error)
      return []
    }

    return (data || []) as ChatSession[]
  } catch (error) {
    console.error("Error in getChatSessions:", error)
    return []
  }
}

// Get messages for a specific session
export async function getChatMessages(sessionId: string): Promise<ChatMessage[]> {
  try {
    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })

    if (error) {
      console.error("Error fetching chat messages:", error)
      return []
    }

    return (data || []) as ChatMessage[]
  } catch (error) {
    console.error("Error in getChatMessages:", error)
    return []
  }
}

// Save a message to the database
export async function saveMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string,
  metadata: Record<string, unknown> = {},
): Promise<ChatMessage | null> {
  try {
    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_messages")
      .insert({
        session_id: sessionId,
        role,
        content,
        metadata,
      })
      .select()
      .single()

    if (error) {
      console.error("Error saving message:", error)
      return null
    }

    // Update session's updated_at timestamp
    await supabase.from("chat_sessions").update({ updated_at: new Date().toISOString() }).eq("id", sessionId)

    return data as ChatMessage
  } catch (error) {
    console.error("Error in saveMessage:", error)
    return null
  }
}

// Update session title (auto-generate from first message)
export async function updateSessionTitle(sessionId: string, title: string): Promise<void> {
  try {
    const supabase = await createServerClient()
    await supabase.from("chat_sessions").update({ title }).eq("id", sessionId)
  } catch (error) {
    console.error("Error updating session title:", error)
  }
}

// Delete a chat session and its messages
export async function deleteChatSession(sessionId: string): Promise<boolean> {
  try {
    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("id", sessionId)

    if (error) {
      console.error("Error deleting session:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in deleteChatSession:", error)
    return false
  }
}

// Delete all chat history for a session token
export async function clearAllChatHistory(sessionToken: string): Promise<boolean> {
  try {
    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("session_token", sessionToken)

    if (error) {
      console.error("Error clearing chat history:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Error in clearAllChatHistory:", error)
    return false
  }
}

// Generate a title from the first user message
export function generateTitle(message: string): string {
  // Truncate to first 50 chars and clean up
  const cleaned = message.trim().replace(/\n/g, " ").substring(0, 50)
  return cleaned.length < message.length ? `${cleaned}...` : cleaned
}
