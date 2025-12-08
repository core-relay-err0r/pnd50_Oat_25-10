"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  handleShuffle: () => void
  testimonial: string
  position: "front" | "middle" | "back"
  id: number
  author: string
  image?: string
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, author, image }: TestimonialCardProps) {
  const dragRef = React.useRef(0)
  const isFront = position === "front"
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const blurFilter = isDesktop && position !== "front" ? "blur(0.8px)" : undefined

  const dragThreshold = isDesktop ? 150 : 50

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
        filter: blurFilter,
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag={isFront ? "x" : false}
      dragElastic={0.35}
      dragConstraints={{
        left: -100,
        right: 100,
      }}
      onDragStart={(e, info) => {
        dragRef.current = info.point.x
      }}
      onDragEnd={(e, info) => {
        const swipeDistance = dragRef.current - info.point.x
        const swipeVelocity = Math.abs(info.velocity.x)

        // Trigger shuffle if swiped past threshold OR if swipe velocity is high enough
        if (swipeDistance > dragThreshold || swipeVelocity > 500) {
          handleShuffle()
        }
        dragRef.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[350px] w-[280px] md:h-[450px] md:w-[350px] select-none place-content-center space-y-4 md:space-y-6 rounded-3xl border border-sky-200/60 p-6 md:p-8 bg-gradient-to-b from-white via-sky-50/80 to-blue-50/70 shadow-xl shadow-sky-200/30 backdrop-blur-sm touch-pan-y ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <div className="relative mx-auto">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-300 via-blue-200 to-teal-300 opacity-50 blur-sm" />
        <img
          src={image || `https://i.pravatar.cc/128?img=${id}`}
          alt={`Avatar of ${author}`}
          className="relative pointer-events-none h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-sky-100 object-cover shadow-md"
        />
      </div>
      <span className="text-center text-base md:text-lg leading-relaxed font-light text-slate-700">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
        {author}
      </span>

      {isFront && !isDesktop && (
        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-slate-400 flex items-center gap-1"
          animate={{ x: [0, -5, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span>← Swipe</span>
        </motion.div>
      )}
    </motion.div>
  )
}
