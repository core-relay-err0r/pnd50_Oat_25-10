"use client"
import dynamic from "next/dynamic"
import { Progress } from "@/components/ui/progress"
import { HomepageCtas } from "@/components/HomepageCtas"
import { SecurityCta } from "@/components/SecurityCta"
import { FinalCta } from "@/components/FinalCta"
import { useEffect, useState, useRef } from "react"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

export default function PND50Landing() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const servicesRef = useRef<HTMLElement>(null)
  const securityRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

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

    const sections = [servicesRef.current, securityRef.current, ctaRef.current]

    sections.forEach((section) => {
      if (section) {
        // Add initial hidden state
        section.classList.add("section-hidden")
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <main>
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
          <AnimatedGridBackground className="py-32 md:py-48">
            <div
              className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"
              style={{
                transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                transition: "transform 0.5s ease-out",
              }}
            />

            <div className="container mx-auto px-4 text-center relative z-10">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-2 text-sm font-medium text-white mb-8 border border-white/20 transition-all duration-700 hover:bg-white/20 hover:scale-102 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Thailand's Leading Tech-Driven Accounting Firm
              </div>

              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                Your Trusted Accounting Partner
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift inline-block">
                  in Thailand
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                From accounting to compliance, we help foreign businesses operate in Thailand with ease, accuracy, and
                full compliance with local regulations.
              </p>

              <div
                className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
              >
                {[
                  {
                    icon: "👩‍💼",
                    label: "Certified Accountants",
                    color: "from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30",
                    hoverShadow: "hover:shadow-lg hover:shadow-blue-500/30",
                  },
                  {
                    icon: "⚡",
                    label: "Real-Time Data",
                    color: "from-yellow-500/20 to-yellow-600/20 hover:from-yellow-500/30 hover:to-yellow-600/30",
                    hoverShadow: "hover:shadow-lg hover:shadow-yellow-500/30",
                  },
                  {
                    icon: "🛡️",
                    label: "Secure & Compliant",
                    color: "from-emerald-500/20 to-emerald-600/20 hover:from-emerald-500/30 hover:to-emerald-600/30",
                    hoverShadow: "hover:shadow-lg hover:shadow-emerald-500/30",
                  },
                  {
                    icon: "🌏",
                    label: "Expat Specialists",
                    color: "from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30",
                    hoverShadow: "hover:shadow-lg hover:shadow-purple-500/30",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r ${feature.color} backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-102 ${feature.hoverShadow} cursor-pointer min-h-[44px] touch-manipulation`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="text-xl sm:text-2xl transition-transform duration-300 flex-shrink-0">
                      {feature.icon}
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base whitespace-nowrap">
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
          className="py-24 md:py-32 bg-white relative overflow-hidden transition-all duration-1000"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mb-20 scroll-animate">
              <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">Our Services</p>
              <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
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
                  className="scroll-animate group block p-8 md:p-10 border-2 border-neutral-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden"
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="text-6xl md:text-7xl font-bold text-neutral-200 group-hover:text-blue-600 transition-colors duration-300">
                      {service.number}
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl mb-4 transition-transform duration-300 inline-block">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-lg">{service.description}</p>
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
          className="py-24 md:py-32 bg-neutral-50 relative overflow-hidden transition-all duration-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-emerald-50 opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="scroll-animate">
                <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide uppercase">Security & Trust</p>
                <h2 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-8 leading-tight">
                  Your Security is Our Foundation
                </h2>
                <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
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
                      icon: "🤖",
                      title: "AI-Powered Anomaly Detection",
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
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-all duration-300">
                        <span className="transition-transform duration-300">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <SecurityCta />
                </div>
              </div>

              <div className="scroll-animate-right relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-neutral-900 rounded-3xl p-8 shadow-2xl border border-neutral-800 hover:shadow-blue-500/10 transition-all duration-300">
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
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 animate-gradient-shift"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="scroll-animate text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Finances?
            </h2>
            <p
              className="scroll-animate text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
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
