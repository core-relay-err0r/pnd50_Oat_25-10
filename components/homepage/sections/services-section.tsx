"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FileText,
  Calculator,
  Building2,
  Users,
  TrendingUp,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Calculator,
    title: "Accounting",
    description:
      "Monthly bookkeeping with English reports, DBD-compliant financial statements, and real-time dashboard access.",
    features: ["Monthly English reports", "DBD compliance", "Real-time dashboard", "Balance sheet & P&L"],
    href: "/services/accounting",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: FileText,
    title: "Tax Filing",
    description:
      "Complete tax compliance including PND50/51, PP30, withholding tax, and year-end submissions with 99.9% accuracy.",
    features: ["PND50/51 filing", "VAT returns (PP30)", "Withholding tax", "Year-end submissions"],
    href: "/services/tax",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Payroll",
    description:
      "End-to-end payroll processing, social security registration, PND1 filing, and employee documentation.",
    features: ["Salary processing", "Social security", "PND1 filing", "Pay slips"],
    href: "/services/payroll",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    icon: Building2,
    title: "Corporate Services",
    description:
      "Company registration, BOI applications, work permits, visas, and corporate secretarial services.",
    features: ["Company registration", "Work permits", "BOI applications", "Corporate secretary"],
    href: "/services/corporate",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Briefcase,
    title: "Advisory",
    description:
      "Strategic guidance on Thai regulations, tax planning, restructuring, and business optimization.",
    features: ["Tax planning", "Regulatory guidance", "Business structuring", "M&A support"],
    href: "/services/advisory",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Services",
    description:
      "Financial analysis, KPI tracking, cash flow management, and strategic recommendations to scale.",
    features: ["Financial analysis", "KPI tracking", "Cash flow management", "Growth strategy"],
    href: "/services/growth",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
]

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(".services-title", {
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate stats
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      })

      // Animate cards with stagger
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="services-title text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Trusted by 200+ Businesses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Business Compliance &{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Accounting
            </span>{" "}
            Services in Thailand
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-pretty">
            From company setup to ongoing compliance, we provide end-to-end business solutions
            for foreign-owned companies in Thailand. Expert guidance in English, powered by
            modern technology.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-container flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl px-8 py-6 text-center min-w-[140px] hover:shadow-lg hover:border-sky-300/60 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card group bg-white rounded-2xl p-6 border border-slate-200/60 hover:border-sky-300/60 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors group/link"
                >
                  Explore this service
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Not sure which service you need? We can help you find the right solution.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-sky-200/50 transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
