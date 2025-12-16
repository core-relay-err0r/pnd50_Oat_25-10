// Generate a title from the first user message
export function generateTitle(message: string): string {
  // Truncate to first 50 chars and clean up
  const cleaned = message.trim().replace(/\n/g, " ").substring(0, 50)
  return cleaned.length < message.length ? `${cleaned}...` : cleaned
}
