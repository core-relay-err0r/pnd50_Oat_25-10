"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface CaseStudy {
  id: string
  country: string
  countryCode: string
  flagUrl: string
  industry: string
  title: string
  challenge: string
  solution: string
  testimonial: {
    quote: string
    author: string
  }
  successHighlights: Array<{
    title: string
    description: string
    color: string
  }>
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    country: "Russia",
    countryCode: "RU",
    flagUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-74BQypMc0KUaBUV1KtrFwSn7wC9AWC.png",
    industry: "E-commerce Startup",
    title: "Russian Tech Startup Expansion",
    challenge: "Language barrier and tight 2-week timeline for company setup",
    solution: "Bilingual support, fast-track registration, cloud accounting",
    testimonial: {
      quote: "PND50 took care of everything. They always reply fast and explain things clearly.",
      author: "Dmitry K., Founder",
    },
    successHighlights: [
      {
        title: "Language Barrier Eliminated",
        description: "Bilingual support team provided clear communication in Russian and English",
        color: "green",
      },
      {
        title: "10-Day Setup Completed",
        description: "Fast-track registration met the critical 2-week deadline with time to spare",
        color: "blue",
      },
      {
        title: "Real-Time Financial Access",
        description: "Cloud-based system enabled remote access for the international team",
        color: "purple",
      },
    ],
  },
  {
    id: "2",
    country: "Vietnam",
    countryCode: "VN",
    flagUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1OzJ7rPh6JUcpptmxM2fHuZ6AYWky.png",
    industry: "SaaS Company",
    title: "Vietnamese SaaS Company Launch",
    challenge: "Limited accounting knowledge and time constraints for product development",
    solution: "Full-service bookkeeping, automated compliance, clear reporting",
    testimonial: {
      quote: "PND50 made my life easier. They explain everything clearly, so I always understand.",
      author: "Nguyen T., Founder",
    },
    successHighlights: [
      {
        title: "Full Accounting Support",
        description: "Complete bookkeeping handled all complexities, enabling focus on product",
        color: "green",
      },
      {
        title: "15+ Hours Saved Monthly",
        description: "Automated tax compliance freed up valuable time for core business",
        color: "blue",
      },
      {
        title: "Complete Financial Clarity",
        description: "Clear monthly reports in simple English enabled informed decisions",
        color: "purple",
      },
    ],
  },
  {
    id: "3",
    country: "Russia",
    countryCode: "RU",
    flagUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-74BQypMc0KUaBUV1KtrFwSn7wC9AWC.png",
    industry: "Digital Marketing",
    title: "Russian Digital Marketing Agency",
    challenge: "Confusing terminology, disorganized records, and missed deadlines",
    solution: "Plain English communication, cloud organization, proactive management",
    testimonial: {
      quote: "PND50 made it simple. They keep everything organized and remind us before deadlines.",
      author: "Elena M., Owner",
    },
    successHighlights: [
      {
        title: "Clear Communication",
        description: "Plain English replaced complex jargon, making all financial matters easy to understand",
        color: "green",
      },
      {
        title: "Cloud-Based Organization",
        description: "Instant access to all documents and financial records from anywhere, anytime",
        color: "blue",
      },
      {
        title: "100% On-Time Compliance",
        description: "Proactive deadline management with advance reminders prevented all penalties",
        color: "purple",
      },
    ],
  },
  {
    id: "4",
    country: "Vietnam",
    countryCode: "VN",
    flagUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Q1OzJ7rPh6JUcpptmxM2fHuZ6AYWky.png",
    industry: "Fintech Startup",
    title: "Vietnamese Fintech Platform",
    challenge: "Complex regulatory requirements and multi-currency accounting needs",
    solution: "Specialized fintech compliance, automated currency conversion, regulatory guidance",
    testimonial: {
      quote: "PND50 understands fintech. They helped us navigate complex regulations smoothly.",
      author: "Tran H., CEO",
    },
    successHighlights: [
      {
        title: "Regulatory Compliance Achieved",
        description: "Expert guidance ensured full compliance with Thai fintech regulations",
        color: "green",
      },
      {
        title: "Multi-Currency Mastery",
        description: "Automated handling of 5+ currencies with real-time conversion tracking",
        color: "blue",
      },
      {
        title: "Audit-Ready Records",
        description: "Comprehensive documentation prepared for regulatory audits and investor due diligence",
        color: "purple",
      },
    ],
  },
  {
    id: "5",
    country: "Russia",
    countryCode: "RU",
    flagUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-74BQypMc0KUaBUV1KtrFwSn7wC9AWC.png",
    industry: "EdTech Platform",
    title: "Russian EdTech Expansion",
    challenge: "Rapid growth with 200+ monthly transactions and VAT complexity",
    solution: "Scalable automation, VAT optimization, growth-ready infrastructure",
    testimonial: {
      quote: "As we scaled, PND50 scaled with us. Their system handles our growth effortlessly.",
      author: "Alexei P., Co-Founder",
    },
    successHighlights: [
      {
        title: "Automated Transaction Processing",
        description: "System handles 200+ monthly transactions with zero manual errors",
        color: "green",
      },
      {
        title: "VAT Savings Optimized",
        description: "Strategic VAT planning reduced tax burden by 18% annually",
        color: "blue",
      },
      {
        title: "Scalable Infrastructure",
        description: "Cloud platform ready to support 10x growth without additional overhead",
        color: "purple",
      },
    ],
  },
]

