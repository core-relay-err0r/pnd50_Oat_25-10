"use server"

export type FormState = {
  message: string
  status: "success" | "error"
  errors?: Record<string, string[]>
}

// Server actions can be added here as needed
