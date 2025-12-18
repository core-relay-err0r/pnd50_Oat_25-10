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
    <main
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-sky-200/30 via-blue-200/20 to-teal-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[350px] h-[350px] bg-gradient-to-br from-teal-200/25 via-sky-200/20 to-blue-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/20 via-sky-100/15 to-teal-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl py-20 pt-32 relative z-10">
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
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
            {icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">{title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{description}</p>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 mb-6">What We Offer</h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-lg shadow-slate-200/50 p-6">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-center gap-4 py-4 border-b border-slate-100/80 last:border-0"
                >
                  <div className="w-2 h-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div ref={faqsRef} className="mb-20">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 mb-6">Common Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-white/60 backdrop-blur-sm rounded-xl border border-white/80 shadow-md shadow-slate-200/30 p-5"
              >
                <h3 className="text-slate-900 font-medium mb-2">{faq.question}</h3>
                <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">{ctaText}</h2>
              <p className="text-slate-300">Schedule a free consultation.</p>
            </div>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-teal-500 transition-all shadow-lg shadow-blue-500/30 group"
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
