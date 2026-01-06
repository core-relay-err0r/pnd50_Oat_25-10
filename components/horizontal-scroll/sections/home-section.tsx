"use client"

import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function HomeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["Accounting", "Consultant", "Compliant"], [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setWordIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1))
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [wordIndex, words])

  return (
    <div className="w-full h-full min-h-screen">
      <section className="relative w-full h-full flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
        <AnimatedGridBackground className="h-full flex-1" variant="light">
          {/* Floating shapes */}
          <motion.div
            className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
            animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -15, 0, 15, 0] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg"
            animate={{ rotate: [45, 135, 225, 315, 405] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            aria-hidden="true"
          />

          {/* Background blurs */}
          <div
            className="absolute top-20 left-10 w-[30vw] max-w-[500px] h-[30vw] max-h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-20 right-10 w-[28vw] max-w-[450px] h-[28vw] max-h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
            aria-hidden="true"
          />

          <div className="flex-1 w-full flex flex-col">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-screen-2xl relative z-10 flex-1 flex items-center py-12 pt-[100px] lg:pt-24">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 2xl:gap-24 items-center w-full">
                {/* Left side - Hero content */}
                <div className="text-center lg:text-left space-y-6 md:space-y-8">
                  <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15]">
                      AI Boutique
                    </span>
                    <br />
                    <span className="relative inline-block w-full overflow-visible" style={{ height: "1.15em" }}>
                      <span className="sr-only" aria-live="polite">
                        {words[wordIndex]}
                      </span>
                      {words.map((word, index) => (
                        <motion.span
                          key={index}
                          className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-bold whitespace-nowrap bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 100 }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            wordIndex === index
                              ? { y: 0, opacity: 1 }
                              : { y: wordIndex > index ? -150 : 150, opacity: 0 }
                          }
                          aria-hidden="true"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </motion.h1>

                  <div className="flex lg:hidden justify-center my-8 scale-75">
                    <ShuffleTestimonials />
                  </div>

                  <motion.p
                    className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                    native language. Our AI makes them <span className="text-blue-600 font-semibold">5x faster</span>{" "}
                    and <span className="text-emerald-600 font-semibold">totally error-free</span>.
                  </motion.p>

                  <motion.div
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <HomepageCtas />
                  </motion.div>
                </div>

                {/* Right side - Testimonial cards */}
                <motion.div
                  className="hidden lg:flex items-center justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <ShuffleTestimonials />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedGridBackground>
      </section>
    </div>
  )
}
