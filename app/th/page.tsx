"use client"
import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function PND50LandingThai() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["บัญชี", "ที่ปรึกษา", "มาตรฐาน"], [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
      if (wordIndex === words.length - 1) {
        setWordIndex(0)
      } else {
        setWordIndex(wordIndex + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [wordIndex, words])

  return (
    <main id="main-content" className="min-h-screen">
      <section
        className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80"
        aria-label="Hero section"
      >
        <AnimatedGridBackground className="min-h-screen flex-1" variant="light">
          <motion.div
            className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              y: [0, -15, 0, 15, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
            aria-hidden="true"
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top lg:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 pt-[100px] lg:pt-12 pb-32 lg:pb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                {/* Left side - Hero content */}
                <div className="text-center lg:text-left space-y-6 md:space-y-8">
                  <motion.h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight"
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
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: wordIndex > index ? -150 : 150,
                                  opacity: 0,
                                }
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
                    className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    คุณพูดคุยกับผู้เชี่ยวชาญ ไม่ใช่หุ่นยนต์ เราเชื่อมต่อคุณกับที่ปรึกษาที่พูดภาษาของคุณได้{" "}
                    <span className="text-blue-600 font-semibold">เร็วขึ้น 5 เท่า</span> และ{" "}
                    <span className="text-emerald-600 font-semibold">ปราศจากข้อผิดพลาด</span> ด้วย AI
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

          <LandingFooter variant="light" />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
