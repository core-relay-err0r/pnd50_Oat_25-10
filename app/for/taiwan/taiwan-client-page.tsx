"use client"
import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"
import { CheckCircle2 } from "lucide-react"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function TaiwanClientPage() {
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
    <main id="main-content" className="min-h-screen">
      <section
        className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50/80"
        aria-label="Hero section"
      >
        <AnimatedGridBackground className="min-h-screen flex-1" variant="light">
          {/* Hero Section */}
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
                    Professional Thai accounting for Taiwanese manufacturing and trading companies. You Talk to an
                    Expert, Not a Robot. We connect you with experienced advisors who understand cross-border
                    operations. Our AI makes them <span className="text-blue-600 font-semibold">5x faster</span> and{" "}
                    <span className="text-emerald-600 font-semibold">totally error-free</span>.
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

      {/* Why Taiwan Companies Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Taiwanese Companies Trust PND50</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cross-Border Expertise",
                description:
                  "Deep understanding of Taiwan-Thailand business relationships. We help coordinate between your Taiwan HQ and Thai operations.",
              },
              {
                title: "Manufacturing & Trading Focus",
                description:
                  "Extensive experience with Taiwanese manufacturing and trading companies in Thailand. We understand your industry-specific needs.",
              },
              {
                title: "English & Professional Communication",
                description:
                  "Clear, professional English communication. Regular reporting in formats compatible with Taiwan accounting standards.",
              },
              {
                title: "Thai Regulatory Expertise",
                description:
                  "Navigate Thailand's tax laws, BOI incentives, customs regulations, and compliance requirements with confidence.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
