"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const rotatingWords = ["Accounting", "Tax Filing", "Compliance", "Advisory"]

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)

  // Rotating words animation
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Word change animation
  useEffect(() => {
    if (!wordRef.current) return

    gsap.fromTo(
      wordRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
  }, [wordIndex])

  // Initial page load animation
  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline()

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-sky-50/50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI-Powered Accounting for Thailand
          </div>

          {/* Main heading */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Expert{" "}
            <span className="relative inline-block">
              <span
                ref={wordRef}
                className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent"
              >
                {rotatingWords[wordIndex]}
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
            </span>
            <br />
            <span className="text-muted-foreground">Partner in Thailand</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Talk to a human expert, not a robot. Our AI makes your dedicated advisor{" "}
            <span className="text-primary font-semibold">5x faster</span> and{" "}
            <span className="text-emerald-600 font-semibold">100% accurate</span>.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/schedule">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 text-lg px-8 py-6 rounded-xl hover:bg-muted transition-all hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="hero-stats flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">200+</span>
              <span>Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">99.9%</span>
              <span>Compliance Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">5x</span>
              <span>Faster Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
