"use client"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"

export default function PND50Landing() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["Accounting", "Consultant", "Compliant"], [])

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
    <main
      id="main-content"
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <section className="relative w-full min-h-screen flex flex-col" aria-label="Hero section">
        <div className="flex-1 w-full flex flex-col">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-screen-2xl relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 pt-[100px] lg:pt-24 xl:pt-28 pb-32 lg:pb-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 2xl:gap-24 items-center w-full">
              {/* Left side - Hero content */}
              <div className="text-center lg:text-left space-y-6 md:space-y-8 bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 -mx-4 sm:-mx-6 lg:-mx-8 px-8 sm:px-12 lg:px-16">
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-pink-300 bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15] [text-shadow:_0_2px_20px_rgb(0_0_0_/_40%)]">
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
                        className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-bold whitespace-nowrap text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_60%)]"
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
                  className="text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-white [text-shadow:_0_1px_8px_rgb(0_0_0_/_50%)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                  native language. Our AI makes them <span className="text-teal-300 font-semibold">5x faster</span> and{" "}
                  <span className="text-pink-300 font-semibold">totally error-free</span>.
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

        <LandingFooter variant="dark" />
      </section>
    </main>
  )
}
