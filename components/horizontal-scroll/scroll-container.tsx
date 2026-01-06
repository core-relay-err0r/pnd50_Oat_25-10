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
  const hasInitializedRef = useRef(false)
  const currentSectionRef = useRef(0)
  const onSectionChangeRef = useRef(onSectionChange)

  // Keep ref updated
  useEffect(() => {
    onSectionChangeRef.current = onSectionChange
  }, [onSectionChange])

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

      const numSections = sections.length
      const snapValues = Array.from({ length: numSections }, (_, i) => i / (numSections - 1))

      let initialSectionIndex = 0
      if (!hasInitializedRef.current) {
        const path = window.location.pathname
        const foundIndex = SECTIONS.findIndex((s) => s.path === path)
        if (foundIndex !== -1) {
          initialSectionIndex = foundIndex
        }
      }

      gsap.to(wrapper, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          id: "horizontal-scroll",
          trigger: container,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          pin: true,
          scrub: 0.3,
          snap: {
            snapTo: snapValues,
            duration: { min: 0.2, max: 0.5 },
            ease: "power3.out",
            inertia: false,
            delay: 0.1,
          },
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (isScrollingRef.current) return

            const progress = self.progress
            const sectionIndex = Math.round(progress * (numSections - 1))
            const clampedIndex = Math.max(0, Math.min(sectionIndex, numSections - 1))

            if (clampedIndex !== currentSectionRef.current) {
              currentSectionRef.current = clampedIndex
              setCurrentSection(clampedIndex)
              const section = SECTIONS[clampedIndex]
              if (section) {
                if (onSectionChangeRef.current) onSectionChangeRef.current(section.id)
                if (section.path !== window.location.pathname) {
                  window.history.replaceState(null, "", section.path)
                }
              }
            }
          },
        },
      })

      setIsReady(true)

      if (!hasInitializedRef.current && initialSectionIndex > 0) {
        hasInitializedRef.current = true
        setTimeout(() => {
          const trigger = ScrollTrigger.getById("horizontal-scroll")
          if (trigger) {
            const targetProgress = initialSectionIndex / (numSections - 1)
            const targetScroll = trigger.start + targetProgress * (trigger.end - trigger.start)
            window.scrollTo(0, targetScroll)
            currentSectionRef.current = initialSectionIndex
            setCurrentSection(initialSectionIndex)
          }
        }, 100)
      } else {
        hasInitializedRef.current = true
      }
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
  }, [isMobile]) // Only isMobile in dependencies

  const scrollToSection = useCallback((sectionId: string) => {
    const sectionIndex = SECTIONS.findIndex((s) => s.id === sectionId)
    if (sectionIndex === -1) return

    isScrollingRef.current = true

    const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
    if (sections.length === 0) return

    const numSections = sections.length
    const trigger = ScrollTrigger.getById("horizontal-scroll")

    if (trigger) {
      const targetProgress = sectionIndex / (numSections - 1)
      const targetScroll = trigger.start + targetProgress * (trigger.end - trigger.start)

      gsap.to(window, {
        scrollTo: { y: targetScroll },
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          isScrollingRef.current = false
          currentSectionRef.current = sectionIndex
          setCurrentSection(sectionIndex)
          const section = SECTIONS[sectionIndex]
          if (section) {
            window.history.replaceState(null, "", section.path)
            if (onSectionChangeRef.current) onSectionChangeRef.current(section.id)
          }
        },
      })
    }
  }, [])

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
