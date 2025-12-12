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

async function tablesExist(): Promise<boolean> {
  try {
    const supabase = await createServerClient()
    const result = await supabase.from("chat_sessions").select("id").limit(1)

    // Check if there's an error indicating the table doesn't exist
    if (result.error) {
      const errorMsg = result.error.message?.toLowerCase() || ""
      const errorCode = result.error.code || ""

      // These indicate table doesn't exist
      if (
        errorMsg.includes("does not exist") ||
        errorMsg.includes("relation") ||
        errorCode === "42P01" ||
        errorCode === "PGRST116"
      ) {
        return false
      }
      // Other errors - assume tables might exist but there's a different issue
      console.log("[v0] Supabase check error:", result.error.message)
      return false
    }

    return true
  } catch (err) {
    // Catch any unexpected errors
    console.log("[v0] tablesExist check failed:", err)
    return false
  }
}

async function safeSupabaseCall<T>(operation: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await operation()
  } catch (err) {
    console.log("[v0] Supabase operation failed:", err)
    return fallback
  }
}

// Get or create a chat session for the given token
export async function getOrCreateSession(sessionToken: string): Promise<ChatSession | null> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) {
      return null
    }

    const supabase = await createServerClient()

    // First try to find existing session
    const { data: existing, error: fetchError } = await supabase
      .from("chat_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    if (existing && !fetchError) {
      return existing as ChatSession
    }

    // Create new session
    const { data: newSession, error } = await supabase
      .from("chat_sessions")
      .insert({ session_token: sessionToken })
      .select()
      .single()

    if (error) {
      console.log("[v0] Error creating chat session:", error.message)
      return null
    }

    return newSession as ChatSession
  }, null)
}

// Create a new chat session (for "New Chat" button)
export async function createNewSession(sessionToken: string): Promise<ChatSession | null> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return null

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .insert({ session_token: sessionToken })
      .select()
      .single()

    if (error) {
      console.log("[v0] Error creating new session:", error.message)
      return null
    }

    return data as ChatSession
  }, null)
}

// Get all chat sessions for a user/device
export async function getChatSessions(sessionToken: string): Promise<ChatSession[]> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return []

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .order("updated_at", { ascending: false })

    if (error) {
      console.log("[v0] Error fetching chat sessions:", error.message)
      return []
    }

    return (data || []) as ChatSession[]
  }, [])
}

// Get messages for a specific session
export async function getChatMessages(sessionId: string): Promise<ChatMessage[]> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return []

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })

    if (error) {
      console.log("[v0] Error fetching chat messages:", error.message)
      return []
    }

    return (data || []) as ChatMessage[]
  }, [])
}

// Save a message to the database
export async function saveMessage(
  sessionId: string,
  role: "user" | "assistant",
  content: string,
  metadata: Record<string, unknown> = {},
): Promise<ChatMessage | null> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return null

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
      console.log("[v0] Error saving message:", error.message)
      return null
    }

    // Update session's updated_at timestamp
    await supabase.from("chat_sessions").update({ updated_at: new Date().toISOString() }).eq("id", sessionId)

    return data as ChatMessage
  }, null)
}

// Update session title (auto-generate from first message)
export async function updateSessionTitle(sessionId: string, title: string): Promise<void> {
  await safeSupabaseCall(async () => {
    if (!(await tablesExist())) return

    const supabase = await createServerClient()
    await supabase.from("chat_sessions").update({ title }).eq("id", sessionId)
  }, undefined)
}

// Delete a chat session and its messages
export async function deleteChatSession(sessionId: string): Promise<boolean> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return false

    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("id", sessionId)

    if (error) {
      console.log("[v0] Error deleting session:", error.message)
      return false
    }

    return true
  }, false)
}

// Delete all chat history for a session token
export async function clearAllChatHistory(sessionToken: string): Promise<boolean> {
  return safeSupabaseCall(async () => {
    if (!(await tablesExist())) return false

    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("session_token", sessionToken)

    if (error) {
      console.log("[v0] Error clearing chat history:", error.message)
      return false
    }

    return true
  }, false)
}

// Generate a title from the first user message
export function generateTitle(message: string): string {
  // Truncate to first 50 chars and clean up
  const cleaned = message.trim().replace(/\n/g, " ").substring(0, 50)
  return cleaned.length < message.length ? `${cleaned}...` : cleaned
}
