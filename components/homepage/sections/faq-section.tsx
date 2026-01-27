"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, FileText, Building2, Users, Calculator } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const categories = [
  { id: "all", label: "All Questions", icon: null },
  { id: "accounting", label: "Accounting", icon: FileText },
  { id: "tax", label: "Tax", icon: Building2 },
  { id: "general", label: "General", icon: Users },
  { id: "corporate", label: "Corporate", icon: Calculator },
]

const faqs = [
  {
    category: "accounting",
    question: "What is included in your monthly accounting package?",
    answer: "Our monthly accounting package includes bookkeeping, bank reconciliation, accounts payable/receivable management, monthly financial statements, and DBD e-filing compliance.",
  },
  {
    category: "tax",
    question: "What is PND50 and when is it due?",
    answer: "PND50 is the annual corporate income tax return in Thailand. It must be filed within 150 days after the end of your company's accounting period (typically by May 31st for calendar year companies).",
  },
  {
    category: "tax",
    question: "Do I need to file VAT returns every month?",
    answer: "Yes, if your company is VAT registered (required when annual revenue exceeds 1.8 million THB), you must file monthly VAT returns by the 15th of the following month.",
  },
  {
    category: "general",
    question: "Can you handle both Thai and English documentation?",
    answer: "Absolutely. Our team is fully bilingual and can prepare all documents, reports, and communications in both Thai and English to meet regulatory and internal requirements.",
  },
  {
    category: "corporate",
    question: "What's required for company registration in Thailand?",
    answer: "Company registration requires minimum 3 shareholders (at least 51% Thai-owned for most businesses unless BOI promoted), registered capital, director appointments, and registered office address.",
  },
  {
    category: "accounting",
    question: "How do you ensure compliance with Thai accounting standards?",
    answer: "We follow Thai Financial Reporting Standards (TFRS) and maintain all records according to DBD requirements. Our CPAs review all financial statements before submission.",
  },
  {
    category: "general",
    question: "What is your response time for urgent matters?",
    answer: "We guarantee response within 24 hours for email inquiries and 1 hour for WhatsApp messages during business hours. Urgent tax matters are handled same-day.",
  },
  {
    category: "tax",
    question: "Can you help with Revenue Department audits?",
    answer: "Yes, we provide full audit support including document preparation, audit representation, negotiation with tax officers, and appeals if necessary.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [openItems, setOpenItems] = useState<number[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory)

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        {/* Header */}
        <div className="faq-header text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-sky-200/60">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Thai accounting and tax compliance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* FAQ List */}
        <div className="faq-list space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-xl border border-slate-200/60 overflow-hidden hover:border-sky-300/60 transition-colors"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openItems.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
