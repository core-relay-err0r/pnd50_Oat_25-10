"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GlobeToMapTransform } from "@/components/ui/globe-to-map-transform"

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

  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  const blurFilter = isDesktop && position !== "front" ? "blur(0.8px)" : undefined

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
        filter: blurFilter,
      }}
      animate={{
        rotate: position === "front" ? "0deg" : position === "middle" ? "3deg" : "6deg",
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
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center rounded-3xl border border-sky-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 shadow-xl shadow-sky-900/50 backdrop-blur-sm overflow-hidden ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      {/* Globe component as background */}
      <div className="absolute inset-0 opacity-40">
        <GlobeToMapTransform />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 space-y-6 p-8">
        <div className="relative mx-auto">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400 via-blue-300 to-teal-400 opacity-70 blur-sm" />
          <img
            src={image || `https://i.pravatar.cc/128?img=${id}`}
            alt={`Avatar of ${author}`}
            className="relative pointer-events-none h-32 w-32 rounded-full border-4 border-sky-200/80 object-cover shadow-lg"
          />
        </div>
        <span className="text-center leading-relaxed font-light text-sky-50 text-base block">"{testimonial}"</span>
        <span className="text-center text-sm font-semibold bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent block">
          {author}
        </span>
      </div>
    </motion.div>
  )
}
