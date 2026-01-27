"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Award, CheckCircle2, Lock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const badges = [
  {
    icon: Shield,
    title: "DBD Certified",
    description: "Registered with Department of Business Development",
  },
  {
    icon: Award,
    title: "Licensed CPAs",
    description: "Team of certified public accountants",
  },
  {
    icon: CheckCircle2,
    title: "100% Accuracy",
    description: "AI-verified calculations and filings",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "256-bit encryption for all data",
  },
]

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const badges = sectionRef.current.querySelectorAll(".trust-badge")

    gsap.fromTo(
      badges,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="trust-badge flex flex-col items-center text-center p-4 md:p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
