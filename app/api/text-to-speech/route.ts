import { type NextRequest, NextResponse } from "next/server"

// ElevenLabs voice ID for a young female voice (Rachel - warm, friendly)
const VOICE_ID = "21m00Tcm4TlvDq8ikWAM" // Rachel voice

async function fetchWithRetry(
  url: string,
  options: RequestInit,
  maxRetries = 3,
  initialDelay = 1000,
): Promise<Response> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, options)

      // If rate limited (429), wait and retry
      if (response.status === 429) {
        const delay = initialDelay * Math.pow(2, attempt) // Exponential backoff: 1s, 2s, 4s
        console.log(`[TTS] Rate limited, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`)
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }

      return response
    } catch (error) {
      lastError = error as Error
      const delay = initialDelay * Math.pow(2, attempt)
      console.log(`[TTS] Request failed, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries})`)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }

  throw lastError || new Error("Max retries exceeded")
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "ElevenLabs API key not configured", fallback: true }, { status: 503 })
    }

    // Clean text for TTS (remove markdown, emojis)
    const cleanText = text
      .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
      .replace(/[\u{1F300}-\u{1F5FF}]/gu, "")
      .replace(/[\u{1F680}-\u{1F6FF}]/gu, "")
      .replace(/[\u{2600}-\u{26FF}]/gu, "")
      .replace(/[\u{2700}-\u{27BF}]/gu, "")
      .replace(/[*#_~`]/g, "")
      .replace(/\*\*/g, "")
      .trim()

    if (!cleanText) {
      return NextResponse.json({ error: "No speakable text" }, { status: 400 })
    }

    const truncatedText = cleanText.length > 500 ? cleanText.substring(0, 500) + "..." : cleanText

    const response = await fetchWithRetry(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: truncatedText,
          model_id: "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.3,
            use_speaker_boost: true,
          },
        }),
      },
      3, // max retries
      1000, // initial delay 1s
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("ElevenLabs API error:", response.status, errorText)

      if (response.status === 429) {
        return NextResponse.json(
          {
            error: "Rate limited - please try again",
            fallback: true,
          },
          { status: 429 },
        )
      }

      return NextResponse.json({ error: "Failed to generate speech", fallback: true }, { status: 500 })
    }

    const audioBuffer = await response.arrayBuffer()

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600",
      },
    })
  } catch (error) {
    console.error("TTS error:", error)
    return NextResponse.json({ error: "Internal server error", fallback: true }, { status: 500 })
  }
}
