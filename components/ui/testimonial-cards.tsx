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
  const dragStartTime = React.useRef(0)
  const isFront = position === "front"

  // Front card is always sharp, background cards always have blur
  const blurFilter = position !== "front" ? "blur(0.8px)" : undefined

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
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e) => {
        dragRef.current = e.clientX
        dragStartTime.current = Date.now()
      }}
      onDragEnd={(e) => {
        const dragDistance = dragRef.current - e.clientX
        const dragDuration = Date.now() - dragStartTime.current
        const velocity = dragDistance / dragDuration

        if (dragDistance > 50 || velocity > 0.3) {
          handleShuffle()
        }
        dragRef.current = 0
        dragStartTime.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-3xl border border-sky-200/60 p-8 bg-gradient-to-b from-white via-sky-50/80 to-blue-50/70 shadow-xl shadow-sky-200/30 backdrop-blur-sm ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <div className="relative mx-auto">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-300 via-blue-200 to-teal-300 opacity-50 blur-sm" />
        <img
          src={image || `https://i.pravatar.cc/128?img=${id}`}
          alt={`Avatar of ${author}`}
          className="relative pointer-events-none h-32 w-32 rounded-full border-4 border-sky-100 object-cover shadow-md"
        />
      </div>
      <span className="text-center text-lg leading-relaxed font-light text-slate-700">"{testimonial}"</span>
      <span className="text-center text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
        {author}
      </span>
    </motion.div>
  )
}
