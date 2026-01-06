"use client"

import { useState, useEffect } from "react"
import { FileText, Building2, Users, Search, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

const faqCategories = [
  {
    id: "accounting",
    title: "Accounting Questions",
    icon: FileText,
    questions: [
      {
        id: "accounting-1",
        question: "Why do I have to record accounting in Thai Baht?",
        answer:
          "All companies registered in Thailand under Thai law must prepare financial statements in accordance with Thai Accounting Standards, which require using Thai Baht (THB) as the presentation currency.",
      },
      {
        id: "accounting-2",
        question: 'Why does my company have a "Gain or Loss on Exchange Rate" account?',
        answer:
          "Because your business uses foreign currencies for transactions, every time these are converted to Thai Baht, the exchange rate may differ creating a foreign exchange gain or loss.",
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
        question: "Why must exchange gains or losses be included in taxable income?",
        answer:
          "Foreign exchange gains or losses are part of real business results and must be treated as taxable income or deductible expenses under Thai tax law.",
      },
      {
        id: "tax-2",
        question: "Do we need to register for VAT if revenue exceeds THB 1.8 million?",
        answer:
          "If all sales and services are performed and used entirely outside Thailand, your business is not subject to Thai VAT.",
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
        question: "Why should we use monthly accounting services?",
        answer:
          "Monthly accounting ensures compliance with Thai accounting and tax law, no missed deadlines, organized audit-ready records, and ongoing expert advice.",
      },
    ],
  },
]

export default function FAQSection() {
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

  const toggleItem = (id: string) =>
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))

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
    <div className="w-full h-full min-h-screen overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-sky-50/80 relative">
      <motion.div
        className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl pointer-events-none"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -15, 0, 15, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
      />
      <div
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-teal-200/20 rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-sky-200/60 shadow-sm shadow-sky-100/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                </span>
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

            {/* Search */}
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

      {/* Category Filter */}
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
      <motion.section
        className="py-12 sm:py-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {displayCategories.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800">{category.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {category.questions.map((q) => (
                      <div
                        key={q.id}
                        className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl overflow-hidden shadow-sm"
                      >
                        <button
                          onClick={() => toggleItem(q.id)}
                          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                        >
                          <span className="font-medium text-slate-800 pr-4">{q.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openItems.includes(q.id) ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openItems.includes(q.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-5 pb-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                {q.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
