"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const logos = [
  { name: "TechStartup Co", initials: "TS" },
  { name: "Global Exports", initials: "GE" },
  { name: "Digital Nomads", initials: "DN" },
  { name: "Bangkok Ventures", initials: "BV" },
  { name: "Asia Pacific Ltd", initials: "AP" },
  { name: "Expat Solutions", initials: "ES" },
  { name: "Thai Commerce", initials: "TC" },
  { name: "International Trade", initials: "IT" },
]

export function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    })
  }, [])

  return (
    <section className="py-12 md:py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by 200+ businesses across Thailand
        </p>
        <div ref={containerRef} className="overflow-hidden">
          <div ref={trackRef} className="flex gap-12 md:gap-16">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-32 h-12 md:w-40 md:h-14"
              >
                <div className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm font-bold">
                    {logo.initials}
                  </div>
                  <span className="text-sm font-medium whitespace-nowrap hidden md:block">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
