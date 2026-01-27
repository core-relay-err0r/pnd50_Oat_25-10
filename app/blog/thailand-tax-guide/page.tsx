import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, FileText, Building2, Receipt, Users, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/seo-config"
import { FAQSchema, BreadcrumbSchema, AuthorSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Tax Guide for Foreign Companies in Thailand | PND50 Blog",
  description:
    "Comprehensive tax guide for foreign companies in Thailand – covering business registration, corporate income tax (PND50/PND51), VAT, withholding taxes, and social security. Learn about tax rates and compliance.",
  keywords: [
    "Thailand tax guide",
    "foreign company Thailand tax",
    "PND50",
    "ภ.ง.ด.50",
    "Thailand corporate income tax",
    "Thailand VAT",
    "withholding tax Thailand",
    "social security Thailand",
    "Thailand business tax",
    "CIT Thailand",
    "foreign business Thailand",
    "Thailand tax compliance",
    "ภาษีนิติบุคคล",
    "ภาษีมูลค่าเพิ่ม",
    "ประกันสังคม",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/thailand-tax-guide`,
  },
  openGraph: {
    title: "Tax Guide for Foreign Companies in Thailand",
    description:
      "Complete overview of CIT, VAT, withholding taxes, and social security for foreign businesses operating in Thailand.",
    url: `${siteConfig.url}/blog/thailand-tax-guide`,
    type: "article",
    publishedTime: "2025-06-22T00:00:00.000Z",
    authors: ["PND50 Team"],
    images: [{ url: `${siteConfig.url}/og-blog.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Guide for Foreign Companies in Thailand",
    description: "Complete tax compliance guide for foreign businesses in Thailand.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    question: "What is the corporate tax rate in Thailand?",
    answer:
      "The standard corporate income tax rate in Thailand is 20% of net profit. SMEs with paid-up capital not exceeding 5 million THB and annual revenue not over 30 million THB enjoy reduced rates: 0% on first 300,000 THB, 15% on 300,001-3,000,000 THB.",
  },
  {
    question: "When do I need to register for VAT in Thailand?",
    answer:
      "If your business's annual turnover exceeds THB 1.8 million, you are required to register for VAT. You should apply within 30 days of reaching this threshold.",
  },
  {
    question: "What is withholding tax in Thailand?",
    answer:
      "Withholding tax (WHT) requires companies to withhold a portion of payments (typically 3-15% depending on type) and remit it to the government. Common rates: 3% on services, 5% on rent, 10% on dividends.",
  },
  {
    question: "What are the social security contributions in Thailand?",
    answer:
      "Both employers and employees must contribute 5% of salary to the Social Security Fund, capped at 750 THB per month each (for salaries at 15,000 THB or above).",
  },
]

const breadcrumbItems = [
  { name: "Home", url: siteConfig.url },
  { name: "Blog", url: `${siteConfig.url}/blog` },
  { name: "Thailand Tax Guide", url: `${siteConfig.url}/blog/thailand-tax-guide` },
]

