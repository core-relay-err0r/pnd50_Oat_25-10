"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Flame, MessageCircle, FileText, Phone, Search, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-border overflow-hidden pt-[80px]">
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/60 to-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          {/* Back button */}
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
              Clear answers about accounting, tax, and business setup in Thailand — explained in simple English, based
              on real client questions.
            </p>

            <div className="relative max-w-2xl">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-12 pr-4 py-4 sm:py-6 text-sm sm:text-base bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 focus:bg-white/15 focus:border-primary/50 transition-all w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible">
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex-shrink-0 snap-start touch-manipulation"
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
                    {category.title}
                  </span>
                  <span className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {category.questions.length}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const Icon = category.icon
              const colorClasses = {
                blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
                orange: "bg-orange-500/10 text-orange-600 border-orange-500/20",
                purple: "bg-purple-500/10 text-purple-600 border-purple-500/20",
                green: "bg-green-500/10 text-green-600 border-green-500/20",
              }

              return (
                <section key={category.id} id={category.id} className="scroll-mt-20 sm:scroll-mt-24">
                  <div className="flex items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center border flex-shrink-0 ${colorClasses[category.color as keyof typeof colorClasses]}`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                          {category.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
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
                        className="group bg-card border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 data-[state=open]:shadow-xl data-[state=open]:border-primary/30 transition-all duration-300 hover:shadow-lg hover:border-border/80"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 touch-manipulation">
                          <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-4">
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-data-[state=open]:rotate-90 transition-transform" />
                            <span className="font-semibold text-foreground text-sm sm:text-base md:text-lg leading-relaxed text-balance">
                              {q.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4 pb-4 sm:pb-6 pl-6 sm:pl-8">
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">No results found</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto">
                We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse all categories.
              </p>
              <Button onClick={() => setSearchQuery("")} variant="outline" className="touch-manipulation">
                Clear Search
              </Button>
            </div>
          )}

          <section className="mt-12 sm:mt-16 md:mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                    Still Have Questions?
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-2xl">
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
                      className="text-sm sm:text-base bg-background/50 backdrop-blur-sm w-full sm:w-auto touch-manipulation"
                    >
                      <Link href="/calculator">Get Free Consultation</Link>
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
