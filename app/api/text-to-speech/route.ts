import { type NextRequest, NextResponse } from "next/server"

const VOICE_CONFIG = {
  "en-US": {
    voiceId: "21m00Tcm4TlvDq8ikWAM", // Rachel - English
    modelId: "eleven_monolingual_v1",
  },
  "th-TH": {
    voiceId: "21m00Tcm4TlvDq8ikWAM", // Use multilingual model for Thai
    modelId: "eleven_multilingual_v2",
  },
  "ru-RU": {
    voiceId: "21m00Tcm4TlvDq8ikWAM", // Use multilingual model for Russian
    modelId: "eleven_multilingual_v2",
  },
} as const

type SupportedLanguage = keyof typeof VOICE_CONFIG

export async function POST(request: NextRequest) {
  try {
    const { text, language = "en-US" } = await request.json()

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "ElevenLabs API key not configured" }, { status: 500 })
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

    const config = VOICE_CONFIG[language as SupportedLanguage] || VOICE_CONFIG["en-US"]

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${config.voiceId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
      body: JSON.stringify({
        text: cleanText,
        model_id: config.modelId,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true,
        },
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("ElevenLabs API error:", error)
      return NextResponse.json({ error: "Failed to generate speech" }, { status: 500 })
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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
