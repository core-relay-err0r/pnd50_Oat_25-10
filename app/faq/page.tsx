"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import {
  ArrowLeft,
  BookOpen,
  Flame,
  MessageCircle,
  FileText,
  Search,
  ChevronRight,
  X,
  ChevronDown,
  HelpCircle,
  MessageSquare,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const faqCategories = [
  {
    id: "accounting",
    title: "Accounting Questions",
    icon: BookOpen,
    color: "blue",
    questions: [
      {
        id: "accounting-1",
        question:
          "Q1. Why do I have to record accounting in Thai Baht when all transactions are in foreign currencies like USD or CNY?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> All companies registered in Thailand under Thai law must
              prepare financial statements in accordance with Thai Accounting Standards and policies, which require
              using the Thai Baht (THB) as the presentation currency. Even if all your transactions are in foreign
              currencies, your official financial reports must be presented in THB.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Section 11, Accounting Act B.E. 2543 (2000); Thai Accounting Standard (TAS)
                No.21 "The Effects of Changes in Foreign Exchange Rates"
              </p>
            </div>
          </>
        ),
      },
      {
        id: "accounting-2",
        question: 'Q2. Why does my company have a "Gain or Loss on Exchange Rate" account?',
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Because your business uses foreign currencies for
              transactions, every time these are converted to Thai Baht for accounting, the exchange rate may differ
              from the transaction date to the payment date. This difference creates a foreign exchange gain or loss,
              which reflects the true value of your foreign-currency transactions.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Thai Accounting Standard (TAS) No.21 "The Effects of Changes in Foreign
                Exchange Rates"
              </p>
            </div>
          </>
        ),
      },
      {
        id: "accounting-3",
        question: "Q3. Why must we revalue exchange rates at year-end using the rate from the Thai Revenue Department?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> At the end of each accounting year, companies must adjust
              the value of all foreign-currency items (such as receivables or cash) to reflect the current exchange
              rate. The Thai Revenue Department publishes official exchange rates each year, which must be used for
              consistency and tax compliance.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Thai Accounting Standard (TAS) No.21; Revenue Department Announcement on
                Exchange Rates for Tax Purposes
              </p>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "tax",
    title: "Tax Questions",
    icon: Flame,
    color: "orange",
    questions: [
      {
        id: "tax-1",
        question: "Q4. Why must exchange gains or losses be included in taxable income or expenses?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Foreign exchange gains or losses are part of real business
              results and must be treated as taxable income or deductible expenses.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Section 65 Ter (4), Revenue Code of Thailand; Departmental Instruction
                Paw.0506/19642 (2001)
              </p>
            </div>
          </>
        ),
      },
      {
        id: "tax-2",
        question:
          "Q5. My company sells goods or provides services outside Thailand. Do we need to register for VAT if revenue exceeds THB 1.8 million?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> If all sales and services are performed and used entirely
              outside Thailand, your business is not subject to Thai VAT.
            </p>
            <p className="mt-2">You don't need to register for VAT unless you wish to do so voluntarily.</p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Section 77/1 and Section 82/3, Revenue Code of Thailand
              </p>
            </div>
          </>
        ),
      },
      {
        id: "tax-3",
        question: "Q6. After registering for VAT, do I still need to file form PP.30 if there's no income?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Yes. Once VAT-registered, you must file Form PP.30 every
              month — by the 15th of the following month — even if you have no income.
            </p>
            <p className="text-orange-600 font-medium mt-2">
              Missing the deadline may lead to surcharges and penalties.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Section 83 and Section 90, Revenue Code of Thailand
              </p>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "general",
    title: "General Questions",
    icon: MessageCircle,
    color: "purple",
    questions: [
      {
        id: "general-1",
        question: "Q7. Why should we use monthly accounting and tax services with PND50?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Even if most transactions occur overseas and no
              withholding tax applies, monthly accounting ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Compliance with Thai accounting and tax law</li>
              <li>No missed deadlines or penalties</li>
              <li>Organized, audit-ready financial records</li>
              <li>Ongoing support and expert advice</li>
            </ul>
            <p className="mt-3">
              In short: Monthly accounting gives peace of mind — we keep your business accurate, compliant, and
              stress-free.
            </p>
            <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4 mt-4">
              <p className="text-sm">
                <strong>Reference:</strong> Accounting Act B.E.2543; Thai Revenue Code filing requirements
              </p>
            </div>
          </>
        ),
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Compliance Questions",
    icon: FileText,
    color: "green",
    questions: [
      {
        id: "corporate-1",
        question: "Q8. Can a foreigner be the sole director or shareholder of a Thai company?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Yes, in some cases. Foreigners can own 100% of a company
              depending on the business type and Thailand's foreign business regulations.
            </p>
            <p className="mt-2">
              Our Corporate Service team can review your structure and prepare all required registration documents.
            </p>
          </>
        ),
      },
      {
        id: "corporate-2",
        question: "Q9. How can I change company details, such as directors or address?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Any changes to company details — directors, address, or
              shareholders — must be officially filed with the Department of Business Development (DBD).
            </p>
            <p className="mt-2">PND50's Corporate Service team handles all updates and filings on your behalf.</p>
          </>
        ),
      },
      {
        id: "corporate-3",
        question: "Q10. Can my company open a corporate bank account in Thailand?",
        answer: (
          <>
            <p>
              <strong className="text-foreground">A:</strong> Yes. Every registered company can open a corporate bank
              account.
            </p>
            <p className="mt-2">
              Requirements vary by bank, but as part of our Corporate Services, PND50 can guide you through the process
              and help prepare the necessary documents.
            </p>
          </>
        ),
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState("all")
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

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (typeof q.answer === "string" && q.answer.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFaqs = faqCategories.flatMap((category) => category.questions)

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedGridBackground className="min-h-screen flex-1">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <motion.div initial="initial" animate="animate" variants={pageVariants} className="flex-1 flex flex-col">
            <div className="relative overflow-hidden pt-[80px] min-h-[60vh]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/professional-consultation-questions-answers-help.jpg"
                  alt="Professional consultation and support"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/60 to-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm font-medium">Back to Home</span>
                </Link>

                <div className="max-w-4xl">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    Real Questions from Clients
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                    Frequently Asked Questions
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 sm:mb-8">
                    Clear answers about accounting, tax, and business setup in Thailand — explained in simple English,
                    based on real client questions.
                  </p>

                  <div className="relative max-w-2xl">
                    <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
                    <Input
                      type="text"
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 sm:pl-12 pr-10 sm:pr-12 py-4 sm:py-6 text-sm sm:text-base bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-primary/50 transition-all w-full"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 touch-manipulation ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    {category.title}
                    <span
                      className={`ml-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${
                        activeCategory === category.id ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      {category.questions.length}
                    </span>
                  </button>
                ))}
              </div>

              <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-primary/30"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left touch-manipulation"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                          <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                          </div>
                          <span className="text-sm sm:text-base md:text-lg font-semibold text-white leading-tight">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
                            openItems.includes(faq.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openItems.includes(faq.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                              <div className="pl-11 sm:pl-14 border-l-2 border-primary/20 ml-0 sm:ml-0">
                                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 sm:py-16">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No results found</h3>
                    <p className="text-slate-400 text-sm sm:text-base">
                      Try adjusting your search or browse by category
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-12 sm:mt-16 md:mt-24 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Still have questions?
                  </h2>
                  <p className="text-slate-300 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
                    Our team is here to help. Get personalized answers for your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link
                      href="/calculator"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
                    >
                      Schedule Consultation
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-white/10 transition-all text-sm sm:text-base"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedGridBackground>
      </section>
      <LandingFooter />
    </main>
  )
}
