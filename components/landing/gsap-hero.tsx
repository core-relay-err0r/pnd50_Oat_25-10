"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HomepageCtas } from "@/components/HomepageCtas"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { LandingFooter } from "@/components/landing-footer"
import dynamic from "next/dynamic"

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export function GSAPHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLDivElement>(null)

  const words = ["Accounting", "Consultant", "Compliant"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Mouse follow effect for blobs
  useGSAP(
    () => {
      const xTo1 = gsap.quickTo(blob1Ref.current, "x", { duration: 0.8, ease: "power3" })
      const yTo1 = gsap.quickTo(blob1Ref.current, "y", { duration: 0.8, ease: "power3" })
      const xTo2 = gsap.quickTo(blob2Ref.current, "x", { duration: 1.2, ease: "power2" })
      const yTo2 = gsap.quickTo(blob2Ref.current, "y", { duration: 1.2, ease: "power2" })

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window

        // Calculate normalized position (-1 to 1)
        const x = (clientX / innerWidth - 0.5) * 2
        const y = (clientY / innerHeight - 0.5) * 2

        // Move blobs with different intensities
        xTo1(x * 50)
        yTo1(y * 50)
        xTo2(x * -80)
        yTo2(y * -80)
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    },
    { scope: containerRef },
  )

  // Intro Animation
  useGSAP(
    () => {
      const tl = gsap.timeline()

      // Initial state
      gsap.set(".hero-element", { y: 50, opacity: 0 })
      gsap.set(".hero-badge", { y: -20, opacity: 0, scale: 0.8 })

      tl.to(".hero-badge", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }).to(
        ".hero-element",
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
    },
    { scope: containerRef },
  )

  // Word Rotator Animation
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length

      const tl = gsap.timeline()

      // Exit current word
      tl.to(`.word-${currentWordIndex}`, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      })

        // Enter next word
        .fromTo(
          `.word-${nextIndex}`,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            onStart: () => setCurrentWordIndex(nextIndex),
          },
          "-=0.1",
        )
    }, 3000)

    return () => clearInterval(interval)
  }, [currentWordIndex, words.length])

  return (
    <main className="min-h-screen" ref={containerRef}>
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        <AnimatedGridBackground className="min-h-screen flex-1">
          {/* Blobs */}
          <div
            ref={blob1Ref}
            className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
          />
          <div
            ref={blob2Ref}
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top lg:mt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex items-center py-12 sm:py-16 lg:py-20 pt-[100px] lg:pt-12 pb-32 lg:pb-20">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                {/* Left side - Hero content */}
                <div className="text-center lg:text-left space-y-6 md:space-y-8">
                  <div className="hero-badge inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-md px-6 py-3 text-sm font-semibold text-slate-800 mb-2 border border-slate-200 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="leading-tight">Thailand's Leading Tech-Driven Corporate Services Firm.</span>
                  </div>

                  <h1
                    ref={textRef}
                    className="hero-element text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight tracking-tight"
                  >
                    <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15]">
                      AI Boutique
                    </span>
                    <br />
                    <span className="relative inline-block w-full h-[1.15em] overflow-hidden" ref={wordsRef}>
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className={`word-${index} absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-slate-900 font-bold whitespace-nowrap ${
                            index === currentWordIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                          }`}
                          style={{
                            display:
                              index === currentWordIndex || index === (currentWordIndex + 1) % words.length
                                ? "block"
                                : "none",
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </span>
                  </h1>

                  <div className="hero-element flex lg:hidden justify-center my-8 scale-75">
                    <ShuffleTestimonials />
                  </div>

                  <p className="hero-element text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-600">
                    You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                    native language. Our AI makes them <span className="text-primary font-semibold">5x faster</span> and{" "}
                    <span className="text-emerald-600 font-semibold">totally error-free</span>.
                  </p>

                  <div className="hero-element pt-4">
                    <HomepageCtas />
                  </div>
                </div>

                {/* Right side - Testimonial cards */}
                <div className="hero-element hidden lg:flex items-center justify-center">
                  <ShuffleTestimonials />
                </div>
              </div>
            </div>
          </div>

          <LandingFooter />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
