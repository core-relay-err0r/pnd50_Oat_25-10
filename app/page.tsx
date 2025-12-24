"use client"

import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { HomepageCtas } from "@/components/HomepageCtas"
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero"
import { LandingFooter } from "@/components/landing-footer"

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main-content" className="min-h-screen bg-slate-950">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/burakorntea-httpss.jpeg"
        bgImageSrc="/images/burakorntea-httpss.jpeg"
        title="PND50"
        scrollToExpand="Scroll to Explore"
        textBlend
      >
        {/* Content shown after expansion */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-white">AI Boutique</span>
            <br />
            <span className="relative inline-block w-full overflow-visible" style={{ height: "1.15em" }}>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2 font-bold whitespace-nowrap bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    wordIndex === index ? { y: 0, opacity: 1 } : { y: wordIndex > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your native
            language. Our AI makes them <span className="text-cyan-400 font-semibold">5x faster</span> and{" "}
            <span className="text-emerald-400 font-semibold">totally error-free</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <HomepageCtas />
          </motion.div>
        </div>

        <div className="mt-20">
          <LandingFooter variant="dark" />
        </div>
      </ScrollExpandMedia>
    </main>
  )
}
