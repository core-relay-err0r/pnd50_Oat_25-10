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
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle()
        }
        dragRef.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-3xl border border-slate-100/80 p-8 bg-gradient-to-b from-slate-50/90 via-white to-slate-50/70 shadow-xl shadow-slate-200/40 backdrop-blur-sm border-none ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <div className="relative mx-auto">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 opacity-60 blur-sm" />
        <img
          src={image || `https://i.pravatar.cc/128?img=${id}`}
          alt={`Avatar of ${author}`}
          className="relative pointer-events-none h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>
      <span className="text-center text-lg leading-relaxed text-slate-500 font-light">"{testimonial}"</span>
      <span className="text-center text-sm font-semibold bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-slate-600">
        {author}
      </span>
    </motion.div>
  )
}
