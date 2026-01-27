import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, FileText, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema, AuthorSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "PND50 vs PND51: Understanding Thailand's Corporate Tax Forms | PND50 Blog",
  description:
    "Confused about Thailand's corporate tax forms? Learn the difference between PND50 vs PND51 (ภ.ง.ด.50 vs ภ.ง.ด.51), including purposes, filing timelines, requirements, and common mistakes to avoid.",
  keywords: [
    "PND50 vs PND51",
    "ภ.ง.ด.50 vs ภ.ง.ด.51",
    "PND50",
    "PND51",
    "Thailand corporate tax forms",
    "annual tax return Thailand",
    "mid-year tax return Thailand",
    "PND50 PND51 difference",
    "corporate income tax Thailand",
    "Thailand tax filing",
    "ภาษีนิติบุคคล",
    "ภ.ง.ด.50",
    "ภ.ง.ด.51",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/pnd50-vs-pnd51`,
  },
  openGraph: {
    title: "PND50 vs PND51: Understanding Thailand's Corporate Tax Forms",
    description: "Learn the difference between PND50 and PND51 - Thailand's annual and mid-year corporate tax returns.",
    url: `${siteConfig.url}/blog/pnd50-vs-pnd51`,
    type: "article",
    publishedTime: "2025-06-22T00:00:00.000Z",
    authors: ["PND50 Team"],
    images: [{ url: `${siteConfig.url}/og-blog.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PND50 vs PND51: Thailand Corporate Tax Forms",
    description: "Understand the difference between Thailand's annual and mid-year corporate tax returns.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: "What is the main difference between PND50 and PND51?",
    answer:
      "PND50 is the annual corporate tax return filed after year-end based on actual audited profits, while PND51 is a mid-year return filed halfway through the year based on estimated annual profits as a prepayment toward final tax.",
  },
  {
    question: "When is PND51 due?",
    answer:
      "PND51 is due within 2 months after the end of the first six months of the accounting period. For calendar year companies (Jan-Dec), this means August 31 (or September 8 if e-filing).",
  },
  {
    question: "Do I need audited statements for PND51?",
    answer:
      "No, PND51 does not require audited financial statements. It's filed based on management accounts or estimates since mid-year financials are usually unaudited.",
  },
  {
    question: "What happens if I underestimate profit on PND51?",
    answer:
      "If your estimated profit in PND51 is more than 25% lower than actual full-year profit, you'll face an additional 20% penalty on the shortfall tax amount.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  { name: "PND50 vs PND51", url: `${siteConfig.url}/blog/pnd50-vs-pnd51` },
]

