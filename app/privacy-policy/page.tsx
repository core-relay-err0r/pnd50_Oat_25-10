"use client"

import { useState, useEffect } from "react"
import { Shield, Eye, Lock, Users, FileText, Clock, Globe, Mail, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
                <Shield className="w-4 h-4" />
                Legal
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                  Privacy
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-4">
                At PND50, we take your privacy seriously. This policy explains how we collect, use, and protect your
                personal information.
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
