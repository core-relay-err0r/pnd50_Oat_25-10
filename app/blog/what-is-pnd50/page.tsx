import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, FileText, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema, AuthorSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "What is PND50 (ภ.ง.ด.50)? Complete Guide for Foreign Businesses | PND50 Blog",
  description:
    "Learn about Thailand's PND50 (ภ.ง.ด.50) annual corporate income tax return – who must file it, when it's due, penalties for late filing, and step-by-step instructions including e-filing for foreign business owners in Thailand.",
  keywords: [
    "PND50",
    "ภ.ง.ด.50",
    "P.N.D.50",
    "Thailand corporate tax",
    "annual tax return Thailand",
    "corporate income tax Thailand",
    "PND50 filing deadline",
    "PND50 e-filing",
    "Thailand tax form",
    "foreign business Thailand tax",
    "PND50 penalties",
    "ภาษีนิติบุคคล",
    "ยื่นภาษีประจำปี",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/what-is-pnd50`,
  },
  openGraph: {
    title: "What is PND50 (ภ.ง.ด.50)? Complete Guide for Foreign Businesses",
    description:
      "Learn about Thailand's PND50 annual corporate income tax return – who must file, deadlines, penalties, and step-by-step filing instructions.",
    url: `${siteConfig.url}/blog/what-is-pnd50`,
    type: "article",
    publishedTime: "2025-06-22T00:00:00.000Z",
    authors: ["PND50 Team"],
    images: [{ url: `${siteConfig.url}/og-blog.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is PND50 (ภ.ง.ด.50)? Complete Guide",
    description: "Learn about Thailand's PND50 annual corporate income tax return for foreign businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: "What is PND50 (ภ.ง.ด.50)?",
    answer:
      "PND50 is Thailand's annual Corporate Income Tax return form for companies and juristic partnerships. It's used to report a company's net profit for the entire fiscal year and calculate the corporate income tax owed based on audited financial statements.",
  },
  {
    question: "When is the PND50 filing deadline?",
    answer:
      "PND50 is due within 150 days after the end of the company's accounting period. For calendar year companies (Jan-Dec), this means May 30 of the following year. E-filing provides an extra 8 days extension.",
  },
  {
    question: "Who must file PND50 in Thailand?",
    answer:
      "All companies doing business in Thailand must file PND50, including Thai limited companies, foreign companies with a presence in Thailand, joint ventures, and even companies with no profits or operating at a loss.",
  },
  {
    question: "What are the penalties for late PND50 filing?",
    answer:
      "Late filing incurs a fine up to 2,000 THB plus a surcharge of 1.5% per month on any outstanding tax amount. The surcharge is capped at 20% of the tax due.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  { name: "What is PND50", url: `${siteConfig.url}/blog/what-is-pnd50` },
]

