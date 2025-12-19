"use client"

import { useState } from "react"
import { Shield, Eye, Lock, Users, FileText, Clock, Globe, Mail, ChevronDown } from "lucide-react"
import CTASection from "@/components/layout/CTASection"

const sections = [
  {
    id: "summary",
    icon: Eye,
    title: "Quick Summary",
    content: (
      <div className="space-y-3 text-slate-600 leading-relaxed">
        <p>Here's what you need to know about your privacy with PND50:</p>
        <ul className="space-y-2">
          {[
            "We collect only the information necessary to provide our accounting and advisory services",
            "Your data is encrypted and stored securely",
            "We never sell your personal information to third parties",
            "You have the right to access, update, or delete your data at any time",
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
    id: "collect",
    icon: Users,
    title: "What Information We Collect",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Personal Information You Provide</h4>
          <ul className="space-y-2 text-slate-600">
            {[
              { label: "Contact details", desc: "Email address, phone number, and mailing address" },
              { label: "Identity information", desc: "First and last name" },
              { label: "Business information", desc: "Company name, tax ID, and business address" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sky-500 font-bold mt-0.5">✓</span>
                <span>
                  <strong>{item.label}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-3">Information We Collect Automatically</h4>
          <ul className="space-y-2 text-slate-600">
            {[
              { label: "Device information", desc: "IP address, browser type, and operating system" },
              { label: "Usage patterns", desc: "Pages visited, time spent, and navigation paths" },
              { label: "Location data", desc: "General geographic location based on IP address" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-sky-500 font-bold mt-0.5">✓</span>
                <span>
                  <strong>{item.label}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "use",
    icon: Lock,
    title: "How We Use Your Information",
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Provide Our Services",
            desc: "Deliver accounting and advisory services, manage your account, and process your requests.",
            color: "sky",
          },
          {
            title: "Communicate With You",
            desc: "Send important updates, respond to inquiries, and provide customer support.",
            color: "teal",
          },
          {
            title: "Improve Our Services",
            desc: "Analyze usage patterns, fix technical issues, and develop new features.",
            color: "blue",
          },
          {
            title: "Ensure Security",
            desc: "Protect against fraud, unauthorized access, and other security threats.",
            color: "indigo",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl bg-gradient-to-br from-${item.color}-50 to-white border border-${item.color}-100`}
          >
            <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "share",
    icon: Globe,
    title: "How We Share Your Information",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">
          We respect your privacy and only share your information in limited circumstances:
        </p>
        {[
          {
            title: "With Service Providers",
            desc: "We work with trusted third-party companies to help us provide our services. These companies are required to protect your data.",
          },
          {
            title: "For Legal Reasons",
            desc: "We may disclose your information if required by law, court order, or government request.",
          },
          {
            title: "With Your Consent",
            desc: "We may share your information with other parties when you give us explicit permission.",
          },
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white/60 rounded-xl border border-slate-200/50">
            <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
        <div className="p-4 bg-red-50 rounded-xl border border-red-200/50">
          <p className="text-red-700 font-medium text-sm">
            We never sell your personal information to third parties for marketing purposes.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "retention",
    icon: Clock,
    title: "How Long We Keep Your Data",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>We only keep your personal information for as long as necessary to:</p>
        <ol className="space-y-2">
          {[
            "Provide our services to you",
            "Comply with legal and regulatory requirements",
            "Resolve disputes and enforce our agreements",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="text-sm bg-slate-50 p-4 rounded-xl">
          After this period, we securely delete or anonymize your information so it can no longer identify you.
        </p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: FileText,
    title: "Your Privacy Rights",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">You have important rights regarding your personal information:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Access Your Data",
              desc: "Request a copy of the personal information we hold about you.",
              color: "sky",
            },
            { title: "Correct Your Data", desc: "Update or correct any inaccurate information.", color: "teal" },
            { title: "Delete Your Data", desc: "Request deletion of your personal information.", color: "blue" },
            { title: "Opt-Out", desc: "Unsubscribe from marketing communications at any time.", color: "indigo" },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl bg-${item.color}-50 border border-${item.color}-100`}>
              <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: (
      <div className="space-y-4 text-slate-600">
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <div className="p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl border border-sky-200/50">
          <p className="font-semibold text-slate-800 mb-2">PND50 Co., Ltd.</p>
          <p className="text-sm">Email: oat3653377@gmail.com</p>
          <p className="text-sm">Bangkok, Thailand</p>
        </div>
      </div>
    ),
  },
]

export default function PrivacyPolicyPage() {
  const [openSections, setOpenSections] = useState<string[]>(["summary"])

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
                <Shield className="w-4 h-4" />
                Legal
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mb-4">
                At PND50, we take your privacy seriously. This policy explains how we collect, use, and protect your
                personal information.
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
