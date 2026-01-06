"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function CTAPanel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([headlineRef.current, sublineRef.current, buttonRef.current], {
        opacity: 0,
        y: 80,
      })

      // Create entrance animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "left center",
          toggleActions: "play none none reverse",
          horizontal: true,
        },
      })

      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      })
        .to(
          sublineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )

      // Floating particles animation
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll(".particle")
        particles.forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-100, 100)",
            x: "random(-50, 50)",
            opacity: "random(0.3, 1)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          })
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }))

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #0f172a 100%)",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: `rgba(${Math.random() > 0.5 ? "59, 130, 246" : "139, 92, 246"}, ${Math.random() * 0.5 + 0.3})`,
              boxShadow: `0 0 ${p.size * 2}px rgba(59, 130, 246, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Large glowing orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-white/90 text-sm font-medium">Ready to Transform Your Business?</span>
        </div>

        {/* Main headline */}
        <h2 ref={headlineRef} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
          <span className="block text-white">Let's Start</span>
          <span
            className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            style={{
              textShadow: "0 0 80px rgba(139, 92, 246, 0.5)",
            }}
          >
            Your Journey
          </span>
        </h2>

        {/* Subline */}
        <p ref={sublineRef} className="text-xl sm:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a free consultation with our experts. We'll help you navigate Thai accounting and compliance with
          confidence.
        </p>

        {/* CTA Button */}
        <div ref={buttonRef} className="relative inline-block group">
          {/* Glow effect behind button */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />

          <Link href="/schedule">
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white text-xl font-bold px-12 py-8 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
            >
              <span className="flex items-center gap-3">
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Expert advisors</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  )
}
