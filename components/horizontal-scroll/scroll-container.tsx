"use client"

import { useRef, useEffect, type ReactNode, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export interface Section {
  id: string
  path: string
  label: string
  showInNav: boolean
}

export const SECTIONS: Section[] = [
  { id: "home", path: "/", label: "Home", showInNav: true },
  { id: "services", path: "/services", label: "Services", showInNav: true },
  { id: "about", path: "/about", label: "About us", showInNav: true },
  { id: "faq", path: "/faq", label: "FAQ", showInNav: true },
  { id: "contact", path: "/contact", label: "Contact", showInNav: true },
  { id: "cta", path: "/cta", label: "CTA", showInNav: false },
]

interface HorizontalScrollContainerProps {
  children: ReactNode
  onSectionChange?: (sectionId: string) => void
}

export function HorizontalScrollContainer({ children, onSectionChange }: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isScrollingRef = useRef(false)

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize horizontal scroll with snap
  useEffect(() => {
    if (isMobile || !containerRef.current || !wrapperRef.current) {
      return
    }

    const initScroll = () => {
      const container = containerRef.current
      const wrapper = wrapperRef.current
      if (!container || !wrapper) return

      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
      if (sections.length === 0) {
        setTimeout(initScroll, 100)
        return
      }

      // Kill existing ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill())

      const totalWidth = sections.length * window.innerWidth
      gsap.set(wrapper, { width: totalWidth })
      document.body.style.height = `${totalWidth}px`

      const snapValues = sections.map((_, i) => i / (sections.length - 1))

      gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          id: "horizontal-scroll",
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          pin: true,
          scrub: 0.5, // Faster scrub for snappier feel
          snap: {
            snapTo: snapValues,
            duration: { min: 0.3, max: 0.6 }, // Smooth snap duration
            ease: "power2.inOut",
            inertia: false, // Disable inertia for instant snap feel
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (isScrollingRef.current) return

            const progress = self.progress
            const sectionIndex = Math.min(Math.floor(progress * sections.length + 0.5), sections.length - 1)

            if (sectionIndex !== currentSection) {
              setCurrentSection(sectionIndex)
              const section = SECTIONS[sectionIndex]
              if (section) {
                if (onSectionChange) onSectionChange(section.id)
                if (section.path !== window.location.pathname) {
                  window.history.replaceState(null, "", section.path)
                }
              }
            }
          },
        },
      })

      setIsReady(true)
    }

    const timeout = setTimeout(initScroll, 50)

    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timeout)
      ScrollTrigger.getAll().forEach((t) => t.kill())
      document.body.style.height = ""
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile, onSectionChange, currentSection])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const sectionIndex = SECTIONS.findIndex((s) => s.id === sectionId)
      if (sectionIndex === -1) return

      isScrollingRef.current = true

      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
      if (sections.length === 0) return

      const totalWidth = sections.length * window.innerWidth
      const maxScroll = totalWidth - window.innerWidth
      const targetX = sectionIndex * window.innerWidth
      const scrollRatio = targetX / maxScroll

      const trigger = ScrollTrigger.getById("horizontal-scroll")
      if (trigger) {
        const targetScroll = trigger.start + scrollRatio * (trigger.end - trigger.start)

        gsap.to(window, {
          scrollTo: { y: targetScroll },
          duration: 0.8, // Faster transition
          ease: "power2.inOut", // Smoother easing
          onComplete: () => {
            isScrollingRef.current = false
            setCurrentSection(sectionIndex)
            const section = SECTIONS[sectionIndex]
            if (section) {
              window.history.replaceState(null, "", section.path)
              if (onSectionChange) onSectionChange(section.id)
            }
          },
        })
      }
    },
    [onSectionChange],
  )

  // Expose scrollToSection to window
  useEffect(() => {
    if (!isMobile && isReady) {
      ;(window as any).scrollToSection = scrollToSection
    }
    return () => {
      delete (window as any).scrollToSection
    }
  }, [scrollToSection, isMobile, isReady])

  if (isMobile) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <div ref={containerRef} className="horizontal-scroll-container relative" style={{ overflow: "hidden" }}>
      <div ref={wrapperRef} className="horizontal-wrapper flex flex-nowrap" style={{ height: "100vh" }}>
        {children}
      </div>
    </div>
  )
}