export default function WhatIsPND50Page() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AuthorSchema
        name="PND50 Editorial Team"
        description="Expert tax consultants specializing in Thai corporate tax compliance for foreign businesses"
        credentials={["Licensed Thai Tax Advisors"]}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50/30">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-sky-600 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-sky-600 transition-colors">
                  Blog
                </Link>
                <span>/</span>
                <span className="text-foreground">What is PND50</span>
              </nav>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                    Tax Guide
                  </span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">PND50</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  What is PND50 (ภ.ง.ด.50)? <span className="text-sky-600">Complete Guide for Foreign Businesses</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Learn about Thailand's PND50 annual corporate income tax return – who must file it, when it's due,
                  penalties for late filing, and step-by-step instructions including e-filing.
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>PND50 Team</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>June 22, 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg prose-slate max-w-none">
                {/* Introduction */}
                <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-8 not-prose">
                  <p className="text-slate-700 leading-relaxed">
                    Operating a business in Thailand means navigating the country's tax filing requirements. One of the
                    most important is the <strong>PND50 (ภ.ง.ด.50)</strong> form – the annual corporate income tax
                    return. This guide explains what PND50 is, who needs to file it, key deadlines and penalties, and
                    how to file both on paper and electronically.
                  </p>
                </div>

                {/* What is PND50 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <FileText className="w-7 h-7 text-sky-600" />
                  What is PND50 (ภ.ง.ด.50)?
                </h2>

                <p>
                  <strong>PND50</strong> is Thailand's annual Corporate Income Tax return form for companies and
                  juristic partnerships. In Thai, it's known as <strong>ภ.ง.ด.50</strong> (Por Ngor Dor 50). This form
                  is used to report a company's net profit for the entire fiscal year and calculate the corporate income
                  tax owed.
                </p>

                <p>
                  The calculation starts from the company's audited financial statements (profit and loss statement and
                  balance sheet) for the year, with adjustments made according to Thai tax laws (certain expenses may be
                  non-deductible, etc.). Essentially, PND50 represents the <strong>final tax reconciliation</strong> for
                  the year based on actual performance.
                </p>

                <Card className="my-8 border-sky-200 bg-sky-50/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-sky-800 mb-2">Key Point</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      PND50 must reflect the actual business performance of the full year, as confirmed by an auditor's
                      report. It captures total revenue, allowable expenses, and net profit after adjustments. The form,
                      along with supporting documents, lets the Revenue Department determine the final corporate income
                      tax liability for that year.
                    </p>
                  </CardContent>
                </Card>

                {/* Who Needs to File */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">Who Needs to File PND50?</h2>

                <p>
                  All companies doing business in Thailand are required to file a PND50 annual tax return, whether they
                  are Thai or foreign-owned. This includes:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Thai juristic entities</strong> – e.g. limited companies, public companies, limited
                      partnerships, registered ordinary partnerships.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Foreign companies with a presence in Thailand</strong> – e.g. foreign companies registered
                      abroad but carrying on business in Thailand via branch, representative office, agent, or other
                      means.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Joint ventures</strong> or other juristic persons considered taxable under Thai law.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Even companies with no profits or operating at a loss</strong> – they still must file
                      PND50 to report their financial results.
                    </span>
                  </li>
                </ul>

                <Card className="my-8 border-amber-200 bg-amber-50/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-amber-800 mb-2">Example</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      If you're a foreign entrepreneur who set up a Thai Limited Company, your company will file PND50
                      each year. If you operate in Thailand as a branch of a foreign corporation, that branch must also
                      file PND50 for its Thai operations.
                    </p>
                  </CardContent>
                </Card>

                {/* Deadlines */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Calendar className="w-7 h-7 text-sky-600" />
                  Deadlines for Filing PND50
                </h2>

                <p>
                  Thailand's Revenue Department enforces strict deadlines for corporate tax filings.{" "}
                  <strong>PND50 is due within 150 days after the end of the company's accounting period.</strong>
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <Card className="border-sky-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-sky-800 mb-2">Paper Filing</h4>
                      <p className="text-3xl font-bold text-sky-600 mb-2">150 days</p>
                      <p className="text-sm text-slate-600">
                        After fiscal year-end (e.g. May 30 for calendar-year companies)
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-teal-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-teal-800 mb-2">Online Filing (E-Filing)</h4>
                      <p className="text-3xl font-bold text-teal-600 mb-2">158 days</p>
                      <p className="text-sm text-slate-600">
                        8 extra days after paper deadline (e.g. June 7 for calendar-year companies)
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="my-8 border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Important: No Extensions</h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          Unlike some jurisdictions, Thailand's Revenue Department normally does not allow any extension
                          beyond these statutory deadlines. Plan ahead to meet the deadline!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Penalties */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-red-600" />
                  Penalties for Late Filing
                </h2>

                <p>
                  Thai law imposes both fines and interest surcharges on late corporate tax returns. If you miss the
                  PND50 deadline, even by a day, your company immediately becomes liable to penalties:
                </p>

                <div className="space-y-4 my-8">
                  <Card className="border-red-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-red-800 mb-2">Late Filing Fine</h4>
                      <p className="text-2xl font-bold text-red-600 mb-2">Up to 2,000 THB</p>
                      <p className="text-sm text-slate-600">
                        1,000 THB if delay is within 7 days, 2,000 THB if beyond 7 days
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-orange-800 mb-2">Surcharge on Tax Due</h4>
                      <p className="text-2xl font-bold text-orange-600 mb-2">1.5% per month</p>
                      <p className="text-sm text-slate-600">
                        Monthly interest on unpaid tax, capped at 20% of the tax due
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* How to File */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  How to File PND50: Step-by-Step Guide
                </h2>

                <div className="space-y-6 my-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Prepare Annual Financial Statements</h4>
                      <p className="text-muted-foreground">
                        Ensure your company's accounts are closed and audited by a licensed Thai auditor. Calculate net
                        taxable profit by adjusting accounting profit per Thai tax rules.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Obtain the PND50 Form</h4>
                      <p className="text-muted-foreground">
                        Get the official form from the Revenue Department website or your accounting firm. For e-filing,
                        use the online form on the e-filing portal.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Complete the PND50 Return</h4>
                      <p className="text-muted-foreground">
                        Fill in total revenue, expenses, net profit, and calculated tax. Attach audited financial
                        statements and supporting schedules.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Submit the Return</h4>
                      <p className="text-muted-foreground">
                        Paper: Submit at your local Revenue Department office. Online: Use the RD e-Filing portal
                        (efiling.rd.go.th) for convenient electronic submission.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Pay the Tax Due</h4>
                      <p className="text-muted-foreground">
                        Pay via bank transfer, credit/debit card, or QR code payment. The standard CIT rate is 20% of
                        net profit (SMEs may have lower rates).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Obtain Proof of Submission</h4>
                      <p className="text-muted-foreground">
                        Keep the stamped copy (paper) or electronic receipt/reference number (online) for your records.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Official Resources */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">Official Resources</h2>

                <div className="grid gap-4 my-8">
                  <a
                    href="https://www.rd.go.th/english/6044.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <Card className="border-slate-200 hover:border-sky-300 hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">Revenue Department - Corporate Income Tax</h4>
                          <p className="text-sm text-muted-foreground">Official English-language overview</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-sky-600" />
                      </CardContent>
                    </Card>
                  </a>
                  <a href="https://efiling.rd.go.th" target="_blank" rel="noopener noreferrer" className="no-underline">
                    <Card className="border-slate-200 hover:border-sky-300 hover:shadow-md transition-all">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">RD e-Filing Portal</h4>
                          <p className="text-sm text-muted-foreground">Online tax filing system</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-sky-600" />
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with PND50 Filing?</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Our expert accountants can handle your PND50 (ภ.ง.ด.50) tax filing and ensure full compliance with
                  Thai tax regulations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="font-semibold">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services/tax">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-semibold border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      Tax Services
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mt-16">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link href="/blog/pnd50-vs-pnd51" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-slate-200 group-hover:border-sky-300">
                      <CardContent className="p-6">
                        <span className="text-xs font-semibold text-sky-600 mb-2 block">Tax Forms</span>
                        <h4 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors mb-2">
                          PND50 vs PND51: What's the Difference?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Understand the key differences between Thailand's annual and mid-year corporate tax returns.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/blog/thailand-tax-guide" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-slate-200 group-hover:border-sky-300">
                      <CardContent className="p-6">
                        <span className="text-xs font-semibold text-teal-600 mb-2 block">Comprehensive Guide</span>
                        <h4 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors mb-2">
                          Tax Guide for Foreign Companies in Thailand
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Complete overview of CIT, VAT, withholding taxes, and social security for foreign businesses.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
