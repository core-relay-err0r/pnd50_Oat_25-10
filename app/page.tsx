"use client"
import dynamic from "next/dynamic"
import { Progress } from "@/components/ui/progress"
import { HomepageCtas } from "@/components/HomepageCtas"
import { SecurityCta } from "@/components/SecurityCta"
import { FinalCta } from "@/components/FinalCta"
import { useEffect, useState, useRef } from "react"
import { Copy, Check } from "lucide-react"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function PND50Landing() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const servicesRef = useRef<HTMLElement>(null)
  const securityRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

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

    const sections = [servicesRef.current, securityRef.current, ctaRef.current, contactRef.current]

    sections.forEach((section) => {
      if (section) {
        // Add initial hidden state
        section.classList.add("section-hidden")
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

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

            <div className="container mx-auto px-4 text-center relative z-10">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-primary-foreground mb-8 border border-background/20 transition-all duration-700 hover:bg-background/20 hover:scale-102 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-2 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-chart-2"></span>
                </span>
                Thailand's Leading Tech-Driven Accounting Firm
              </div>

              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                Your Trusted Accounting Partner
                <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-gradient-shift inline-block">
                  in Thailand
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                All in one service.
From accounting to compliance, we help foreign businesses operate in Thailand with ease, accuracy, and full compliance with local regulations.
              </p>

              <div
                className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {[
                  {
                    icon: "👨‍💼",
                    label: "Certified Accountants",
                    color: "from-primary/20 to-primary/30 hover:from-primary/30 hover:to-primary/40",
                    hoverShadow: "hover:shadow-lg hover:shadow-primary/30",
                  },
                  {
                    icon: "⚡",
                    label: "Real-Time Data",
                    color: "from-chart-4/20 to-chart-4/30 hover:from-chart-4/30 hover:to-chart-4/40",
                    hoverShadow: "hover:shadow-lg hover:shadow-chart-4/30",
                  },
                  {
                    icon: "🛡️",
                    label: "Secure & Compliant",
                    color: "from-chart-2/20 to-chart-2/30 hover:from-chart-2/30 hover:to-chart-2/40",
                    hoverShadow: "hover:shadow-lg hover:shadow-chart-2/30",
                  },
                  {
                    icon: "🌏",
                    label: "Expat Specialists",
                    color: "from-purple-500/20 to-purple-600/30 hover:from-purple-500/30 hover:to-purple-600/40",
                    hoverShadow: "hover:shadow-lg hover:shadow-purple-500/30",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r ${feature.color} backdrop-blur-md border border-background/20 transition-all duration-300 hover:scale-102 ${feature.hoverShadow} cursor-pointer min-h-[44px] touch-manipulation`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </span>
                    <span className="text-primary-foreground font-medium text-sm sm:text-base whitespace-nowrap">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <HomepageCtas />
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
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Our Services</p>
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
                <div className="relative bg-slate-950 rounded-3xl p-8 shadow-2xl border border-slate-800 hover:border-primary transition-all duration-300 hover:shadow-primary/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div
                        className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Live
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                        <span>📊</span> Document Status
                      </h4>
                      <div className="space-y-4">
                        {[
                          { name: "PND50 Filing", progress: 100, status: "Complete", color: "bg-green-500" },
                          { name: "VAT Return", progress: 75, status: "In Review", color: "bg-blue-500" },
                          { name: "Q3 Report", progress: 30, status: "Processing", color: "bg-yellow-500" },
                        ].map((doc, index) => (
                          <div key={index} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-neutral-300 text-sm group-hover:text-white transition-colors duration-300">
                                {doc.name}
                              </span>
                              <span className="text-neutral-400 text-xs group-hover:text-blue-400 transition-colors duration-300">
                                {doc.status}
                              </span>
                            </div>
                            <Progress
                              value={doc.progress}
                              className={`h-2 [&>*]:${doc.color} transition-all duration-300`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span>🛡️</span> Security Status
                      </h4>
                      <div className="flex items-center gap-3 text-green-400">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-neutral-300 text-sm hover:text-white transition-colors duration-300">
                          All systems secure. No threats detected.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
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

        <section id="contact" ref={contactRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl opacity-20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Get In Touch</p>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">Visit Our Office</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Located in the heart of Bangkok's business district, we're here to help you succeed.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">📍</span>
                    Office Location
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-foreground">Suite 3065, 30th Floor</strong>
                      <br />
                      Bhiraj Tower at EmQuartier
                      <br />
                      689 Sukhumvit Rd, Khlong Tan Nuea
                      <br />
                      Watthana, Bangkok 10110
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">📞</span>
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 text-lg group">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">Phone:</span>
                        <a
                          href="tel:020172949"
                          className="text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                        >
                          02 017 2949
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("020172949", "phone")}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title="Copy phone number"
                      >
                        {copiedItem === "phone" ? (
                          <Check className="w-4 h-4 text-chart-2" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-lg group">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">Email:</span>
                        <a
                          href="mailto:info@pnd50.com"
                          className="text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                        >
                          info@pnd50.com
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("info@pnd50.com", "email")}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title="Copy email"
                      >
                        {copiedItem === "email" ? (
                          <Check className="w-4 h-4 text-chart-2" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-lg group">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">Telegram:</span>
                        <a
                          href="https://t.me/66843563805"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                        >
                          <img src="/images/icons8-telegram.gif" alt="Telegram" className="w-5 h-5" />
                          084 356 3805
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("0843563805", "telegram")}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title="Copy Telegram number"
                      >
                        {copiedItem === "telegram" ? (
                          <Check className="w-4 h-4 text-chart-2" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-lg group">
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-foreground">WhatsApp:</span>
                        <a
                          href="https://wa.me/66843563805"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
                        >
                          <img src="/images/icons8-whatsapp.gif" alt="WhatsApp" className="w-5 h-5" />
                          084 356 3805
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("0843563805", "whatsapp")}
                        className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        title="Copy WhatsApp number"
                      >
                        {copiedItem === "whatsapp" ? (
                          <Check className="w-4 h-4 text-chart-2" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="text-3xl">🕐</span>
                    Business Hours
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Monday - Friday:</span>
                      <span className="text-foreground font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Saturday - Sunday:</span>
                      <span className="text-foreground font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6919447890845!2d100.57168931483!3d13.731641990349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed269e0c9e5%3A0x8d6c3c8c8c8c8c8c!2sBhiraj+Tower+at+EmQuartier!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PND50 Office Location"
                    className="w-full"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.google.com/maps/dir//Bhiraj+Tower+at+EmQuartier,+689+Sukhumvit+Rd,+Khlong+Tan+Nuea,+Watthana,+Bangkok+10110"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-102"
                  >
                    <span>🗺️</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
