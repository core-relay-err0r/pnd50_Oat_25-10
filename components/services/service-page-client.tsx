"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { gsap } from "gsap"

interface FAQ {
  question: string
  answer: string
}

interface ServicePageClientProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  faqs: FAQ[]
  ctaText?: string
}

export function ServicePageClient({
  title,
  description,
  icon,
  features,
  faqs,
  ctaText = "Ready to Get Started?",
}: ServicePageClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(heroRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Features stagger animation
      gsap.from(".feature-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.3,
      })

      // FAQs stagger animation
      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      })

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.7,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-3xl py-20 pt-32">
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors mb-16 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Services
        </Link>

        {/* Hero */}
        <div ref={heroRef} className="mb-20">
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-8">{icon}</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">{title}</h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">{description}</p>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 mb-6">What We Offer</h2>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item flex items-center gap-4 py-4 border-b border-slate-100 last:border-0"
              >
                <div className="w-1.5 h-1.5 bg-slate-900 rounded-full flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div ref={faqsRef} className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 mb-6">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="text-slate-900 font-medium mb-2">{faq.question}</h3>
                <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="border-t border-slate-100 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-1">{ctaText}</h2>
              <p className="text-slate-500">Schedule a free consultation.</p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
