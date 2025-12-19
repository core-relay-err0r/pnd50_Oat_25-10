"use client"

import { useState } from "react"
import { FileText, Scale, AlertTriangle, ShieldCheck, Gavel, ChevronDown } from "lucide-react"
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

  const toggleSection = (id: string) => {
    setOpenSections((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div>
              <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-100">
                <Gavel className="w-4 h-4" />
                Legal
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mb-4">
                Please read these terms carefully before using our accounting and advisory services.
              </p>
              <p className="text-sm text-slate-400">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-3">
            {sections.map((section) => {
              const Icon = section.icon
              const isOpen = openSections.includes(section.id)
              return (
                <div key={section.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-sky-600" />
                      </div>
                      <span className="font-semibold text-slate-800">{section.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <div className="px-6 pb-5 border-t border-slate-100 pt-4">{section.content}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