export default function ThailandTaxGuidePage() {
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
                <span className="text-foreground">Thailand Tax Guide</span>
              </nav>

              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    Comprehensive Guide
                  </span>
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-semibold rounded-full">
                    Foreign Business
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Tax Guide for <span className="text-sky-600">Foreign Companies in Thailand</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  A comprehensive guide covering business registration, corporate income tax (PND50/PND51), VAT,
                  withholding taxes, and social security for foreign businesses operating in Thailand.
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
                    <span>15 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-sky-200 bg-sky-50/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">In This Guide</h3>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <a href="#registration" className="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                      <Building2 className="w-4 h-4" /> Business Registration
                    </a>
                    <a href="#cit" className="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                      <FileText className="w-4 h-4" /> Corporate Income Tax (CIT)
                    </a>
                    <a href="#vat" className="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                      <Percent className="w-4 h-4" /> Value Added Tax (VAT)
                    </a>
                    <a href="#wht" className="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                      <Receipt className="w-4 h-4" /> Withholding Taxes
                    </a>
                    <a href="#sso" className="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                      <Users className="w-4 h-4" /> Social Security
                    </a>
                  </div>
                </CardContent>
              </Card>
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
                    Navigating Thailand's corporate compliance landscape requires interaction with agencies like the
                    Revenue Department and Department of Business Development. This guide provides foreign business
                    owners with an overview of Thailand's tax system and compliance requirements.
                  </p>
                </div>

                {/* Business Registration */}
                <h2
                  id="registration"
                  className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3"
                >
                  <Building2 className="w-7 h-7 text-sky-600" />
                  Business Registration & Tax Obligations
                </h2>

                <p>
                  Once you have registered your company with the Department of Business Development (DBD), you must also
                  register for tax purposes. Every juristic company receives a{" "}
                  <strong>Tax Identification Number (TIN)</strong> from the Thai Revenue Department.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Initial Compliance Checklist</h3>

                <div className="space-y-4 my-6 not-prose">
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Company Registration</h4>
                      <p className="text-sm text-muted-foreground">
                        Incorporate the entity (e.g. Limited Company) with DBD.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Tax ID and VAT Registration</h4>
                      <p className="text-sm text-muted-foreground">
                        Register with Revenue Department. If revenue exceeds THB 1.8M, register for VAT.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Social Security Registration</h4>
                      <p className="text-sm text-muted-foreground">
                        Register with SSO within 30 days of hiring first employee.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Accounting Setup</h4>
                      <p className="text-sm text-muted-foreground">
                        Arrange for accounting systems and hire a certified accountant/auditor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corporate Income Tax */}
                <h2
                  id="cit"
                  className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3"
                >
                  <FileText className="w-7 h-7 text-sky-600" />
                  Corporate Income Tax (CIT)
                </h2>

                <p>
                  Corporate Income Tax is a direct tax on a company's net profits. The{" "}
                  <strong>standard CIT rate in Thailand is 20%</strong> of net profit.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">SME Tax Rates</h3>

                <p>
                  Companies with paid-up capital ≤5 million THB and annual revenue ≤30 million THB qualify as SMEs and
                  enjoy reduced rates:
                </p>

                <div className="overflow-x-auto my-6 not-prose">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-3 text-left">Net Profit</th>
                        <th className="border border-slate-200 p-3 text-left">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-3">First 300,000 THB</td>
                        <td className="border border-slate-200 p-3 font-semibold text-green-600">0% (exempt)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">300,001 – 3,000,000 THB</td>
                        <td className="border border-slate-200 p-3 font-semibold text-amber-600">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3">Above 3,000,000 THB</td>
                        <td className="border border-slate-200 p-3 font-semibold text-sky-600">20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Filing Requirements: PND50 & PND51</h3>

                <p>Companies must file CIT returns twice a year:</p>

                <ul>
                  <li>
                    <strong>PND51 (half-year)</strong> – interim return with estimated tax, due mid-year
                  </li>
                  <li>
                    <strong>PND50 (annual)</strong> – final return with actual profit, due within 150 days of year-end
                  </li>
                </ul>

                {/* VAT */}
                <h2
                  id="vat"
                  className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3"
                >
                  <Percent className="w-7 h-7 text-teal-600" />
                  Value Added Tax (VAT)
                </h2>

                <p>
                  VAT is Thailand's consumption tax, currently at a rate of <strong>7%</strong> on the sale of goods and
                  services.
                </p>

                <Card className="my-6 border-teal-200 bg-teal-50/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-teal-800 mb-2">VAT Registration Threshold</h4>
                    <p className="text-3xl font-bold text-teal-600 mb-2">THB 1.8 Million</p>
                    <p className="text-sm text-slate-600">
                      If annual turnover exceeds this amount, VAT registration is mandatory within 30 days.
                    </p>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold mt-8 mb-4">VAT Filing (Form PP30)</h3>

                <ul>
                  <li>
                    Filed <strong>monthly</strong>
                  </li>
                  <li>Paper deadline: 15th of following month</li>
                  <li>Online deadline: 23rd of following month</li>
                  <li>Exports are zero-rated (0% VAT)</li>
                </ul>

                {/* Withholding Tax */}
                <h2
                  id="wht"
                  className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3"
                >
                  <Receipt className="w-7 h-7 text-amber-600" />
                  Withholding Taxes (WHT)
                </h2>

                <p>
                  Thailand has an extensive withholding tax system. When your company makes certain payments, you must
                  withhold a portion and remit it to the government.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Common WHT Rates</h3>

                <div className="overflow-x-auto my-6 not-prose">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-3 text-left">Payment Type</th>
                        <th className="border border-slate-200 p-3 text-left">WHT Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-3">Services (to companies)</td>
                        <td className="border border-slate-200 p-3 font-semibold">3%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">Rent</td>
                        <td className="border border-slate-200 p-3 font-semibold">5%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3">Dividends</td>
                        <td className="border border-slate-200 p-3 font-semibold">10%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">Interest (to companies)</td>
                        <td className="border border-slate-200 p-3 font-semibold">1%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3">Interest (to individuals/overseas)</td>
                        <td className="border border-slate-200 p-3 font-semibold">15%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">Royalties (to Thai company)</td>
                        <td className="border border-slate-200 p-3 font-semibold">3%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Monthly WHT Returns</h3>

                <ul>
                  <li>
                    <strong>PND1</strong> – Withholding from employee salaries
                  </li>
                  <li>
                    <strong>PND3</strong> – Withholding from payments to Thai individuals
                  </li>
                  <li>
                    <strong>PND53</strong> – Withholding from payments to Thai companies
                  </li>
                  <li>
                    <strong>PND54</strong> – Withholding on payments to foreign companies
                  </li>
                </ul>

                <p>Deadline: 7th of following month (paper) or 15th (e-filing)</p>

                {/* Social Security */}
                <h2
                  id="sso"
                  className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3"
                >
                  <Users className="w-7 h-7 text-purple-600" />
                  Social Security & Payroll Taxes
                </h2>

                <p>
                  If your company hires employees in Thailand, you must comply with Social Security Fund (SSF)
                  contributions and payroll withholding for personal income tax.
                </p>

                <Card className="my-6 border-purple-200 bg-purple-50/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-purple-800 mb-4">Social Security Contributions</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Employer Contribution</p>
                        <p className="text-2xl font-bold text-purple-600">5%</p>
                        <p className="text-xs text-slate-500">Max 750 THB/month</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Employee Contribution</p>
                        <p className="text-2xl font-bold text-purple-600">5%</p>
                        <p className="text-xs text-slate-500">Max 750 THB/month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h3 className="text-xl font-semibold mt-8 mb-4">Key Requirements</h3>

                <ul>
                  <li>
                    Register with SSO within <strong>30 days</strong> of hiring first employee
                  </li>
                  <li>
                    Monthly submission by the <strong>15th of following month</strong>
                  </li>
                  <li>
                    Salary cap: <strong>15,000 THB</strong> per month for contribution calculation
                  </li>
                </ul>
              </article>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-sky-500 to-teal-500 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with Thai Tax Compliance?</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Our expert team specializes in helping foreign businesses navigate Thailand's tax system. From PND50
                  filing to VAT registration, we've got you covered.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="font-semibold">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="font-semibold border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      Our Services
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
                  <Link href="/blog/pnd50-vs-pnd51" className="group">
                    <Card className="h-full hover:shadow-lg transition-all border-slate-200 group-hover:border-sky-300">
                      <CardContent className="p-6">
                        <span className="text-xs font-semibold text-purple-600 mb-2 block">Comparison</span>
                        <h4 className="font-semibold text-foreground group-hover:text-sky-600 transition-colors mb-2">
                          PND50 vs PND51: What's the Difference?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Understand the key differences between annual and mid-year corporate tax returns.
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
