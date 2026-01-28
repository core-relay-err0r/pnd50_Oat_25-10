"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  // Initial page load animation
  useEffect(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline()

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
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
        ".hero-trust",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.1"
      )
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-sky-50/30 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
            Figure out what your business actually needs in Thailand{" "}
            <span className="text-muted-foreground/60 font-normal italic">
              — before you talk to anyone.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            An interactive way for foreign founders to understand their company setup,
            accounting, corporate actions, and advisory scope — with clear structure
            and transparent cost.
          </p>

          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="#contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-base px-8 py-6 rounded-lg transition-all hover:scale-[1.02] group"
              >
                Start with clarity
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 text-base px-8 py-6 rounded-lg hover:bg-slate-50 transition-all hover:scale-[1.02]"
              >
                See how it works
              </Button>
            </Link>
          </div>

          {/* Trust text */}
          <p className="hero-trust text-sm text-primary/70">
            No calls. No sales. No email required to explore.
          </p>
        </div>
      </div>
    </section>
  )
}
