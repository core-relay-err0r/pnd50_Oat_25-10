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
    const { error } = await supabase.from("chat_sessions").select("id").limit(1)
    // If error contains "does not exist" or similar, tables don't exist
    if (error && (error.message.includes("does not exist") || error.code === "42P01")) {
      return false
    }
    return true
  } catch {
    return false
  }
}

// Get or create a chat session for the given token
export async function getOrCreateSession(sessionToken: string): Promise<ChatSession | null> {
  try {
    if (!(await tablesExist())) {
      console.log("[v0] Chat tables not set up yet - run the SQL migration script")
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
      console.error("Error creating chat session:", error.message)
      return null
    }

    return newSession as ChatSession
  } catch (err) {
    console.error("Error in getOrCreateSession:", err)
    return null
  }
}

// Create a new chat session (for "New Chat" button)
export async function createNewSession(sessionToken: string): Promise<ChatSession | null> {
  try {
    if (!(await tablesExist())) return null

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .insert({ session_token: sessionToken })
      .select()
      .single()

    if (error) {
      console.error("Error creating new session:", error.message)
      return null
    }

    return data as ChatSession
  } catch (err) {
    console.error("Error in createNewSession:", err)
    return null
  }
}

// Get all chat sessions for a user/device
export async function getChatSessions(sessionToken: string): Promise<ChatSession[]> {
  try {
    if (!(await tablesExist())) return []

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_sessions")
      .select("*")
      .eq("session_token", sessionToken)
      .order("updated_at", { ascending: false })

    if (error) {
      console.error("Error fetching chat sessions:", error.message)
      return []
    }

    return (data || []) as ChatSession[]
  } catch (err) {
    console.error("Error in getChatSessions:", err)
    return []
  }
}

// Get messages for a specific session
export async function getChatMessages(sessionId: string): Promise<ChatMessage[]> {
  try {
    if (!(await tablesExist())) return []

    const supabase = await createServerClient()

    const { data, error } = await supabase
      .from("chat_messages")
      .select("*")
      .eq("session_id", sessionId)
      .order("created_at", { ascending: true })

    if (error) {
      console.error("Error fetching chat messages:", error.message)
      return []
    }

    return (data || []) as ChatMessage[]
  } catch (err) {
    console.error("Error in getChatMessages:", err)
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
      console.error("Error saving message:", error.message)
      return null
    }

    // Update session's updated_at timestamp
    await supabase.from("chat_sessions").update({ updated_at: new Date().toISOString() }).eq("id", sessionId)

    return data as ChatMessage
  } catch (err) {
    console.error("Error in saveMessage:", err)
    return null
  }
}

// Update session title (auto-generate from first message)
export async function updateSessionTitle(sessionId: string, title: string): Promise<void> {
  try {
    if (!(await tablesExist())) return

    const supabase = await createServerClient()
    await supabase.from("chat_sessions").update({ title }).eq("id", sessionId)
  } catch (err) {
    console.error("Error in updateSessionTitle:", err)
  }
}

// Delete a chat session and its messages
export async function deleteChatSession(sessionId: string): Promise<boolean> {
  try {
    if (!(await tablesExist())) return false

    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("id", sessionId)

    if (error) {
      console.error("Error deleting session:", error.message)
      return false
    }

    return true
  } catch (err) {
    console.error("Error in deleteChatSession:", err)
    return false
  }
}

// Delete all chat history for a session token
export async function clearAllChatHistory(sessionToken: string): Promise<boolean> {
  try {
    if (!(await tablesExist())) return false

    const supabase = await createServerClient()

    const { error } = await supabase.from("chat_sessions").delete().eq("session_token", sessionToken)

    if (error) {
      console.error("Error clearing chat history:", error.message)
      return false
    }

    return true
  } catch (err) {
    console.error("Error in clearAllChatHistory:", err)
    return false
  }
}

// Generate a title from the first user message
export function generateTitle(message: string): string {
  // Truncate to first 50 chars and clean up
  const cleaned = message.trim().replace(/\n/g, " ").substring(0, 50)
  return cleaned.length < message.length ? `${cleaned}...` : cleaned
}
