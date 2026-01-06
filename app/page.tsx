"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { HorizontalScrollContainer } from "@/components/horizontal-scroll/scroll-container"
import { ScrollSection } from "@/components/horizontal-scroll/scroll-section"
import { ScrollProgress } from "@/components/horizontal-scroll/scroll-progress"
import { HorizontalNavbar } from "@/components/horizontal-scroll/horizontal-navbar"
import { CTAPanel } from "@/components/horizontal-scroll/cta-panel"

// Lazy load section content for better performance
const HomeContent = lazy(() => import("@/components/horizontal-scroll/sections/home-section"))
const ServicesContent = lazy(() => import("@/components/horizontal-scroll/sections/services-section"))
const AboutContent = lazy(() => import("@/components/horizontal-scroll/sections/about-section"))
const FAQContent = lazy(() => import("@/components/horizontal-scroll/sections/faq-section"))
const ContactContent = lazy(() => import("@/components/horizontal-scroll/sections/contact-section"))

function SectionLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 text-sm">Loading...</p>
      </div>
    </div>
  )
}

export default function HorizontalPage() {
  const [currentSection, setCurrentSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    console.log("[v0] HorizontalPage mounted, isMobile:", window.innerWidth < 768)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Don't render until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // For mobile, render just the home content
  if (isMobile) {
    return (
      <div className="min-h-screen">
        <Suspense fallback={<SectionLoader />}>
          <HomeContent />
        </Suspense>
      </div>
    )
  }

  return (
    <>
      <HorizontalNavbar currentSection={currentSection} />
      <ScrollProgress currentSection={currentSection} />

      <HorizontalScrollContainer onSectionChange={setCurrentSection}>
        <ScrollSection id="home">
          <Suspense fallback={<SectionLoader />}>
            <HomeContent />
          </Suspense>
        </ScrollSection>

        <ScrollSection id="services">
          <Suspense fallback={<SectionLoader />}>
            <ServicesContent />
          </Suspense>
        </ScrollSection>

        <ScrollSection id="about">
          <Suspense fallback={<SectionLoader />}>
            <AboutContent />
          </Suspense>
        </ScrollSection>

        <ScrollSection id="faq">
          <Suspense fallback={<SectionLoader />}>
            <FAQContent />
          </Suspense>
        </ScrollSection>

        <ScrollSection id="contact">
          <Suspense fallback={<SectionLoader />}>
            <ContactContent />
          </Suspense>
        </ScrollSection>

        <ScrollSection id="cta" className="bg-slate-900">
          <CTAPanel />
        </ScrollSection>
      </HorizontalScrollContainer>
    </>
  )
}
