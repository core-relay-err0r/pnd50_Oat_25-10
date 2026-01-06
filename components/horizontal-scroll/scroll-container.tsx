"use client"

import { useRef, useEffect, type ReactNode, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { usePathname } from "next/navigation"

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
  const pathname = usePathname()
  const isScrollingRef = useRef(false)
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null)

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      console.log("[v0] Mobile check:", mobile)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize horizontal scroll
  useEffect(() => {
    if (isMobile || !containerRef.current || !wrapperRef.current) {
      console.log("[v0] Skipping scroll setup - isMobile:", isMobile)
      return
    }

    // Wait for DOM to be ready
    const initScroll = () => {
      const container = containerRef.current
      const wrapper = wrapperRef.current
      if (!container || !wrapper) return

      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
      console.log("[v0] Found sections:", sections.length)

      if (sections.length === 0) {
        console.log("[v0] No sections found, retrying...")
        setTimeout(initScroll, 100)
        return
      }

      // Kill existing ScrollTriggers
      ScrollTrigger.getAll().forEach((t) => t.kill())

      // Calculate total width based on actual section widths
      const totalWidth = sections.length * window.innerWidth
      console.log("[v0] Total width:", totalWidth, "Window width:", window.innerWidth)

      // Set wrapper width
      gsap.set(wrapper, { width: totalWidth })

      document.body.style.height = `${totalWidth}px`

      // Create horizontal scroll animation
      const scrollTween = gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          id: "horizontal-scroll",
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (isScrollingRef.current) return

            const progress = self.progress
            const sectionIndex = Math.min(Math.floor(progress * sections.length), sections.length - 1)

            if (sectionIndex !== currentSection) {
              setCurrentSection(sectionIndex)
              const section = SECTIONS[sectionIndex]
              if (section) {
                if (onSectionChange) onSectionChange(section.id)
                // Update URL without navigation
                if (section.path !== window.location.pathname) {
                  window.history.replaceState(null, "", section.path)
                }
              }
            }
          },
        },
      })

      scrollTriggerRef.current = ScrollTrigger.getById("horizontal-scroll") || null
      setIsReady(true)
      console.log("[v0] ScrollTrigger initialized successfully")

      return () => {
        scrollTween.kill()
        ScrollTrigger.getAll().forEach((t) => t.kill())
        document.body.style.height = ""
      }
    }

    // Small delay to ensure DOM is ready
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

  // Scroll to section function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const sectionIndex = SECTIONS.findIndex((s) => s.id === sectionId)
      if (sectionIndex === -1) return

      console.log("[v0] Scrolling to section:", sectionId, "index:", sectionIndex)
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
          duration: 1.2,
          ease: "power3.inOut",
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

  // Expose scrollToSection to window for navbar access
  useEffect(() => {
    if (!isMobile && isReady) {
      ;(window as any).scrollToSection = scrollToSection
      console.log("[v0] scrollToSection exposed to window")
    }
    return () => {
      delete (window as any).scrollToSection
    }
  }, [scrollToSection, isMobile, isReady])

  // Mobile: render children normally without horizontal scroll
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
