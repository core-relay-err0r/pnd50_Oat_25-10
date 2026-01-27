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
  Shield,
  ArrowRight,
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: FileText,
    title: "Tax Filing & Compliance",
    description: "Complete PND50, PND51, VAT, and withholding tax management with 99.9% accuracy guarantee.",
    features: ["Annual tax returns", "Monthly VAT filing", "Withholding tax certificates"],
    href: "/services/tax",
    color: "sky",
  },
  {
    icon: Calculator,
    title: "Full-Cycle Accounting",
    description: "End-to-end bookkeeping, financial statements, and DBD-compliant reporting.",
    features: ["Monthly bookkeeping", "Financial statements", "DBD e-filing"],
    href: "/services/accounting",
    color: "blue",
  },
  {
    icon: Building2,
    title: "Corporate Services",
    description: "Company registration, BOI applications, and corporate secretary services.",
    features: ["Company registration", "BOI applications", "Annual compliance"],
    href: "/services/corporate",
    color: "indigo",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Complete payroll processing, social security, and employee tax handling.",
    features: ["Payroll processing", "Social security", "PND1 filing"],
    href: "/services/payroll",
    color: "violet",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic tax planning, restructuring advice, and growth consulting.",
    features: ["Tax optimization", "Business structuring", "M&A support"],
    href: "/services/advisory",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Audit Support",
    description: "Revenue Department audit preparation and representation services.",
    features: ["Audit preparation", "Documentation review", "RD representation"],
    href: "/services/advisory",
    color: "fuchsia",
  },
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
        <div className="services-title text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything your business needs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive accounting and tax services designed specifically for foreign-owned businesses in Thailand.
          </p>
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
                <div className={`w-12 h-12 rounded-xl bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
