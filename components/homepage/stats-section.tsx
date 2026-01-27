"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 200, suffix: "+", label: "Businesses Served" },
  { value: 99.9, suffix: "%", label: "Compliance Rate" },
  { value: 5, suffix: "x", label: "Faster Processing" },
  { value: 24, suffix: "/7", label: "Dashboard Access" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!counterRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Number(obj.val.toFixed(value % 1 !== 0 ? 1 : 0)))
          },
        })
      },
    })

    return () => trigger.kill()
  }, [value])

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-gradient-to-br from-primary via-blue-600 to-primary"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
