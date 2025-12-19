"use client"

import { useState, useEffect } from "react"
import { FileText, Scale, AlertTriangle, ShieldCheck, Gavel, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import CTASection from "@/components/layout/CTASection"

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          Welcome to PND50. By accessing or using our website and services, you agree to be bound by these Terms of
          Service. If you do not agree with any part of these terms, please do not use our services.
        </p>
        <p>
          These terms apply to all visitors, users, and others who access or use our accounting, tax, and advisory
          services.
        </p>
      </div>
    ),
  },
  {
    id: "definitions",
    icon: Scale,
    title: "2. Definitions",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>In these Terms of Service:</p>
        <ul className="space-y-2">
          {[
            {
              term: '"PND50", "we", "us", "our"',
              def: "refers to PND50 Co., Ltd., an accounting and advisory firm registered in Thailand.",
            },
            { term: '"You", "your"', def: "refers to the individual or entity accessing our services." },
            {
              term: '"Services"',
              def: "refers to accounting, tax filing, payroll, corporate registration, and advisory services provided by PND50.",
            },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
              <span>
                <strong className="text-slate-800">{item.term}</strong> — {item.def}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "services",
    icon: ShieldCheck,
    title: "3. Our Services",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>PND50 provides professional accounting and business advisory services including:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Monthly bookkeeping and financial reporting",
            "Corporate and personal tax filing",
            "Payroll processing and social security",
            "Company registration and DBD filings",
            "Business advisory and compliance",
            "Audit support and financial analysis",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
              <span className="text-sky-500 font-bold">✓</span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm bg-slate-50 p-4 rounded-xl">
          All services are performed in accordance with Thai accounting standards and tax regulations.
        </p>
      </div>
    ),
  },
  {
    id: "obligations",
    icon: Scale,
    title: "4. Your Obligations",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>When using our services, you agree to:</p>
        <ul className="space-y-2">
          {[
            "Provide accurate and complete information for all filings",
            "Respond promptly to requests for documents or clarification",
            "Review and approve documents before submission deadlines",
            "Pay for services according to agreed terms",
            "Notify us of any changes affecting your business or filings",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "restrictions",
    icon: AlertTriangle,
    title: "5. Restrictions",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>You are prohibited from:</p>
        <ul className="space-y-2">
          {[
            "Using our services for any unlawful purpose",
            "Providing false or misleading information",
            "Sharing confidential reports or advice with unauthorized third parties",
            "Attempting to access our systems or data without authorization",
            "Reselling or redistributing our services without permission",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "liability",
    icon: ShieldCheck,
    title: "6. Limitation of Liability",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>
          PND50 exercises professional care in providing services. However, our liability is limited to the fees paid
          for the specific service in question.
        </p>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/50">
          <p className="text-amber-700 text-sm">
            <strong>Important:</strong> We are not liable for penalties or losses resulting from inaccurate information
            provided by you, late approval of documents, or circumstances beyond our reasonable control.
          </p>
        </div>
        <p>
          Our advice is based on current Thai laws and regulations. We recommend reviewing any significant business
          decisions with legal counsel.
        </p>
      </div>
    ),
  },
  {
    id: "confidentiality",
    icon: ShieldCheck,
    title: "7. Confidentiality",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          We maintain strict confidentiality of all client information. Your financial data, business details, and
          personal information are protected and will not be disclosed to third parties except:
        </p>
        <ul className="space-y-2">
          {[
            "When required by Thai law or government authorities",
            "With your explicit written consent",
            "To our professional advisors bound by confidentiality",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "payment",
    icon: Scale,
    title: "8. Payment Terms",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>Payment terms are specified in your service agreement. Generally:</p>
        <ul className="space-y-2">
          {[
            "Monthly services are billed at the beginning of each month",
            "One-time services require payment upon completion",
            "Late payments may incur additional fees",
            "All fees are in Thai Baht unless otherwise specified",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "termination",
    icon: AlertTriangle,
    title: "9. Termination",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>Either party may terminate services with 30 days written notice. Upon termination:</p>
        <ul className="space-y-2">
          {[
            "Outstanding fees become immediately due",
            "We will complete any filings in progress",
            "All your documents will be returned or transferred as requested",
            "Confidentiality obligations continue after termination",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "governing",
    icon: Gavel,
    title: "10. Governing Law",
    content: (
      <div className="space-y-3 text-slate-600">
        <p>
          These Terms of Service are governed by the laws of the Kingdom of Thailand. Any disputes shall be submitted to
          the jurisdiction of the Thai courts in Bangkok.
        </p>
        <div className="p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border border-sky-200/50">
          <p className="font-semibold text-slate-800 mb-2">Contact for Legal Inquiries</p>
          <p className="text-sm">PND50 Co., Ltd.</p>
          <p className="text-sm">Email: oat3653377@gmail.com</p>
          <p className="text-sm">Bangkok, Thailand</p>
        </div>
      </div>
    ),
  },
]

export default function TermsOfServicePage() {
  const [openSections, setOpenSections] = useState<string[]>(["acceptance"])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const toggleSection = (id: string) => {
    setOpenSections((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl pointer-events-none"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -15, 0, 15, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
      />
      <motion.div
        className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg pointer-events-none"
        animate={{ rotate: [45, 135, 225, 315, 405] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Blur Orbs */}
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-br from-teal-200/35 via-sky-200/25 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-sky-200/60 shadow-sm shadow-sky-100/50">
                <Gavel className="w-4 h-4" />
                Legal
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                  Terms of
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-4">
                Please read these terms carefully before using our accounting and advisory services.
              </p>
              <p className="text-sm text-slate-400">Last updated: January 2025</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <motion.section
        className="py-12 sm:py-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            {sections.map((section) => {
              const Icon = section.icon
              const isOpen = openSections.includes(section.id)
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-sky-600" />
                      </div>
                      <span className="font-semibold text-slate-800 text-lg">{section.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 pt-4">{section.content}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <CTASection />
    </div>
  )
}
