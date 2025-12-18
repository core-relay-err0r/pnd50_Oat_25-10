import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, CheckCircle, ArrowLeft } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Tax Filing & Compliance Services in Thailand | PND50",
  description:
    "Expert tax filing and compliance services in Thailand for foreign businesses. VAT, withholding tax, corporate income tax, and Revenue Department compliance. Full English support.",
  keywords: [
    "tax filing Thailand",
    "VAT Thailand foreign business",
    "corporate income tax Thailand",
    "withholding tax Thailand",
    "tax compliance Thailand",
    "PND50 tax filing",
    "PND51 tax filing",
    "Revenue Department Thailand",
    "expat business tax Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/tax`,
  },
  openGraph: {
    title: "Tax Filing & Compliance Services in Thailand | PND50",
    description: "Expert tax filing and compliance services in Thailand for foreign businesses.",
    url: `${siteConfig.url}/services/tax`,
    type: "website",
  },
}

const features = [
  "Monthly VAT filing (PP30)",
  "Withholding tax submissions (PND1, PND3, PND53)",
  "Corporate income tax (PND50, PND51)",
  "Revenue Department compliance",
  "Tax planning and optimization",
  "English-language tax advisory",
]

const faqs = [
  {
    question: "What taxes does a company pay in Thailand?",
    answer:
      "Companies in Thailand typically pay Corporate Income Tax (20%), VAT (7%), and Withholding Tax on certain payments. We handle all filings to ensure full compliance with Thai tax law.",
  },
  {
    question: "When is corporate tax due in Thailand?",
    answer:
      "Corporate income tax (PND50) is due within 150 days after the fiscal year end. Half-year tax (PND51) is due within 2 months after the first 6 months. We track all deadlines for you.",
  },
  {
    question: "Can you help reduce my tax burden legally in Thailand?",
    answer:
      "Yes, we provide tax planning advice to help optimize your tax position within Thai law. This includes BOI incentives, expense deductions, and proper structuring.",
  },
]

export default function TaxPage() {
  return (
    <>
      <ServiceSchema
        name="Tax Filing & Compliance Services in Thailand"
        description="Expert tax filing and compliance services for foreign businesses operating in Thailand."
        url="/services/tax"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Tax & Compliance", url: "/services/tax" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 pt-28 lg:pt-32">
          <Link href="/services" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Tax & Compliance in Thailand</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Complete tax filing and compliance services for foreign-owned businesses in Thailand. We ensure your company
            meets all Thai Revenue Department requirements with timely, accurate submissions.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">What We Offer</h2>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 text-sky-100">
              Schedule a free consultation to discuss your tax compliance needs in Thailand.
            </p>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-sky-50 transition-colors group"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
