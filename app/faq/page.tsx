"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Search,
  HelpCircle,
  ArrowRight,
  X,
  Building2,
  Calculator,
  FileText,
  Users,
  Scale,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import dynamic from "next/dynamic"
import { LandingFooter } from "@/components/landing-footer"

const AnimatedGridBackground = dynamic(
  () => import("@/components/ui/animated-grid-background").then((mod) => mod.AnimatedGridBackground),
  { ssr: false },
)

const faqCategories = [
  {
    id: "company-registration",
    name: "Company Registration",
    icon: Building2,
    description: "Questions about setting up your business in Thailand",
  },
  {
    id: "accounting",
    name: "Accounting & Bookkeeping",
    icon: Calculator,
    description: "Monthly bookkeeping and financial reporting",
  },
  {
    id: "tax",
    name: "Tax & Compliance",
    icon: FileText,
    description: "Tax filing, VAT, and regulatory compliance",
  },
  {
    id: "payroll",
    name: "Payroll & HR",
    icon: Users,
    description: "Employee management and payroll services",
  },
  {
    id: "legal",
    name: "Legal & Advisory",
    icon: Scale,
    description: "Legal consultation and business advisory",
  },
  {
    id: "general",
    name: "General Questions",
    icon: Briefcase,
    description: "Common questions about our services",
  },
]

