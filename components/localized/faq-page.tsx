"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { FileText, Building2, Users, Calculator, Search, X, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import CTASection from "@/components/layout/CTASection"
import { translations, type Locale } from "@/lib/translations"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

interface LocalizedFAQPageProps {
  locale: Locale
}

export default function LocalizedFAQPage({ locale }: LocalizedFAQPageProps) {
  const t = translations[locale]
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

  const faqCategories = [
    {
      id: "accounting",
      title: t.faq.categories.accounting,
      icon: FileText,
      questions: t.faq.questions.accounting.map((q, i) => ({ ...q, id: `accounting-${i}` })),
    },
    {
      id: "tax",
      title: t.faq.categories.tax,
      icon: Building2,
      questions: t.faq.questions.tax.map((q, i) => ({ ...q, id: `tax-${i}` })),
    },
    {
      id: "general",
      title: t.faq.categories.general,
      icon: Users,
      questions: t.faq.questions.general.map((q, i) => ({ ...q, id: `general-${i}` })),
    },
    {
      id: "corporate",
      title: t.faq.categories.corporate,
      icon: Calculator,
      questions: t.faq.questions.corporate.map((q, i) => ({ ...q, id: `corporate-${i}` })),
    },
  ]

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
      {/* Floating Elements */}
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
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                {t.faq.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 bg-clip-text text-transparent">
                  {t.faq.title1}
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 bg-clip-text text-transparent">
                  {t.faq.title2}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">{t.faq.description}</p>
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
                  placeholder={t.faq.searchPlaceholder}
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
              {t.faq.allQuestions}
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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                            className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
                              openItems.includes(q.id) ? "rotate-180" : ""
                            }`}
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
                              <div className="px-5 pb-4 text-slate-600 border-t border-slate-100">
                                <p className="pt-4">{q.answer}</p>
                                {q.reference && (
                                  <p className="mt-3 text-sm text-slate-400">
                                    <span className="font-medium">Reference:</span> {q.reference}
                                  </p>
                                )}
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

      <CTASection locale={locale} />
    </div>
  )
}
