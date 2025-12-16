"use client"

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
    flagUrl: "/images/image.png",
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
    flagUrl: "/images/image.png",
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
    flagUrl: "/images/image.png",
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
    flagUrl: "/images/image.png",
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
    flagUrl: "/images/image.png",
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

export default function InfiniteCaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setVisibleCount(1)
      } else if (width < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Client Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how businesses from around the world have grown with our support
          </p>
        </div>

        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-100/40 border border-blue-100/50 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 -ml-4 md:ml-0"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 hover:text-blue-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg shadow-blue-100/40 border border-blue-100/50 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 -mr-4 md:mr-0"
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 hover:text-blue-600" />
          </button>

          <div className="overflow-hidden mx-8 md:mx-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={`${study.id}-${index}`}
                  className={`flex-shrink-0 px-3 ${
                    visibleCount === 1 ? "w-full" : visibleCount === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg shadow-blue-100/30 border border-blue-100/50 overflow-hidden h-full hover:shadow-xl hover:shadow-blue-200/40 hover:border-blue-200 transition-all duration-300">
                    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm flex-shrink-0 border border-white/30">
                          <Image
                            src={study.flagUrl || "/placeholder.svg"}
                            alt={`${study.country} flag`}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-semibold">{study.country}</p>
                          <p className="text-blue-100 text-sm">{study.industry}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-semibold text-slate-700 text-sm mb-1">Challenge</h3>
                        <p className="text-slate-600 text-sm">{study.challenge}</p>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-semibold text-slate-700 text-sm mb-1">Solution</h3>
                        <p className="text-slate-600 text-sm">{study.solution}</p>
                      </div>

                      <div className="bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-xl p-4 mb-4 border border-blue-100/50">
                        <Quote className="w-4 h-4 text-blue-400 mb-2" />
                        <p className="text-slate-700 text-sm italic mb-2">"{study.testimonial.quote}"</p>
                        <p className="text-blue-600 text-xs font-medium">— {study.testimonial.author}</p>
                      </div>

                      <div className="space-y-2">
                        {study.successHighlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                highlight.color === "green"
                                  ? "text-emerald-500"
                                  : highlight.color === "blue"
                                    ? "text-blue-500"
                                    : "text-violet-500"
                              }`}
                            />
                            <div>
                              <p className="text-slate-800 text-xs font-semibold">{highlight.title}</p>
                              <p className="text-slate-500 text-xs">{highlight.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 w-6"
                    : "bg-slate-300/60 hover:bg-slate-400/60"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
