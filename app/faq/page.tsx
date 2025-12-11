"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, Calculator, FileText, Users, ChevronRight, Phone, X, Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const faqCategories = [
  {
    id: "accounting",
    title: "Accounting Questions",
    icon: FileText,
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
    icon: Building2,
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
    icon: Users,
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
            <div className="bg-sky-50 border-l-4 border-primary rounded-r p-4 mt-4">
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
    icon: Calculator,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
      {/* Hero Section */}
      <div className="relative border-b border-slate-200 overflow-hidden pt-[80px] min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/professional-consultation-questions-answers-help.jpg"
            alt="Professional consultation and support"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-sky-50/70 to-white/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-[15%] left-[8%] w-20 h-20 border-2 border-sky-300/40 rounded-2xl z-[1]"
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
          className="absolute top-[25%] right-[12%] w-16 h-16 border-2 border-teal-300/30 rounded-full z-[1]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Gradient orbs */}
        <div
          className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-br from-sky-200/30 via-blue-200/20 to-teal-200/10 rounded-full blur-3xl pointer-events-none z-[1]"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
            ></Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              Real Questions from Clients
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Clear answers about accounting, tax, and business setup in Thailand — explained in simple English, based
              on real client questions.
            </motion.p>

            <motion.div
              className="relative max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-12 pr-10 sm:pr-12 py-4 sm:py-6 text-sm sm:text-base bg-white/80 backdrop-blur-sm border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-primary/50 transition-all w-full shadow-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Nav */}
      <motion.div
        className="border-b border-slate-200 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible">
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-primary/50 hover:bg-primary/5 transition-all flex-shrink-0 snap-start touch-manipulation shadow-sm"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 group-hover:text-primary transition-colors" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 whitespace-nowrap">
                    {category.title}
                  </span>
                  <span className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                    {category.questions.length}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const Icon = category.icon

              return (
                <section key={category.id} id={category.id} className="scroll-mt-20 sm:scroll-mt-24">
                  <div className="flex items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                          {category.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          {category.questions.length} {category.questions.length === 1 ? "question" : "questions"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                    {category.questions.map((q) => (
                      <AccordionItem
                        key={q.id}
                        value={q.id}
                        className="group bg-white border border-slate-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 data-[state=open]:shadow-xl data-[state=open]:border-primary/30 transition-all duration-300 hover:shadow-lg hover:border-slate-300"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 touch-manipulation">
                          <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-4">
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-data-[state=open]:rotate-90 transition-transform" />
                            <span className="font-semibold text-slate-900 text-sm sm:text-base md:text-lg leading-relaxed text-balance">
                              {q.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4 pb-4 sm:pb-6 pl-6 sm:pl-8">
                          {q.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )
            })
          ) : (
            <div className="text-center py-12 sm:py-16 px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">No results found</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 max-w-md mx-auto">
                We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse all categories.
              </p>
              <Button onClick={() => setSearchQuery("")} variant="outline" className="touch-manipulation">
                Clear Search
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <section className="mt-12 sm:mt-16 md:mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50 border-2 border-sky-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-teal-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
                    Still Have Questions?
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                    Can't find what you're looking for? Our team is ready to guide you step by step — in simple English,
                    with full transparency. Get personalized answers to your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="text-sm sm:text-base group w-full sm:w-auto touch-manipulation"
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Contact Us
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-sm sm:text-base w-full sm:w-auto touch-manipulation group relative overflow-hidden border-2 border-primary/30 hover:border-primary hover:bg-primary transition-all duration-300 bg-transparent"
                    >
                      <Link href="/calculator" className="flex items-center justify-center gap-2">
                        <span className="bg-gradient-to-r from-primary to-sky-600 bg-clip-text text-transparent font-semibold group-hover:bg-none group-hover:text-white">
                          Get Free Consultation
                        </span>
                        <ChevronRight className="w-4 h-4 text-primary group-hover:text-white group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
