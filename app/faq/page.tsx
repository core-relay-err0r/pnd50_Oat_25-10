import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, Flame, MessageCircle, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Accounting & Tax | PND50",
  description:
    "Real questions from clients about Thai accounting, tax compliance, and business setup. Get clear answers in simple English.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-border overflow-hidden">
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
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Real Questions from Clients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Clear answers about accounting, tax, and business setup in Thailand — explained in simple English, based
              on real client questions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Accounting Questions */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Accounting Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="accounting-1"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q1. Why do I have to record accounting in Thai Baht when all transactions are in foreign currencies
                    like USD or CNY?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> All companies registered in Thailand under Thai law
                    must prepare financial statements in accordance with Thai Accounting Standards and policies, which
                    require using the Thai Baht (THB) as the presentation currency. Even if all your transactions are in
                    foreign currencies, your official financial reports must be presented in THB.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Section 11, Accounting Act B.E. 2543 (2000); Thai Accounting Standard
                      (TAS) No.21 "The Effects of Changes in Foreign Exchange Rates"
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="accounting-2"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q2. Why does my company have a "Gain or Loss on Exchange Rate" account?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Because your business uses foreign currencies for
                    transactions, every time these are converted to Thai Baht for accounting, the exchange rate may
                    differ from the transaction date to the payment date. This difference creates a foreign exchange
                    gain or loss, which reflects the true value of your foreign-currency transactions.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Thai Accounting Standard (TAS) No.21 "The Effects of Changes in
                      Foreign Exchange Rates"
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="accounting-3"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q3. Why must we revalue exchange rates at year-end using the rate from the Thai Revenue Department?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> At the end of each accounting year, companies must
                    adjust the value of all foreign-currency items (such as receivables or cash) to reflect the current
                    exchange rate. The Thai Revenue Department publishes official exchange rates each year, which must
                    be used for consistency and tax compliance.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Thai Accounting Standard (TAS) No.21; Revenue Department Announcement
                      on Exchange Rates for Tax Purposes
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Tax Questions */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tax Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="tax-1"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q4. Why must exchange gains or losses be included in taxable income or expenses?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Foreign exchange gains or losses are part of real
                    business results and must be treated as taxable income or deductible expenses.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Section 65 Ter (4), Revenue Code of Thailand; Departmental Instruction
                      Paw.0506/19642 (2001)
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="tax-2"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q5. My company sells goods or provides services outside Thailand. Do we need to register for VAT if
                    revenue exceeds THB 1.8 million?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> If all sales and services are performed and used
                    entirely outside Thailand, your business is not subject to Thai VAT.
                  </p>
                  <p>You don't need to register for VAT unless you wish to do so voluntarily.</p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Section 77/1 and Section 82/3, Revenue Code of Thailand
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="tax-3"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q6. After registering for VAT, do I still need to file form PP.30 if there's no income?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Yes. Once VAT-registered, you must file Form PP.30
                    every month — by the 15th of the following month — even if you have no income.
                  </p>
                  <p className="text-orange-600 font-medium">
                    Missing the deadline may lead to surcharges and penalties.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Section 83 and Section 90, Revenue Code of Thailand
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* General Questions */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">General Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="general-1"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q7. Why should we use monthly accounting and tax services with PND50?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Even if most transactions occur overseas and no
                    withholding tax applies, monthly accounting ensures:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Compliance with Thai accounting and tax law</li>
                    <li>No missed deadlines or penalties</li>
                    <li>Organized, audit-ready financial records</li>
                    <li>Ongoing support and expert advice</li>
                  </ul>
                  <p>
                    In short: Monthly accounting gives peace of mind — we keep your business accurate, compliant, and
                    stress-free.
                  </p>
                  <div className="bg-muted/50 border-l-4 border-primary rounded-r p-4">
                    <p className="text-sm">
                      <strong>Reference:</strong> Accounting Act B.E.2543; Thai Revenue Code filing requirements
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Corporate & Compliance Questions */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Corporate & Compliance Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="corporate-1"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q8. Can a foreigner be the sole director or shareholder of a Thai company?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Yes, in some cases. Foreigners can own 100% of a
                    company depending on the business type and Thailand's foreign business regulations.
                  </p>
                  <p>
                    Our Corporate Service team can review your structure and prepare all required registration
                    documents.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="corporate-2"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q9. How can I change company details, such as directors or address?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Any changes to company details — directors, address,
                    or shareholders — must be officially filed with the Department of Business Development (DBD).
                  </p>
                  <p>PND50's Corporate Service team handles all updates and filings on your behalf.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="corporate-3"
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Q10. Can my company open a corporate bank account in Thailand?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <strong className="text-foreground">A:</strong> Yes. Every registered company can open a corporate
                    bank account.
                  </p>
                  <p>
                    Requirements vary by bank, but as part of our Corporate Services, PND50 can guide you through the
                    process and help prepare the necessary documents.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* CTA Section */}
          <section className="mt-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Need More Help?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Still have questions about accounting, tax, or business setup in Thailand? Our team is ready to
                    guide you step by step — in simple English, with full transparency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="text-base">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                      <Link href="/calculator">Get a Free Consultation</Link>
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
