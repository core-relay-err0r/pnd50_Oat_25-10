"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { HomepageCtas } from "@/components/HomepageCtas"
import dynamic from "next/dynamic"
import { CheckCircle2 } from "lucide-react"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export function GSAPHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const words = ["Accounting", "Consulting", "Compliance"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Mouse follow effect for blobs and custom cursor
  useGSAP(
    () => {
      const xTo1 = gsap.quickTo(blob1Ref.current, "x", { duration: 0.8, ease: "power3" })
      const yTo1 = gsap.quickTo(blob1Ref.current, "y", { duration: 0.8, ease: "power3" })
      const xTo2 = gsap.quickTo(blob2Ref.current, "x", { duration: 1.2, ease: "power2" })
      const yTo2 = gsap.quickTo(blob2Ref.current, "y", { duration: 1.2, ease: "power2" })
      const cursorX = gsap.quickTo(cursorRef.current, "x", { duration: 0.2, ease: "power3" })
      const cursorY = gsap.quickTo(cursorRef.current, "y", { duration: 0.2, ease: "power3" })

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        // Calculate normalized position (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2
        const y = (clientY / innerHeight - 0.5) * 2

        // Move blobs
        xTo1(x * 50)
        yTo1(y * 50)
        xTo2(x * -80)
        yTo2(y * -80)

        // Move cursor
        cursorX(clientX)
        cursorY(clientY)
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    },
    { scope: containerRef },
  )

  // Intro Animation - Staggered Reveal
  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Initial states
      gsap.set(".reveal-text", { y: 100, opacity: 0 })
      gsap.set(".fade-in", { opacity: 0, y: 20 })
      gsap.set(".scale-in", { scale: 0.8, opacity: 0 })

      tl.to(".scale-in", {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      })
        .to(
          ".reveal-text",
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .to(
          ".fade-in",
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        )
    },
    { scope: containerRef },
  )

  // Word Rotator Animation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length
      setCurrentWordIndex(nextIndex)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentWordIndex, words.length])

  return (
    <main className="h-screen w-full overflow-hidden relative bg-slate-950 text-white" ref={containerRef}>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden lg:block mix-blend-difference"
      />

      <AnimatedGridBackground className="h-full w-full absolute inset-0">
        {/* Ambient Blobs */}
        <div
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-60"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-60"
        />

        {/* Main Content Container - Centered */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top Badge */}
          <div className="scale-in mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Thailand's #1 Corporate Services
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-2 mb-8 relative">
            <div className="overflow-hidden">
              <h1 className="reveal-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.9]">
                AI-Powered
              </h1>
            </div>
            <div className="overflow-hidden flex justify-center items-center gap-4 flex-wrap">
              <h1 className="reveal-text text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-500 leading-[0.9]">
                Boutique
              </h1>
              <div className="reveal-text relative h-[0.9em] min-w-[200px] sm:min-w-[300px] md:min-w-[400px] overflow-hidden text-left">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`absolute left-0 top-0 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight transition-all duration-500 ease-in-out transform ${
                      index === currentWordIndex
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-full opacity-0 blur-sm"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <div className="fade-in max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              Talk to an expert, not a robot. We combine dedicated human advisors with
              <span className="text-white font-semibold"> AI precision</span> to make your business
              <span className="text-emerald-400 font-semibold"> 5x faster</span> and compliant.
            </p>
          </div>

          {/* CTAs */}
          <div className="fade-in flex flex-col sm:flex-row items-center gap-4 mb-16">
            <HomepageCtas />
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No credit card required</span>
            </div>
          </div>

          {/* Social Proof / Footer Area */}
          <div className="fade-in absolute bottom-8 left-0 right-0 w-full">
            <div className="container mx-auto px-4">
              <p className="text-center text-sm text-slate-600 mb-6 font-medium uppercase tracking-wider">
                Trusted by innovative teams
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple text logos for demo - replace with SVGs in production */}
                {["TechStart", "GlobalVentures", "AsiaCorp", "FutureScale", "NextGen"].map((logo) => (
                  <span
                    key={logo}
                    className="text-lg font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedGridBackground>
    </main>
  )
}
