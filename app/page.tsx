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
    <main className="h-screen overflow-hidden fixed inset-0">
      <section className="relative w-full h-full flex flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="h-full flex-1">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center py-4 sm:py-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              {/* Left side - Hero content with optimized mobile layout */}
              <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8">
                {/* Badge with improved mobile sizing */}
                <div
                  className={`inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white mb-2 border border-primary/20 transition-all duration-700 hover:bg-primary/20 hover:scale-105 hover:border-primary/40 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="leading-tight">Thailand's Leading Tech-Driven Corporate Services Firm.</span>
                </div>

                <h1
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift inline-block pb-1 sm:pb-2 leading-tight sm:leading-[1.15]">
                    AI Boutique
                  </span>
                  <br />
                  <span className="relative inline-block w-full overflow-visible" style={{ height: "1.15em" }}>
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-white font-bold whitespace-nowrap"
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
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                <p
                  className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 text-slate-300 px-2 sm:px-0 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                  native language. Our AI makes them <span className="text-primary font-semibold">5x faster</span> and{" "}
                  <span className="text-chart-2 font-semibold">totally error-free</span>.
                </p>

                {/* Feature badges - hidden on mobile to reduce clutter */}
                <div
                  className={`hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-3 transition-all duration-700 delay-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  {[
                    {
                      icon: "💻",
                      label: "Tech-Driven Experts",
                      gradient: "from-blue-500/80 to-cyan-500/80",
                      hover: "hover:from-blue-500 hover:to-cyan-500",
                    },
                    {
                      icon: "⚡",
                      label: "Real-Time Data",
                      gradient: "from-amber-500/80 to-orange-500/80",
                      hover: "hover:from-amber-500 hover:to-orange-500",
                    },
                    {
                      icon: "🛡️",
                      label: "Secure & Compliant",
                      gradient: "from-emerald-500/80 to-teal-500/80",
                      hover: "hover:from-emerald-500 hover:to-teal-500",
                    },
                    {
                      icon: "🌏",
                      label: "Expat Specialists",
                      gradient: "from-purple-500/80 to-pink-500/80",
                      hover: "hover:from-purple-500 hover:to-pink-500",
                    },
                  ].map((feature, index) => null)}
                </div>

                <div
                  className={`pt-2 sm:pt-4 transition-all duration-700 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <HomepageCtas />
                </div>
              </div>

              {/* Right side - Testimonial cards */}
              <div className="flex items-center justify-center overflow-visible mt-8 lg:mt-0">
                <ShuffleTestimonials />
              </div>
            </div>
          </div>
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
