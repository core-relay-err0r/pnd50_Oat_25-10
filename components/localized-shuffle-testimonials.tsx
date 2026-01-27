"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState } from "react"
import { translations, type Locale } from "@/lib/translations"

const images = ["/images/image.png", "/images/image.png", "/images/image.png"]

export function LocalizedShuffleTestimonials({ locale }: { locale: Locale }) {
  const [positions, setPositions] = useState<Array<"front" | "middle" | "back">>(["front", "middle", "back"])
  const t = translations[locale]

  const testimonials = t.testimonials.map((testimonial, index) => ({
    ...testimonial,
    image: images[index],
  }))

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