const colorClasses = {
  green: {
    bg: "from-green-500/10 to-green-600/10",
    border: "border-green-500/20",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-600",
  },
  blue: {
    bg: "from-blue-500/10 to-blue-600/10",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-600",
  },
  purple: {
    bg: "from-purple-500/10 to-purple-600/10",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-600",
  },
}

export function InfiniteCaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at 1 because of cloned first item
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const extendedCaseStudies = [caseStudies[caseStudies.length - 1], ...caseStudies, caseStudies[0]]

  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 400
    const width = window.innerWidth
    // Mobile: Account for padding and ensure full card visibility
    if (width < 640) return width - 32 // Full width minus padding (16px on each side)
    if (width < 768) return width * 0.85
    if (width < 1024) return width / 2.2
    return width / 2.5
  }, [])

  const [cardWidth, setCardWidth] = useState(getCardWidth())

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [getCardWidth])

  const getTranslateX = useCallback(() => {
    return -(currentIndex * cardWidth) + dragOffset
  }, [currentIndex, cardWidth, dragOffset])

  const handleTransitionEnd = () => {
    setIsTransitioning(false)

    if (currentIndex === 0) {
      // On cloned last item, jump to real last item
      setCurrentIndex(caseStudies.length)
      if (trackRef.current) {
        trackRef.current.style.transition = "none"
      }
    } else if (currentIndex === extendedCaseStudies.length - 1) {
      // On cloned first item, jump to real first item
      setCurrentIndex(1)
      if (trackRef.current) {
        trackRef.current.style.transition = "none"
      }
    }
  }

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)"
      }
    },
    [isTransitioning],
  )

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  useEffect(() => {
    if (isPaused || isDragging) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
      return
    }

    autoplayRef.current = setInterval(() => {
      goToNext()
    }, 3000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isPaused, isDragging, goToNext])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
    setIsPaused(true)
    if (trackRef.current) {
      trackRef.current.style.transition = "none"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = e.clientX - startX
    setDragOffset(diff)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = cardWidth * 0.3
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev()
      } else {
        goToNext()
      }
    }

    setDragOffset(0)
    setTimeout(() => setIsPaused(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setIsPaused(true)
    if (trackRef.current) {
      trackRef.current.style.transition = "none"
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const diff = e.touches[0].clientX - startX
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = cardWidth * 0.3
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev()
      } else {
        goToNext()
      }
    }

    setDragOffset(0)
    setTimeout(() => setIsPaused(false), 500)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrev()
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 3000)
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goToNext()
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 3000)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrev])

  return (
    <div
      className="relative pb-[calc(80px+env(safe-area-inset-bottom))] sm:pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Case studies carousel"
    >
      <button
        onClick={goToPrev}
        className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Previous case study"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Next case study"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <div className="overflow-hidden px-4 sm:px-12 snap-x snap-mandatory">
        <div
          ref={trackRef}
          className="flex gap-2 sm:gap-3 cursor-grab active:cursor-grabbing items-start"
          style={{
            transform: `translateX(${getTranslateX()}px)`,
            transition: isDragging ? "none" : "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onTransitionEnd={handleTransitionEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedCaseStudies.map((caseStudy, index) => (
            <div
              key={`${caseStudy.id}-${index}`}
              className="flex-shrink-0 snap-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
              style={{ width: `${cardWidth}px` }}
              tabIndex={0}
              role="article"
              aria-label={`Case study: ${caseStudy.title}`}
            >
              <div className="h-auto bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start">
                  <div
                    className={`md:w-2/5 bg-muted/30 border-b md:border-b-0 md:border-r border-border p-3 sm:p-5 py-4 sm:py-6 flex flex-col`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-background shadow-sm flex-shrink-0">
                        <Image
                          src={caseStudy.flagUrl || "/placeholder.svg"}
                          alt={`${caseStudy.country} Flag`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-[10px] sm:text-xs font-medium uppercase tracking-wide ${
                            caseStudy.country === "Russia" ? "text-blue-600" : "text-emerald-600"
                          }`}
                        >
                          {caseStudy.country} → Thailand
                        </div>
                        <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-normal break-words">
                          {caseStudy.industry}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold text-foreground mb-2.5 sm:mb-4 whitespace-normal break-words leading-snug">
                      {caseStudy.title}
                    </h3>

                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 flex-1">
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1 sm:mb-1.5">
                          Challenge
                        </div>
                        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed whitespace-normal break-words">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1 sm:mb-1.5">
                          Solution
                        </div>
                        <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed whitespace-normal break-words">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 border-l-2 border-primary rounded-r-lg p-2 sm:p-3 mt-auto">
                      <Quote className="w-3 h-3 text-primary mb-1 sm:mb-1.5" />
                      <p className="text-[11px] sm:text-xs text-foreground italic mb-1.5 sm:mb-2 leading-relaxed whitespace-normal break-words">
                        {caseStudy.testimonial.quote}
                      </p>
                      <p className="text-[10px] sm:text-xs font-semibold text-foreground">
                        {caseStudy.testimonial.author}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-3 sm:p-5 py-4 sm:py-6 bg-background">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      <h4 className="text-xs sm:text-base font-bold text-foreground">Success Highlights</h4>
                    </div>
                    <div className="flex flex-col gap-2.5 sm:gap-4">
                      {caseStudy.successHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className={`bg-gradient-to-br ${colorClasses[highlight.color as keyof typeof colorClasses].bg} border ${colorClasses[highlight.color as keyof typeof colorClasses].border} rounded-lg p-2 sm:p-3`}
                        >
                          <div className="flex items-start gap-2 sm:gap-3">
                            <div
                              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${colorClasses[highlight.color as keyof typeof colorClasses].iconBg} flex items-center justify-center flex-shrink-0`}
                            >
                              <CheckCircle2
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${colorClasses[highlight.color as keyof typeof colorClasses].iconColor}`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-semibold text-foreground text-[11px] sm:text-xs mb-0.5 sm:mb-1 whitespace-normal break-words leading-snug">
                                {highlight.title}
                              </h5>
                              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed whitespace-normal break-words">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Case study pagination">
        {caseStudies.map((_, index) => {
          const actualIndex =
            currentIndex === 0
              ? caseStudies.length - 1
              : currentIndex === extendedCaseStudies.length - 1
                ? 0
                : currentIndex - 1
          return (
            <button
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                actualIndex === index ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
              }`}
              aria-label={`Go to case study ${index + 1}`}
              role="tab"
              aria-selected={actualIndex === index}
            />
          )
        })}
      </div>

      <div className="text-center mt-4 text-sm text-muted-foreground">
        {isPaused ? "Paused" : "Auto-playing"} • Use arrow keys or drag to navigate
      </div>
    </div>
  )
}
