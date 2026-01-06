"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { SECTIONS } from "./scroll-container"
import { motion } from "framer-motion"

interface ScrollProgressProps {
  currentSection: string
  onDotClick?: (sectionId: string) => void
}

export function ScrollProgress({ currentSection, onDotClick }: ScrollProgressProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isMobile) return null

  // Only show sections that are meant to be shown (exclude CTA from dots but still track it)
  const visibleSections = SECTIONS.filter((s) => s.showInNav)
  const currentIndex = SECTIONS.findIndex((s) => s.id === currentSection)

  const handleClick = (sectionId: string) => {
    if (onDotClick) {
      onDotClick(sectionId)
    } else if ((window as any).scrollToSection) {
      ;(window as any).scrollToSection(sectionId)
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
      {visibleSections.map((section, index) => {
        const isActive =
          section.id === currentSection || (currentSection === "cta" && index === visibleSections.length - 1) // If on CTA, highlight last dot
        const isPast = currentIndex > SECTIONS.findIndex((s) => s.id === section.id)

        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center justify-end"
            aria-label={`Go to ${section.label}`}
          >
            {/* Label tooltip */}
            <span className="absolute right-8 px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {section.label}
            </span>

            {/* Dot */}
            <motion.div
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-all duration-300",
                isActive
                  ? "bg-blue-500 border-blue-500 scale-125"
                  : isPast
                    ? "bg-blue-300 border-blue-300"
                    : "bg-transparent border-slate-400 hover:border-blue-400",
              )}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          </button>
        )
      })}

      {/* Progress line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 rounded-full -z-10">
        <motion.div
          className="w-full bg-blue-500 rounded-full origin-top"
          style={{
            height: `${((currentIndex + 1) / SECTIONS.length) * 100}%`,
          }}
          initial={{ height: 0 }}
          animate={{ height: `${((currentIndex + 1) / SECTIONS.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
