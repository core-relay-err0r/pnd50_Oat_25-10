"use client"

import { useRef, useEffect, type ReactNode, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname, useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

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
  { id: "cta", path: "/cta", label: "CTA", showInNav: false }, // Hidden from navbar
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
  const router = useRouter()
  const pathname = usePathname()
  const isScrollingRef = useRef(false)

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Initialize horizontal scroll
  useEffect(() => {
    if (isMobile || !containerRef.current || !wrapperRef.current) return

    const container = containerRef.current
    const wrapper = wrapperRef.current
    const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")

    if (sections.length === 0) return

    // Calculate total width
    const totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0)

    // Set wrapper width
    gsap.set(wrapper, { width: totalWidth })

    // Create horizontal scroll animation
    const scrollTween = gsap.to(wrapper, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (isScrollingRef.current) return

          // Calculate current section based on progress
          const progress = self.progress
          const sectionIndex = Math.min(Math.floor(progress * sections.length), sections.length - 1)

          if (sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex)
            const section = SECTIONS[sectionIndex]
            if (section && onSectionChange) {
              onSectionChange(section.id)
            }
            // Update URL without navigation
            if (section && section.path !== pathname) {
              window.history.pushState(null, "", section.path)
            }
          }
        },
      },
    })

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      scrollTween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile, currentSection, onSectionChange, pathname])

  // Handle initial URL routing - scroll to correct section on page load
  useEffect(() => {
    if (isMobile) return

    const sectionIndex = SECTIONS.findIndex((s) => s.path === pathname)
    if (sectionIndex > 0 && containerRef.current) {
      // Calculate scroll position for this section
      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
      if (sections.length > 0) {
        let targetX = 0
        for (let i = 0; i < sectionIndex; i++) {
          targetX += sections[i]?.offsetWidth || window.innerWidth
        }

        // Scroll to position after a short delay to ensure ScrollTrigger is ready
        setTimeout(() => {
          const trigger = ScrollTrigger.getById("horizontal-scroll")
          if (trigger) {
            const scrollPos =
              (targetX / (sections.length * window.innerWidth - window.innerWidth)) * (trigger.end - trigger.start)
            window.scrollTo(0, scrollPos)
          }
        }, 100)
      }
    }
  }, [pathname, isMobile])

  // Expose scrollToSection function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const sectionIndex = SECTIONS.findIndex((s) => s.id === sectionId)
      if (sectionIndex === -1) return

      isScrollingRef.current = true

      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section")
      if (sections.length === 0) return

      let targetX = 0
      for (let i = 0; i < sectionIndex; i++) {
        targetX += sections[i]?.offsetWidth || window.innerWidth
      }

      const totalWidth = sections.reduce((acc, section) => acc + section.offsetWidth, 0)
      const maxScroll = totalWidth - window.innerWidth
      const scrollRatio = targetX / maxScroll

      // Get ScrollTrigger instance
      const trigger = ScrollTrigger.getAll()[0]
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
              window.history.pushState(null, "", section.path)
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
    if (!isMobile) {
      ;(window as any).scrollToSection = scrollToSection
    }
    return () => {
      delete (window as any).scrollToSection
    }
  }, [scrollToSection, isMobile])

  // Mobile: render children normally without horizontal scroll
  if (isMobile) {
    return <div className="min-h-screen">{children}</div>
  }

  return (
    <div ref={containerRef} className="horizontal-scroll-container relative overflow-hidden">
      <div ref={wrapperRef} className="horizontal-wrapper flex flex-nowrap h-screen">
        {children}
      </div>
    </div>
  )
}
