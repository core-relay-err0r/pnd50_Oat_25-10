"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Award, Users, TrendingUp, Target, CheckCircle2, Heart } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Award, value: 10, suffix: "+", label: "Years Experience", description: "Serving foreign businesses" },
  { icon: Users, value: 150, suffix: "+", label: "Happy Clients", description: "Trust our expertise" },
  { icon: TrendingUp, value: 100, suffix: "%", label: "Compliance Rate", description: "Zero penalties" },
]

const missionPoints = [
  {
    icon: Target,
    title: "Precision-Focused",
    description: "Every filing, every report, every deadline met with 99.9% accuracy.",
  },
  {
    icon: CheckCircle2,
    title: "Full Compliance",
    description: "Navigate Thai tax regulations with confidence and zero penalties.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Dedicated support team that understands your business needs.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [animatedStats, setAnimatedStats] = useState({ years: 0, clients: 0, rate: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats when in view
      ScrollTrigger.create({
        trigger: ".about-stats",
        start: "top 80%",
        onEnter: () => setHasAnimated(true),
      })

      // Animate mission section
      gsap.from(".mission-content", {
        scrollTrigger: {
          trigger: ".mission-content",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".mission-image", {
        scrollTrigger: {
          trigger: ".mission-image",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate mission points
      gsap.from(".mission-point", {
        scrollTrigger: {
          trigger: ".mission-points",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate numbers
  useEffect(() => {
    if (!hasAnimated) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps
    const targets = { years: 10, clients: 150, rate: 100 }
    const current = { years: 0, clients: 0, rate: 0 }

    const timer = setInterval(() => {
      current.years = Math.min(current.years + targets.years / steps, targets.years)
      current.clients = Math.min(current.clients + targets.clients / steps, targets.clients)
      current.rate = Math.min(current.rate + targets.rate / steps, targets.rate)

      setAnimatedStats({
        years: Math.floor(current.years),
        clients: Math.floor(current.clients),
        rate: Math.floor(current.rate),
      })

      if (current.years >= targets.years && current.clients >= targets.clients && current.rate >= targets.rate) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [hasAnimated])

  const statValues = [animatedStats.years, animatedStats.clients, animatedStats.rate]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Stats Section */}
        <div className="about-stats mb-20 md:mb-32">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              About PND50
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Trusted by foreign businesses across Thailand
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We specialize in helping expat entrepreneurs and foreign-owned companies navigate Thai regulations with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-sky-300/60 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {statValues[index]}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="mission-image relative order-last lg:order-first">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/design-mode/1762249087-4ee906051d74732ad592c02379087e35-4.png.jpeg"
                alt="Professional team consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="mission-content">
            <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Simplifying Thai compliance for{" "}
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                global businesses
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We bridge the gap between international business practices and Thai regulatory requirements, making compliance effortless so you can focus on growth.
            </p>

            <div className="mission-points space-y-6">
              {missionPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="mission-point flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{point.title}</h3>
                      <p className="text-slate-600">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
