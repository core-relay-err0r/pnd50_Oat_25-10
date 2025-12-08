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
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-3xl border border-zinc-600/50 p-8 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black shadow-2xl shadow-black/60 backdrop-blur-sm ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      {/* Metallic shine overlay */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-zinc-700/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto">
        {/* Metallic silver glow around avatar */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-800 opacity-70 blur-sm" />
        <img
          src={image || `https://i.pravatar.cc/128?img=${id}`}
          alt={`Avatar of ${author}`}
          // Dark metallic border
          className="relative pointer-events-none h-32 w-32 rounded-full border-4 border-zinc-700 object-cover shadow-lg shadow-black/50"
        />
      </div>
      {/* Light text for dark card */}
      <span className="text-center text-lg leading-relaxed font-light text-zinc-200">"{testimonial}"</span>
      {/* Metallic silver gradient for author name */}
      <span className="text-center text-sm font-semibold bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-300 bg-clip-text text-transparent">
        {author}
      </span>
    </motion.div>
  )
}
