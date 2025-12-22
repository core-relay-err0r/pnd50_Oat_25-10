"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    testimonial:
      "PND50 transformed accounting process completely. Our AI-powered system made compliance effortless and saved clients countless hours every month.",
    author: "Sarah M. - Expat specialist @ PND50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fqOjt4F2iQkcMOnon4i2dKObje3S4k.png",
  },
  {
    id: 2,
    testimonial:
      "We're an accounting firm that understands tech companies. Our real-time dashboard and expert support are game-changers for many business.",
    author: "Chanika M. - Senior accountant @ PND50",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f5YmafBegD1DBf0uCVBZMQtEWyLneW.png",
  },
  {
    id: 3,
    testimonial:
      "As an expat entrepreneur, I can understand the difficulty of navigating Thai regulations. PND50's team will make sure everything clear and handle it all seamlessly.",
    author: "Eugene Prudchenko - Director @ Burakorn Partners",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmjPZgdEWF3ghcNfVWLFCGoXEkrQJA.png",
  },
]

export function ShuffleTestimonials() {
  const [positions, setPositions] = useState<Array<"front" | "middle" | "back">>(["front", "middle", "back"])

  const handleShuffle = () => {
    const newPositions = [...positions]
    const last = newPositions.pop()
    if (last) {
      newPositions.unshift(last)
    }
    setPositions(newPositions as Array<"front" | "middle" | "back">)
  }

  return (
    <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          {...testimonial}
          handleShuffle={handleShuffle}
          position={positions[index]}
        />
      ))}
    </div>
  )
}