const faqData = [
  {
    category: "company-registration",
    questions: [
      {
        q: "What types of companies can foreigners register in Thailand?",
        a: "Foreigners can register several types of companies in Thailand, including Thai Limited Company (most common), Branch Office, Representative Office, and BOI-promoted companies. The Thai Limited Company is most popular as it allows 49% foreign ownership without special licenses, or 100% foreign ownership with a Foreign Business License (FBL) or BOI promotion.",
      },
      {
        q: "How long does company registration take?",
        a: "Standard company registration takes 2-4 weeks. This includes name reservation (1-2 days), memorandum registration (3-5 days), statutory meeting, and final registration. With our expedited service, we can complete registration in as little as 7-10 business days for urgent cases.",
      },
      {
        q: "What is the minimum capital requirement?",
        a: "For a standard Thai Limited Company, the minimum registered capital is 5 THB per share with at least 3 shareholders. However, for foreign-majority owned companies or those requiring work permits, a minimum of 2 million THB registered capital per foreign employee is typically required.",
      },
      {
        q: "Can I be 100% foreign owned?",
        a: "Yes, 100% foreign ownership is possible through several routes: BOI promotion, Foreign Business License (FBL), Treaty of Amity (for US citizens), or operating in businesses not restricted under the Foreign Business Act. We can advise on the best structure for your specific situation.",
      },
    ],
  },
  {
    category: "accounting",
    questions: [
      {
        q: "What accounting standards does Thailand use?",
        a: "Thailand uses Thai Financial Reporting Standards (TFRS), which are based on International Financial Reporting Standards (IFRS). For SMEs, Thailand has simplified TFRS for NPAEs (Non-Publicly Accountable Entities) which most small to medium businesses can use.",
      },
      {
        q: "How often do I need to submit financial reports?",
        a: "Thai companies must submit annual audited financial statements within 5 months of their fiscal year end. Monthly VAT returns are due by the 15th of the following month. Corporate income tax is paid semi-annually (mid-year estimate) and annually.",
      },
      {
        q: "Do I need a Thai accountant?",
        a: "Yes, Thai law requires that company accounts be prepared by a registered Thai accountant (CPD). Your financial statements must also be audited by a licensed Thai auditor (CPA) annually. PND50 provides both services with bilingual reporting.",
      },
      {
        q: "What documents do I need to provide monthly?",
        a: "Typically we need: bank statements, sales invoices, purchase invoices, receipt vouchers, payment vouchers, and any loan or investment documents. We provide a secure upload portal and can integrate with your existing systems for automated data transfer.",
      },
    ],
  },
  {
    category: "tax",
    questions: [
      {
        q: "What is the corporate tax rate in Thailand?",
        a: "The standard corporate income tax rate is 20%. SMEs with paid-up capital up to 5 million THB and revenue up to 30 million THB can enjoy reduced rates: 0% on first 300,000 THB profit, 15% on 300,001-3,000,000 THB. BOI-promoted companies may receive tax holidays.",
      },
      {
        q: "When do I need to register for VAT?",
        a: "VAT registration is mandatory when annual revenue exceeds 1.8 million THB. You can also voluntarily register below this threshold. The standard VAT rate is 7%. Certain goods and services are zero-rated or exempt.",
      },
      {
        q: "What are the main tax filing deadlines?",
        a: "Key deadlines: Monthly VAT (PND 36) by 15th of following month, Withholding tax (PND 1, 3, 53) by 7th of following month, Half-year corporate tax (PND 51) within 2 months of mid-year, Annual corporate tax (PND 50) within 150 days of fiscal year end.",
      },
      {
        q: "Can you help with tax planning?",
        a: "Yes, we provide strategic tax planning including utilizing BOI incentives, transfer pricing compliance, double tax treaty benefits, R&D tax credits, and legitimate expense optimization. Our goal is legal tax efficiency while maintaining full compliance.",
      },
    ],
  },
  {
    category: "payroll",
    questions: [
      {
        q: "What are the mandatory employee contributions?",
        a: "Employers must contribute 5% of salary (capped at 750 THB/month) to Social Security, matching the employee contribution. A 1% Workmen's Compensation Fund contribution is also required. Total employer cost is approximately 6% of salary.",
      },
      {
        q: "How do I get work permits for foreign employees?",
        a: "Work permit applications require a registered company with minimum 2 million THB capital per foreign employee, a 4:1 Thai to foreign employee ratio, and proper documentation. Processing takes 2-4 weeks. We handle the complete process including Non-B visa coordination.",
      },
      {
        q: "What are the minimum wage requirements?",
        a: "Thailand's minimum wage varies by province, ranging from 328-354 THB per day (as of 2024). Bangkok and surrounding provinces have the highest rates. For foreign employees on work permits, minimum salary requirements are higher and vary by nationality and position.",
      },
      {
        q: "Can you handle payroll for remote/overseas employees?",
        a: "Yes, we can manage payroll for various employment structures including local employees, remote workers, and international contractors. We ensure proper tax treatment and compliance for each arrangement, including handling cross-border tax implications.",
      },
    ],
  },
  {
    category: "legal",
    questions: [
      {
        q: "Do you provide legal services?",
        a: "We provide business legal advisory services including contract review, corporate governance, regulatory compliance, and business structuring. For litigation or complex legal matters, we partner with licensed Thai law firms and can coordinate on your behalf.",
      },
      {
        q: "Can you help with business licenses and permits?",
        a: "Yes, we assist with various licenses including Factory License, FDA registration, Import/Export licenses, e-Commerce licenses, and industry-specific permits. We handle the application process and liaison with relevant government agencies.",
      },
      {
        q: "What about intellectual property protection?",
        a: "We can assist with trademark registration, patent applications, and copyright registration through the Department of Intellectual Property. We also advise on IP protection strategies and can help with enforcement coordination.",
      },
      {
        q: "Do you help with due diligence?",
        a: "Yes, we provide due diligence services for mergers, acquisitions, and investments including financial due diligence, tax review, legal compliance check, and operational assessment. This is particularly valuable for foreign investors entering the Thai market.",
      },
    ],
  },
  {
    category: "general",
    questions: [
      {
        q: "What languages do you support?",
        a: "Our team provides services in English, Thai, Chinese (Mandarin), and Russian. All our reports and communications can be provided in English with Thai official documents as required by law. We understand the importance of clear communication for foreign business owners.",
      },
      {
        q: "How do you charge for your services?",
        a: "We offer transparent, fixed-fee packages for most services. Company registration starts from 25,000 THB, monthly accounting from 5,000 THB, and payroll from 500 THB per employee. Custom quotes are available for complex requirements. No hidden fees.",
      },
      {
        q: "Can I switch from my current accountant?",
        a: "Yes, switching is straightforward. We'll coordinate with your current provider to obtain all necessary records, review your current compliance status, and ensure a smooth transition. We typically complete the handover within 2-4 weeks.",
      },
      {
        q: "Do you offer virtual office services?",
        a: "Yes, we provide registered office addresses in Bangkok that can be used for company registration, mail handling, and official correspondence. This is ideal for businesses that don't need physical office space but require a professional Thai address.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [filteredFAQs, setFilteredFAQs] = useState(faqData)
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

  useEffect(() => {
    let filtered = faqData

    if (activeCategory) {
      filtered = filtered.filter((cat) => cat.category === activeCategory)
    }

    if (searchQuery) {
      filtered = filtered
        .map((cat) => ({
          ...cat,
          questions: cat.questions.filter(
            (q) =>
              q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.a.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((cat) => cat.questions.length > 0)
    }

    setFilteredFAQs(filtered)
  }, [searchQuery, activeCategory])

  const totalQuestions = faqData.reduce((acc, cat) => acc + cat.questions.length, 0)

  return (
    <main className="min-h-screen">
      <section className="relative w-full min-h-screen flex flex-col bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800">
        <AnimatedGridBackground className="min-h-screen flex-1">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/40 rounded-full blur-3xl pointer-events-none"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.5s ease-out",
            }}
          />

          <div className="flex-1 w-full flex flex-col lg:scale-[0.85] lg:origin-top">
            {/* Hero Section - KEEPING SAME STRUCTURE but updating colors */}
            <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
                  ></Link>
                </motion.div>

                <div className="text-center max-w-3xl mx-auto">
                  <motion.div
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <HelpCircle className="w-4 h-4" />
                    {totalQuestions}+ Questions Answered
                  </motion.div>

                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Frequently Asked{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                      Questions
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-slate-300 leading-relaxed mb-8 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Find answers to common questions about doing business in Thailand. Can't find what you're looking
                    for? We're here to help.
                  </motion.p>

                  {/* Search Bar */}
                  <motion.div
                    className="relative max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                      type="text"
                      placeholder="Search for answers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-4 py-6 text-lg bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl focus:ring-2 focus:ring-primary"
                    />
                    {searchQuery && (
                      <motion.button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-slate-600 hover:bg-slate-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-4 h-4 text-white" />
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Category Filter */}
            <motion.section
              className="py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant={activeCategory === null ? "default" : "outline"}
                    onClick={() => setActiveCategory(null)}
                    className={`rounded-full ${activeCategory === null ? "" : "bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"}`}
                  >
                    All Categories
                  </Button>
                  {faqCategories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={activeCategory === cat.id ? "default" : "outline"}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`rounded-full ${activeCategory === cat.id ? "" : "bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700"}`}
                    >
                      <cat.icon className="w-4 h-4 mr-2" />
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* FAQ Content */}
            <section className="py-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {filteredFAQs.length > 0 ? (
                  <div className="space-y-8">
                    {filteredFAQs.map((category, catIndex) => {
                      const categoryInfo = faqCategories.find((c) => c.id === category.category)
                      return (
                        <motion.div
                          key={category.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * catIndex }}
                        >
                          {!activeCategory && (
                            <div className="flex items-center gap-3 mb-4">
                              {categoryInfo && (
                                <div className="p-2 rounded-lg bg-primary/10">
                                  <categoryInfo.icon className="w-5 h-5 text-primary" />
                                </div>
                              )}
                              <h2 className="text-xl font-semibold text-white">{categoryInfo?.name}</h2>
                            </div>
                          )}

                          <Accordion type="single" collapsible className="space-y-3">
                            {category.questions.map((faq, index) => (
                              <AccordionItem
                                key={index}
                                value={`${category.category}-${index}`}
                                className="bg-slate-800/50 border border-slate-700 rounded-xl px-6 overflow-hidden"
                              >
                                <AccordionTrigger className="text-left text-white hover:text-primary py-4 [&[data-state=open]]:text-primary">
                                  {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-300 pb-4 leading-relaxed">
                                  {faq.a}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </motion.div>
                      )
                    })}
                  </div>
                ) : (
                  <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                    <p className="text-slate-400 mb-6">We couldn't find any questions matching "{searchQuery}"</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory(null)
                      }}
                      className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700"
                    >
                      Clear Search
                    </Button>
                  </motion.div>
                )}
              </div>
            </section>

            {/* CTA Section */}
            <motion.section
              className="py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Our team is ready to help you with any questions about doing business in Thailand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:border-primary hover:bg-white/20 transition-all"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </motion.section>
          </div>

          <LandingFooter />
        </AnimatedGridBackground>
      </section>
    </main>
  )
}
