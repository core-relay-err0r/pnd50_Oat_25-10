"use client"
import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { useEffect, useState, useMemo } from "react"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"
import { InfiniteCaseStudiesCarousel } from "@/components/infinite-case-studies-carousel"
import ServiceCTA from "@/components/ServiceCTA"
import { FinalCta } from "@/components/FinalCta"
import { Sparkles, Zap, Shield, Globe } from 'lucide-react'

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
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="min-h-screen flex-1">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              {/* Left side - Hero content */}
              <div className="text-center lg:text-left space-y-6 md:space-y-8">
                <div
                  className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white mb-2 border border-primary/20 transition-all duration-700 hover:bg-primary/20 hover:scale-105 hover:border-primary/40 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="leading-tight">Thailand's Leading Tech-Driven Corporate Services Firm.</span>
                </div>

                <h1
                  className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight transition-all duration-700 delay-100 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15]">
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
                  className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 text-slate-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                  native language. Our AI makes them <span className="text-primary font-semibold">5x faster</span> and{" "}
                  <span className="text-chart-2 font-semibold">totally error-free</span>.
                </p>

                <div
                  className={`pt-4 transition-all duration-700 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <HomepageCtas />
                </div>
              </div>

              {/* Right side - Testimonial cards */}
              <div className="hidden lg:flex items-center justify-center">
                <ShuffleTestimonials />
              </div>
            </div>
          </div>
        </AnimatedGridBackground>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">PND50</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge AI technology with human expertise to deliver unmatched corporate services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Sparkles,
                title: "Tech-Driven Experts",
                description: "AI-powered workflows combined with human oversight for perfect accuracy",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
              },
              {
                icon: Zap,
                title: "Real-Time Data",
                description: "Instant access to your financial data anytime, anywhere in the cloud",
                color: "text-amber-500",
                bg: "bg-amber-500/10",
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "Bank-level security with full regulatory compliance guaranteed",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
              },
              {
                icon: Globe,
                title: "Expat Specialists",
                description: "Multilingual support team that understands your unique needs",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl border-2 border-border hover:border-primary/40 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Success Stories from Around the World
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped international businesses thrive in Thailand
            </p>
          </div>

          <InfiniteCaseStudiesCarousel />
        </div>
      </section>

      <ServiceCTA />

      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-primary via-chart-2 to-primary overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Join hundreds of international companies who trust PND50 for their corporate services in Thailand
            </p>
            <FinalCta />
          </div>
        </div>
      </section>
    </main>
  )
}
