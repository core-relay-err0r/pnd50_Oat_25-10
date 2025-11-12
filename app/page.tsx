"use client"
import dynamic from "next/dynamic"
import { HomepageCtas } from "@/components/HomepageCtas"
import { SecurityCta } from "@/components/SecurityCta"
import { FinalCta } from "@/components/FinalCta"
import { useEffect, useState, useRef, useMemo } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShuffleTestimonials } from "@/components/ShuffleTestimonials"
import { motion } from "framer-motion"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function PND50Landing() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const words = useMemo(() => ["Accounting", "Consultant", "Compliant"], [])
  // </CHANGE>
  const servicesRef = useRef<HTMLElement>(null)
  const caseStudiesRef = useRef<HTMLElement>(null)
  const securityRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-visible")
          entry.target.classList.remove("section-hidden")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = [
      servicesRef.current,
      caseStudiesRef.current,
      securityRef.current,
      ctaRef.current,
      contactRef.current,
    ]

    sections.forEach((section) => {
      if (section) {
        // Add initial hidden state
        section.classList.add("section-hidden")
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (wordIndex === words.length - 1) {
        setWordIndex(0)
      } else {
        setWordIndex(wordIndex + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [wordIndex, words])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollToDirection = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main>
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <AnimatedGridBackground className="py-32 md:py-48">
            <div
              className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left side - Hero content with optimized layout */}
                <div className="text-center lg:text-left space-y-6 md:space-y-8">
                  {/* Badge with improved visual hierarchy */}
                  <div
                    className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary/10 to-chart-2/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white mb-2 border border-primary/20 transition-all duration-700 hover:bg-primary/20 hover:scale-105 hover:border-primary/40 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Thailand's Leading Tech-Driven Corporate Services Firm.
                  </div>

                  {/* Headline with improved typography and spacing */}
                  <h1
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift inline-block pb-2 leading-[1.15] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                      AI Boutique
                    </span>
                    <br />
                    <span className="relative inline-block w-full overflow-visible" style={{ height: "1.2em" }}>
                      {words.map((word, index) => (
                        <motion.span
                          key={index}
                          className="absolute left-0 text-white font-bold whitespace-nowrap"
                          initial={{ opacity: 0, y: 100 }}
                          transition={{ type: "spring", stiffness: 50 }}
                          animate={
                            wordIndex === index
                              ? {
                                  y: 0,
                                  opacity: 1,
                                }
                              : {
                                  y: wordIndex > index ? -150 : 150,
                                  opacity: 0,
                                }
                          }
                        >
                          {word}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  {/* Subtitle with better contrast */}

                  {/* Value proposition with improved readability */}
                  <p
                    className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 text-slate-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    You Talk to an Expert, Not a Robot. We connect you with a dedicated human advisor who speaks your
                    native language. Our AI makes them <span className="text-primary font-semibold">5x faster</span> and{" "}
                    <span className="text-chart-2 font-semibold">totally error-free</span>.
                  </p>

                  {/* Feature badges with improved visual design */}
                  <div
                    className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 transition-all duration-700 delay-300 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    {[
                      {
                        icon: "💻",
                        label: "Tech-Driven Experts",
                        gradient: "from-blue-500/80 to-cyan-500/80",
                        hover: "hover:from-blue-500 hover:to-cyan-500",
                      },
                      {
                        icon: "⚡",
                        label: "Real-Time Data",
                        gradient: "from-amber-500/80 to-orange-500/80",
                        hover: "hover:from-amber-500 hover:to-orange-500",
                      },
                      {
                        icon: "🛡️",
                        label: "Secure & Compliant",
                        gradient: "from-emerald-500/80 to-teal-500/80",
                        hover: "hover:from-emerald-500 hover:to-teal-500",
                      },
                      {
                        icon: "🌏",
                        label: "Expat Specialists",
                        gradient: "from-purple-500/80 to-pink-500/80",
                        hover: "hover:from-purple-500 hover:to-pink-500",
                      },
                    ].map((feature, index) => null)}
                  </div>

                  {/* CTAs with improved prominence and spacing */}
                  <div
                    className={`pt-4 transition-all duration-700 delay-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  >
                    <HomepageCtas />
                  </div>
                </div>
                {/* </CHANGE> */}

                {/* Right side - Testimonial cards */}
                <div className="hidden lg:flex items-center justify-center overflow-visible">
                  <ShuffleTestimonials />
                </div>
              </div>
            </div>
          </AnimatedGridBackground>
        </section>

        <section
          id="services"
          ref={servicesRef}
          className="py-24 md:py-32 bg-background relative overflow-hidden transition-all duration-1000"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl opacity-30"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mb-20 scroll-animate">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">What we do </p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From strategic tax planning to full compliance management, we provide end-to-end financial services
                powered by cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  number: "01",
                  title: "Strategic Tax Planning",
                  description:
                    "Minimize liabilities and optimize your tax structure with predictive analytics and expert guidance tailored to Thai regulations.",
                  icon: "📊",
                },
                {
                  number: "02",
                  title: "Accounting & Compliance",
                  description:
                    "Stay audit-ready with our AI-driven platform that ensures full compliance with Thai accounting standards and regulations.",
                  icon: "✅",
                },
                {
                  number: "03",
                  title: "Business Consulting",
                  description:
                    "Accelerate growth with data-backed strategies, from company setup to expansion planning and operational optimization.",
                  icon: "🚀",
                },
                {
                  number: "04",
                  title: "Payroll & HR Services",
                  description:
                    "Streamline employee management with automated payroll processing, benefits administration, and compliance tracking.",
                  icon: "👥",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="scroll-animate group block p-8 md:p-10 border-2 border-border rounded-2xl hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card relative overflow-hidden"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="text-6xl md:text-7xl font-bold text-muted group-hover:text-primary transition-colors duration-300">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl mb-4 transition-transform duration-300 inline-block">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center scroll-animate" style={{ transitionDelay: "600ms" }}>
              <Button asChild variant="outline" className="group bg-transparent">
                <Link href="/services" className="flex items-center gap-2">
                  See our services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            {/* </CHANGE> */}
          </div>
        </section>

        <section
          id="security"
          ref={securityRef}
          className="py-24 md:py-32 bg-muted relative overflow-hidden transition-all duration-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5 opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate">
                <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Security & Trust</p>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                  Your Security is Our Foundation
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Enterprise-grade security and privacy by design, so you can focus on growing your business with
                  complete peace of mind.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: "🔐",
                      title: "End-to-End Encrypted Portal",
                      description:
                        "All data, documents, and communications secured with AES-256 encryption, both in transit and at rest.",
                    },
                    {
                      icon: "📄",
                      title: "Real-Time Document Tracking",
                      description:
                        "Complete audit trail with live status updates and version history for every document you share.",
                    },
                    {
                      icon: "🏆",
                      title: "ISO 27001-Ready Infrastructure",
                      description:
                        "Built on frameworks compliant with the highest international standards for information security.",
                    },
                    {
                      icon: "🛡️",
                      title: "Advanced Threat Detection",
                      description:
                        "Continuous monitoring for unusual activity, proactively flagging potential risks before escalation.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="scroll-animate flex items-start gap-5 group transition-all duration-300"
                      style={{
                        transitionDelay: `${(index + 1) * 150}ms`,
                      }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary transition-all duration-300">
                        <span className="transition-transform duration-300">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <SecurityCta />
                </div>
              </div>

              <div className="scroll-animate-right relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-3xl blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={ctaRef}
          id="final-cta"
          className="relative py-24 md:py-32 overflow-hidden transition-all duration-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-chart-2 animate-gradient-shift"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="scroll-animate text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to Transform Your Finances?
            </h2>
            <p
              className="scroll-animate text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ transitionDelay: "200ms" }}
            >
              Join hundreds of businesses that trust PND50 for their accounting needs. Experience the perfect blend of
              technology and expertise.
            </p>

            <div
              className="scroll-animate flex flex-wrap justify-center gap-8 mb-12 text-lg text-white"
              style={{ transitionDelay: "300ms" }}
            >
              {["Tech-Driven Automation", "Instant Reporting", "Expert Support", "Expat Specialists"].map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group hover:scale-102 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <svg
                      className="w-6 h-6 text-emerald-300 transition-all duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium group-hover:text-emerald-200 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ),
              )}
            </div>

            <div className="scroll-animate" style={{ transitionDelay: "500ms" }}>
              <FinalCta />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
