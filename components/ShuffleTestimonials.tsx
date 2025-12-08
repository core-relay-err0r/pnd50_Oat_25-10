"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    testimonial:
      "PND50 transformed accounting process completely. Our AI-powered system made compliance effortless and saved clients countless hours every month.",
    author: "Sarah M. - Expat specialist @ PND50",
    image: "/images/image.png",
  },
  {
    id: 2,
    testimonial:
      "We're an accounting firm that understands tech companies. The real-time dashboard and expert support are game-changers for our business.",
    author: "Chanika M. - Senior accountant @ PND50",
    image: "/images/image.png",
  },
  {
    id: 3,
    testimonial:
      "As an expat entrepreneur, I can understand the difficulty of navigating Thai regulations. PND50's team will make sure everything clear and handle it all seamlessly.",
    author: "Eugene Prudchenko - Director @ Burakorn Partners",
    image: "/images/image.png",
  },
]

export function ShuffleTestimonials() {
  const [positions, setPositions] = useState<Array<"front" | "middle" | "back">>(["front", "middle", "back"])

  const handleShuffleLeft = () => {
    const newPositions = [...positions]
    const last = newPositions.pop()
    if (last) {
      newPositions.unshift(last)
    }
    setPositions(newPositions as Array<"front" | "middle" | "back">)
  }

  const handleShuffleRight = () => {
    const newPositions = [...positions]
    const first = newPositions.shift()
    if (first) {
      newPositions.push(first)
    }
    setPositions(newPositions as Array<"front" | "middle" | "back">)
  }

  return (
    <div className="relative">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffleLeft}
            position={positions[index]}
          />
        ))}
      </div>

      <div className="flex lg:hidden justify-center gap-4 mt-4 -ml-[100px] md:-ml-[175px] w-[350px]">
        <button
          onClick={handleShuffleRight}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-sky-200 shadow-md hover:bg-sky-50 active:scale-95 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-sky-600" />
        </button>
        <button
          onClick={handleShuffleLeft}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-sky-200 shadow-md hover:bg-sky-50 active:scale-95 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-sky-600" />
        </button>
      </div>
    </div>
  )
}
