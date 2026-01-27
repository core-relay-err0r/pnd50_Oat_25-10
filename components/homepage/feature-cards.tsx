"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Calculator,
    title: "Tax Filing & Compliance",
    description: "PND50, PND51, VAT, withholding tax - all handled with AI precision and human expertise.",
    href: "/services/tax",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Full-Cycle Accounting",
    description: "Monthly bookkeeping, financial statements, and year-end reporting done right.",
    href: "/services/accounting",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Social security, tax withholding, and employee documentation automated.",
    href: "/services/payroll",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic planning, tax optimization, and growth consulting for your business.",
    href: "/services/advisory",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Shield,
    title: "Audit Support",
    description: "Revenue Department audit preparation and representation with full documentation.",
    href: "/services/corporate",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Clock,
    title: "Real-Time Dashboard",
    description: "Track your financials, deadlines, and compliance status 24/7 online.",
    href: "/contact",
    color: "from-cyan-500 to-cyan-600",
  },
]

export function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll(".feature-card")

    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              stay compliant
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From tax filing to strategic advisory, our AI-powered platform handles it all with human expertise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="feature-card group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-5`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
