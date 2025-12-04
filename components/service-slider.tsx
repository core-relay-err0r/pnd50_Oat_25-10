"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, BookOpen, FileText, Users, Building2, Lightbulb, TrendingUp } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description:
      "We handle your monthly bookkeeping, financial statements, and reconciliations with precision. All work is processed internally using TR Cloud — a secure accounting system operated by our team. Reports are delivered directly to you via email every month.",
    features: ["Monthly bookkeeping", "Financial statements", "Bank reconciliations", "TR Cloud system"],
  },
  {
    icon: FileText,
    title: "Tax & Compliance",
    description:
      "Monthly and annual tax filings, including VAT, withholding tax, and corporate income tax. We help ensure your company remains fully compliant with Thai Revenue Department regulations.",
    features: ["VAT filing", "Withholding tax", "Corporate income tax", "Compliance support"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "Monthly payroll and social security submissions, prepared accurately and delivered on time. Ideal for both local and foreign-owned businesses.",
    features: ["Monthly payroll", "Social security", "Accurate calculations", "Timely delivery"],
  },
  {
    icon: Building2,
    title: "Corporate Services",
    description: "Company registration, shareholder updates, and annual DBD filings — handled efficiently by our team.",
    features: ["Company registration", "Shareholder updates", "DBD filings", "Corporate governance"],
  },
  {
    icon: Lightbulb,
    title: "Advisory & Support",
    description:
      "Clear, practical guidance on accounting and compliance to help your business make confident decisions in Thailand.",
    features: ["Strategic guidance", "Compliance advice", "Business planning", "Expert consultation"],
  },
  {
    icon: TrendingUp,
    title: "Business Growth Solutions",
    description:
      "Strategic financial planning and analysis to help scale your business in Thailand. We provide insights and recommendations to optimize your operations and maximize profitability.",
    features: ["Financial analysis", "Growth strategy", "Cost optimization", "Performance metrics"],
  },
]

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3
  if (width >= 768) return 2
  return 1
}

const ServiceSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)

      const oldVisibleCount = getVisibleCount(windowWidth)
      const newVisibleCount = getVisibleCount(newWidth)

      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = services.length - newVisibleCount
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth))
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [windowWidth, currentIndex])

  useEffect(() => {
    if (!isAutoPlaying) return

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth)
        const maxIndex = services.length - visibleCount

        if (currentIndex >= maxIndex) {
          setDirection(-1)
          setCurrentIndex((prev) => prev - 1)
        } else if (currentIndex <= 0) {
          setDirection(1)
          setCurrentIndex((prev) => prev + 1)
        } else {
          setCurrentIndex((prev) => prev + direction)
        }
      }, 5000) // Slower interval for reading
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex, windowWidth, direction])

  const visibleCount = getVisibleCount(windowWidth)
  const maxIndex = services.length - visibleCount
  const canGoNext = currentIndex < maxIndex
  const canGoPrev = currentIndex > 0

  const goNext = () => {
    if (canGoNext) {
      setDirection(1)
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
      pauseAutoPlay()
    }
  }

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1)
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
      pauseAutoPlay()
    }
  }

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info
    const swipeThreshold = 30

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext()
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev()
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    pauseAutoPlay()
  }

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goPrev}
          disabled={!canGoPrev}
          className={`p-2 rounded-full ${
            canGoPrev
              ? "bg-background border border-border shadow-sm hover:bg-accent text-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          } transition-all duration-300`}
          aria-label="Previous service"
        >
          <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goNext}
          disabled={!canGoNext}
          className={`p-2 rounded-full ${
            canGoNext
              ? "bg-background border border-border shadow-sm hover:bg-accent text-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          } transition-all duration-300`}
          aria-label="Next service"
        >
          <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>

      <div className="overflow-hidden relative px-2 sm:px-0 -mx-2 sm:mx-0">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-full ${
                  visibleCount === 3 ? "md:w-1/3" : visibleCount === 2 ? "md:w-1/2" : "w-full"
                } p-3`}
                initial={{ opacity: 0.5, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98, cursor: "grabbing" }}
                style={{ cursor: "grab" }}
              >
                <div className="group border border-border rounded-2xl p-6 md:p-8 h-full hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col bg-secondary">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8">
        {Array.from({ length: services.length - visibleCount + 1 }, (_: any, index: any) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative mx-1 focus:outline-none"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to service ${index + 1}`}
          >
            <motion.div
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
              animate={{
                scale: index === currentIndex ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 1.5,
                repeat: index === currentIndex ? Number.POSITIVE_INFINITY : 0,
                repeatDelay: 1,
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ServiceSlider
