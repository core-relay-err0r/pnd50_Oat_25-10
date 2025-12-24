"use client"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"

export default function PND50Landing() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["Accounting", "Consultant", "Compliant"], [])

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
    <main id="main-content" className="min-h-screen bg-slate-950">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/hero-bg.png"
        bgImageSrc="/images/hero-bg.png"
        title="AI Boutique"
        date="PND50"
        scrollToExpand="Scroll to explore"
        textBlend
      >
        {/* Content after scroll expansion */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-pink-300 bg-clip-text text-transparent inline-block pb-2 leading-[1.15]">
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
                      className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 font-bold whitespace-nowrap text-white"
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        wordIndex === index ? { y: 0, opacity: 1 } : { y: wordIndex > index ? -150 : 150, opacity: 0 }
                      }
                      aria-hidden="true"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg lg:text-lg xl:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your native
                language. Our AI makes them <span className="text-teal-300 font-semibold">5x faster</span> and{" "}
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
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <ShuffleTestimonials />
            </motion.div>
          </div>
        </div>

        <div className="mt-20">
          <LandingFooter variant="dark" />
        </div>
      </ScrollExpandMedia>
    </main>
  )
}
