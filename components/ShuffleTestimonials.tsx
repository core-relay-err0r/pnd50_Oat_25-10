"use client"

import { TestimonialCard } from "@/components/ui/testimonial-cards"
import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    testimonial:
      "PND50 transformed accounting process completely. Our AI-powered system made compliance effortless and saved clients countless hours every month.",
    author: "Sarah M.",
    designation: "Expat specialist @ PND50",
    image: "/professional-woman-accountant-portrait.jpg",
  },
  {
    id: 2,
    testimonial:
      "We're an accounting firm that understands tech companies. The real-time dashboard and expert support are game-changers for our business.",
    author: "Chanika M.",
    designation: "Senior accountant @ PND50",
    image: "/professional-asian-woman-accountant-portrait.jpg",
  },
  {
    id: 3,
    testimonial:
      "As an expat entrepreneur, I can understand the difficulty of navigating Thai regulations. PND50's team will make sure everything clear and handle it all seamlessly.",
    author: "Eugene Prudchenko",
    designation: "Director @ Burakorn Partners",
    image: "/professional-businessman-portrait-suit.jpg",
  },
]

export function ShuffleTestimonials() {
  const [positions, setPositions] = useState<Array<"front" | "middle" | "back">>(["front", "middle", "back"])
  const [active, setActive] = useState(0)

  const rotations = useMemo(() => testimonials.map(() => `${Math.floor(Math.random() * 16) - 8}deg`), [])

  const handleShuffle = () => {
    const newPositions = [...positions]
    const last = newPositions.pop()
    if (last) {
      newPositions.unshift(last)
    }
    setPositions(newPositions as Array<"front" | "middle" | "back">)
  }

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [handleNext])

  const isActive = (index: number) => index === active

  return (
    <>
      {/* Desktop view - keep existing stacked cards */}
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px] hidden lg:block">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            testimonial={testimonial.testimonial}
            author={`${testimonial.author} - ${testimonial.designation}`}
            image={testimonial.image}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>

      {/* Mobile view */}
      <div className="lg:hidden w-full px-4 py-8">
        <div className="relative grid grid-cols-1 gap-y-8">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-full max-w-xs">
              <AnimatePresence mode="popLayout">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotate: rotations[index] }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.5,
                      scale: isActive(index) ? 1 : 0.9,
                      y: isActive(index) ? 0 : 20,
                      zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                      rotate: isActive(index) ? "0deg" : rotations[index],
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-2xl"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Text and Controls Section */}
          <div className="flex flex-col justify-center py-4 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-800">{testimonials[active].author}</h3>
                <p className="text-sm text-slate-500">{testimonials[active].designation}</p>
                <motion.p className="mt-4 text-base text-slate-600 leading-relaxed">
                  "{testimonials[active].testimonial}"
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                <ArrowLeft className="h-5 w-5 text-slate-600 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                <ArrowRight className="h-5 w-5 text-slate-600 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
