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

  const [isDesktop, setIsDesktop] = React.useState(true)

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  const blurFilter = isDesktop && position !== "front" ? "blur(0.8px)" : undefined

  return (
    null
  )
}
