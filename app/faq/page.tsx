"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import {
  FileText,
  Building2,
  Users,
  Calculator,
  ChevronRight,
  Search,
  X,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { FAQRelatedLinks } from "@/components/seo/related-links"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const faqCategories = [
  {
    id: "accounting",
    title: "Accounting Questions",
    icon: FileText,
    questions: [
      {
        id: "accounting-1",
        question: "Why do I have to record accounting in Thai Baht when all transactions are in foreign currencies?",
        answer:
          "All companies registered in Thailand under Thai law must prepare financial statements in accordance with Thai Accounting Standards and policies, which require using the Thai Baht (THB) as the presentation currency. Even if all your transactions are in foreign currencies, your official financial reports must be presented in THB.",
        reference: "Section 11, Accounting Act B.E. 2543 (2000); Thai Accounting Standard (TAS) No.21",
      },
      {
        id: "accounting-2",
        question: 'Why does my company have a "Gain or Loss on Exchange Rate" account?',
        answer:
          "Because your business uses foreign currencies for transactions, every time these are converted to Thai Baht for accounting, the exchange rate may differ from the transaction date to the payment date. This difference creates a foreign exchange gain or loss, which reflects the true value of your foreign-currency transactions.",
        reference: 'Thai Accounting Standard (TAS) No.21 "The Effects of Changes in Foreign Exchange Rates"',
      },
      {
        id: "accounting-3",
        question: "Why must we revalue exchange rates at year-end using the rate from the Thai Revenue Department?",
        answer:
          "At the end of each accounting year, companies must adjust the value of all foreign-currency items (such as receivables or cash) to reflect the current exchange rate. The Thai Revenue Department publishes official exchange rates each year, which must be used for consistency and tax compliance.",
        reference: "Thai Accounting Standard (TAS) No.21; Revenue Department Announcement on Exchange Rates",
      },
    ],
  },
  {
    id: "tax",
    title: "Tax Questions",
    icon: Building2,
    questions: [
      {
        id: "tax-1",
        question: "Why must exchange gains or losses be included in taxable income or expenses?",
        answer:
          "Foreign exchange gains or losses are part of real business results and must be treated as taxable income or deductible expenses under Thai tax law.",
        reference: "Section 65 Ter (4), Revenue Code of Thailand; Departmental Instruction Paw.0506/19642 (2001)",
      },
      {
        id: "tax-2",
        question:
          "Do we need to register for VAT if revenue exceeds THB 1.8 million but all sales are outside Thailand?",
        answer:
          "If all sales and services are performed and used entirely outside Thailand, your business is not subject to Thai VAT. You don't need to register for VAT unless you wish to do so voluntarily.",
        reference: "Section 77/1 and Section 82/3, Revenue Code of Thailand",
      },
      {
        id: "tax-3",
        question: "After registering for VAT, do I still need to file form PP.30 if there's no income?",
        answer:
          "Yes. Once VAT-registered, you must file Form PP.30 every month — by the 15th of the following month — even if you have no income. Missing the deadline may lead to surcharges and penalties.",
        reference: "Section 83 and Section 90, Revenue Code of Thailand",
      },
    ],
  },
  {
    id: "general",
    title: "General Questions",
    icon: Users,
    questions: [
      {
        id: "general-1",
        question: "Why should we use monthly accounting and tax services with PND50?",
        answer:
          "Even if most transactions occur overseas and no withholding tax applies, monthly accounting ensures compliance with Thai accounting and tax law, no missed deadlines or penalties, organized audit-ready financial records, and ongoing support with expert advice. Monthly accounting gives peace of mind — we keep your business accurate, compliant, and stress-free.",
        reference: "Accounting Act B.E.2543; Thai Revenue Code filing requirements",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Compliance",
    icon: Calculator,
    questions: [
      {
        id: "corporate-1",
        question: "Can a foreigner be the sole director or shareholder of a Thai company?",
        answer:
          "Yes, in some cases. Foreigners can own 100% of a company depending on the business type and Thailand's foreign business regulations. Our Corporate Service team can review your structure and prepare all required registration documents.",
      },
      {
        id: "corporate-2",
        question: "How can I change company details, such as directors or address?",
        answer:
          "Any changes to company details — directors, address, or shareholders — must be officially filed with the Department of Business Development (DBD). PND50's Corporate Service team handles all updates and filings on your behalf.",
      },
      {
        id: "corporate-3",
        question: "Can my company open a corporate bank account in Thailand?",
        answer:
          "Yes. Every registered company can open a corporate bank account. Requirements vary by bank, but as part of our Corporate Services, PND50 can guide you through the process and help prepare the necessary documents.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
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

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  const displayCategories = activeCategory
    ? filteredCategories.filter((c) => c.id === activeCategory)
    : filteredCategories

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 relative overflow-hidden">
      <motion.div
        className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl pointer-events-none"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -15, 0, 15, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
        }}
      />
      <motion.div
        className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[15%] w-12 h-12 bg-gradient-to-br from-sky-200/30 to-teal-200/30 rounded-lg pointer-events-none"
        animate={{
          rotate: [45, 135, 225, 315, 405],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[60%] right-[20%] w-8 h-8 bg-gradient-to-br from-blue-300/40 to-sky-300/40 rounded-full pointer-events-none"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

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

      {/* Hero Section - Updated to match landing page style */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-sky-200/50 text-sm font-medium text-sky-600 mb-6">
                Help Center
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">
                Clear answers about accounting, tax, and business setup in Thailand — explained in simple English.
              </p>
            </motion.div>

            {/* Search - Updated styling */}
            <motion.div
              className="mt-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 py-4 text-base bg-white/80 backdrop-blur-sm border-slate-200/50 rounded-xl focus:bg-white focus:border-sky-300 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filter - Updated styling */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === null
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                  : "bg-white/80 text-slate-600 hover:bg-white border border-slate-200/50"
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md"
                      : "bg-white/80 text-slate-600 hover:bg-white border border-slate-200/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 relative z-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar - Updated styling */}
          <motion.aside
            className="hidden lg:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-28">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
              <nav className="space-y-1">
                {faqCategories.map((category) => {
                  const Icon = category.icon
                  const questionCount = category.questions.length
                  return (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-600 hover:bg-white/80 hover:text-slate-900 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                        <span className="text-sm font-medium">{category.title}</span>
                      </div>
                      <span className="text-xs text-slate-400 bg-white/80 px-2 py-0.5 rounded-full">
                        {questionCount}
                      </span>
                    </a>
                  )
                })}
              </nav>

              {/* Quick contact - Updated styling */}
              <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-2">Need more help?</h4>
                <p className="text-sm text-slate-500 mb-4">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.aside>

          {/* Main content - Updated card styling */}
          <div className="min-w-0">
            {displayCategories.length > 0 ? (
              <div className="space-y-12">
                {displayCategories.map((category) => (
                  <motion.section
                    key={category.id}
                    id={category.id}
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                      <span className="text-sm text-slate-400">{category.questions.length} questions</span>
                    </div>

                    <div className="space-y-3">
                      {category.questions.map((q) => {
                        const isOpen = openItems.includes(q.id)
                        return (
                          <div
                            key={q.id}
                            className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-sm overflow-hidden"
                          >
                            <button
                              onClick={() => toggleItem(q.id)}
                              className="w-full flex items-start justify-between gap-4 text-left p-5 group"
                            >
                              <span className="text-base sm:text-lg font-medium text-slate-900 group-hover:text-sky-600 transition-colors pr-4">
                                {q.question}
                              </span>
                              <span
                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                                  isOpen
                                    ? "bg-sky-100 text-sky-600"
                                    : "bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-500"
                                }`}
                              >
                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                              </span>
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pr-16 border-t border-slate-100">
                                    <p className="text-slate-600 leading-relaxed pt-4">{q.answer}</p>
                                    {q.reference && (
                                      <div className="mt-4 px-4 py-3 bg-gradient-to-r from-sky-50 to-teal-50 rounded-lg border-l-2 border-sky-400">
                                        <p className="text-sm text-slate-500">
                                          <span className="font-medium text-slate-700">Reference:</span> {q.reference}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </motion.section>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-500 mb-6">We couldn't find any FAQs matching "{searchQuery}"</p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section - Updated with gradient */}
      <motion.section
        className="mt-16 sm:mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden w-full">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-7 h-7 text-sky-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Can't find what you're looking for? Our team is ready to guide you step by step — in simple English, with
              full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-teal-400 hover:from-sky-600 hover:to-teal-500 text-white border-0"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
              >
                <Link href="/calculator">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Links Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-sky-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FAQRelatedLinks />
        </div>
      </section>
    </div>
  )
}
