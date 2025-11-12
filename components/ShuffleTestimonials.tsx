"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    testimonial:
      "PND50 transformed our accounting completely. Their AI-powered system made compliance effortless and saved us countless hours every month.",
    author: "Sarah M. - CEO @ TechStart Bangkok",
  },
  {
    id: 2,
    testimonial:
      "Finally, an accounting firm that understands tech companies. The real-time dashboard and expert support are game-changers for our business.",
    author: "Michael Chen - Founder @ Digital Ventures",
  },
  {
    id: 3,
    testimonial:
      "As an expat entrepreneur, navigating Thai regulations was overwhelming. PND50's team made everything clear and handled it all seamlessly.",
    author: "Elena Volkov - Director @ Innovation Hub",
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