export default function PND50vsPND51Page() {
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
                <span className="text-foreground">PND50 vs PND51</span>
              </nav>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                    Tax Forms
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    Comparison
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  PND50 vs PND51: <span className="text-sky-600">Understanding Thailand's Corporate Tax Forms</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Confused about Thailand's corporate tax forms? Learn the difference between PND50 (ภ.ง.ด.50) and PND51
                  (ภ.ง.ด.51), including their purposes, filing timelines, and common mistakes to avoid.
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
                    <span>10 min read</span>
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
                    Companies in Thailand need to file two key corporate income tax forms each year:{" "}
                    <strong>PND50 (ภ.ง.ด.50)</strong> and <strong>PND51 (ภ.ง.ด.51)</strong>. These forms serve different
                    purposes – one is for the annual tax return and the other for a mid-year tax prepayment. Confusing
                    them or missing one can lead to penalties.
                  </p>
                </div>

                {/* What is PND50 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <FileText className="w-7 h-7 text-sky-600" />
                  What is PND50 (ภ.ง.ด.50)?
                </h2>

                <p>
                  <strong>PND50</strong> is the <strong>annual corporate income tax return</strong> form in Thailand. It
                  reports the actual net profit for the entire fiscal year and the final tax liability based on that
                  profit. Key points:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose:</strong> Calculate and report corporate income tax on actual full-year profits.
                      It's a final reconciliation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Deadline:</strong> 150 days after fiscal year end (with 8-day extension if filing online).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Requirements:</strong> Audited financial statements must be attached.
                    </span>
                  </li>
                </ul>

                <p>
                  Think of PND50 as <strong>"the annual tax report card"</strong> for your business's profits.
                </p>

                {/* What is PND51 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <FileText className="w-7 h-7 text-teal-600" />
                  What is PND51 (ภ.ง.ด.51)?
                </h2>

                <p>
                  <strong>PND51</strong> is the <strong>mid-year corporate income tax return</strong>. Its purpose is to
                  collect an advance tax payment halfway through the fiscal year. Key points:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Purpose:</strong> Pay half-year or interim corporate income tax based on estimated annual
                      profit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Deadline:</strong> 2 months after the end of first six months (e.g., August 31 for Jan-Dec
                      companies).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Requirements:</strong> No audited statements required – based on estimates or management
                      accounts.
                    </span>
                  </li>
                </ul>

                <p>
                  Think of PND51 as a <strong>"half-time tax payment"</strong> – you assess how your business is doing
                  mid-year and pay a portion in advance.
                </p>

                {/* Comparison Table */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                  Key Differences: PND50 vs PND51
                </h2>

                <div className="overflow-x-auto my-8 not-prose">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-3 text-left font-semibold">Aspect</th>
                        <th className="border border-slate-200 p-3 text-left font-semibold text-sky-700">
                          PND50 (Annual)
                        </th>
                        <th className="border border-slate-200 p-3 text-left font-semibold text-teal-700">
                          PND51 (Mid-Year)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-3 font-medium">Purpose</td>
                        <td className="border border-slate-200 p-3">
                          Annual return on <strong>actual</strong> net profit
                        </td>
                        <td className="border border-slate-200 p-3">
                          Interim return on <strong>estimated</strong> profit (prepayment)
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3 font-medium">Timing</td>
                        <td className="border border-slate-200 p-3">Within 150 days after year-end</td>
                        <td className="border border-slate-200 p-3">Within 2 months after first 6 months</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3 font-medium">Tax Basis</td>
                        <td className="border border-slate-200 p-3">Actual figures from audited statements</td>
                        <td className="border border-slate-200 p-3">Estimated figures (year not complete)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3 font-medium">Audit Required</td>
                        <td className="border border-slate-200 p-3">Yes – audited statements required</td>
                        <td className="border border-slate-200 p-3">No – based on management accounts</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3 font-medium">Payment</td>
                        <td className="border border-slate-200 p-3">Final tax liability for the year</td>
                        <td className="border border-slate-200 p-3">Prepaid tax (credited against PND50)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3 font-medium">Special Penalty</td>
                        <td className="border border-slate-200 p-3">Late filing fine + 1.5%/month interest</td>
                        <td className="border border-slate-200 p-3">Same + 20% penalty if estimate is {">"}25% off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Timeline */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <Calendar className="w-7 h-7 text-sky-600" />
                  Filing Timeline (Calendar Year Example)
                </h2>

                <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                  <Card className="border-teal-200 bg-teal-50/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <h4 className="font-semibold text-teal-800">PND51 - Mid-Year</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Period:</strong> January 1 – June 30
                      </p>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Deadline:</strong> August 31 (paper) / September 8 (e-filing)
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Action:</strong> Estimate annual profit, pay half the estimated tax
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200 bg-sky-50/30">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <h4 className="font-semibold text-sky-800">PND50 - Annual</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Period:</strong> January 1 – December 31
                      </p>
                      <p className="text-sm text-slate-600 mb-2">
                        <strong>Deadline:</strong> May 30 (paper) / June 7 (e-filing)
                      </p>
                      <p className="text-sm text-slate-600">
                        <strong>Action:</strong> File actual audited results, pay remaining tax
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Common Mistakes */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-amber-600" />
                  Common Mistakes to Avoid
                </h2>

                <div className="space-y-4 my-8 not-prose">
                  <Card className="border-red-200">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-red-800 mb-2">Mistake 1: Missing the PND51 filing</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Some companies only focus on the annual return and forget the mid-year filing.
                      </p>
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Mark both PND51 and PND50 deadlines on your compliance calendar.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-red-800 mb-2">
                        Mistake 2: Underestimating income on PND51 by over 25%
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        If actual profit is much higher than estimated, you'll get hit with a 20% penalty.
                      </p>
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Make a realistic estimate. If anything, slightly overestimate to be
                        safe.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-red-800 mb-2">
                        Mistake 3: Not attaching financial statements with PND50
                      </h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Submitting PND50 without audited accounts is considered incomplete.
                      </p>
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always attach audited financial statements and ensure proper
                        signatures.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-red-800 mb-2">Mistake 4: Assuming no tax = no need to file</h4>
                      <p className="text-sm text-slate-600 mb-2">
                        Even if your company has zero profit or a loss, you must still file.
                      </p>
                      <p className="text-sm text-green-700">
                        <strong>Solution:</strong> Always file returns on time, even if showing zero tax due.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with PND50 or PND51?</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Our expert accountants can handle both your mid-year and annual tax filings, ensuring full compliance
                  with Thai tax regulations.
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
                  <Link href="/blog/what-is-pnd50" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-slate-200 group-hover:border-sky-300">
                      <CardContent className="p-6">
                        <span className="text-xs font-semibold text-sky-600 mb-2 block">Tax Guide</span>
                        <h4 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors mb-2">
                          What is PND50 (ภ.ง.ด.50)? Complete Guide
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Everything you need to know about Thailand's annual corporate income tax return.
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
                          Complete overview of CIT, VAT, withholding taxes, and social security.
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
