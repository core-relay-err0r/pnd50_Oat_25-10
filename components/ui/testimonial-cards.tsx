"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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

  const randomRotateY = React.useMemo(() => Math.floor(Math.random() * 21) - 10, [])

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 999 : position === "middle" ? 2 : 1,
      }}
      initial={{
        opacity: 0,
        scale: 0.9,
        rotate: randomRotateY,
      }}
      animate={{
        opacity: position === "front" ? 1 : 0.7,
        scale: position === "front" ? 1 : 0.95,
        rotate: position === "front" ? 0 : randomRotateY,
        x: position === "front" ? "0%" : position === "middle" ? "15%" : "30%",
        y: position === "front" ? [0, -20, 0] : 0,
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
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={`absolute left-0 top-0 origin-bottom ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
    >
      <div className="relative h-[400px] w-[300px] overflow-hidden rounded-3xl shadow-2xl shadow-slate-400/30">
        <Image
          src={image || `https://i.pravatar.cc/500?img=${id}`}
          alt={`Avatar of ${author}`}
          width={300}
          height={400}
          draggable={false}
          className="h-full w-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-white font-semibold text-lg drop-shadow-lg">{author}</p>
        </div>
      </div>
    </motion.div>
  )
}
