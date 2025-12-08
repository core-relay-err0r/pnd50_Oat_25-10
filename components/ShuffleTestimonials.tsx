"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

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
    <>
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px] hidden lg:block">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>

      <motion.div
        className="lg:hidden grid grid-cols-1 gap-6 w-full px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-sky-200/30 border border-sky-100"
            variants={itemVariants}
          >
            <div className="relative h-64">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                className="h-full w-full object-cover"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            </div>

            {/* Content within the card */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
              <Quote className="mb-3 h-6 w-6 text-sky-300/60" aria-hidden="true" />
              <blockquote className="text-sm font-medium leading-relaxed line-clamp-3">
                {testimonial.testimonial}
              </blockquote>
              <figcaption className="mt-3">
                <p className="text-xs font-semibold text-sky-200">{testimonial.author}</p>
              </figcaption>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
