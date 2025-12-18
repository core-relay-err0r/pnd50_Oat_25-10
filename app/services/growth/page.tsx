import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, TrendingUp, CheckCircle, ArrowLeft } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Business Growth & Financial Planning in Thailand | PND50",
  description:
    "Strategic financial planning and business growth solutions in Thailand. Scale your foreign business with expert analysis, cost optimization, and performance insights.",
  keywords: [
    "business growth Thailand",
    "financial planning Thailand",
    "scale business Thailand",
    "foreign business expansion Thailand",
    "cost optimization Thailand",
    "financial analysis Thailand",
    "business performance Thailand",
    "expat business growth Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/growth`,
  },
  openGraph: {
    title: "Business Growth & Financial Planning in Thailand | PND50",
    description: "Strategic financial planning and business growth solutions for foreign companies in Thailand.",
    url: `${siteConfig.url}/services/growth`,
    type: "website",
  },
}

const features = [
  "Financial analysis and reporting",
  "Growth strategy development",
  "Cost optimization",
  "Performance metrics tracking",
  "Cash flow management",
  "Profitability analysis",
]

const faqs = [
  {
    question: "How can you help my business grow in Thailand?",
    answer:
      "We provide financial insights, identify cost savings, and help you make data-driven decisions. Our analysis helps foreign businesses optimize operations and increase profitability in Thailand.",
  },
  {
    question: "What financial reports will I receive?",
    answer:
      "We provide monthly management reports, cash flow analysis, profitability breakdowns, and custom KPI tracking tailored to your business goals in Thailand.",
  },
  {
    question: "Is this suitable for small businesses in Thailand?",
    answer:
      "Yes! Our growth solutions scale to businesses of all sizes. Even small foreign-owned companies benefit from proper financial planning and analysis.",
  },
]

export default function GrowthPage() {
  return (
    <>
      <ServiceSchema
        name="Business Growth & Financial Planning in Thailand"
        description="Strategic financial planning and business growth solutions for foreign companies in Thailand."
        url="/services/growth"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Business Growth", url: "/services/growth" },
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
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Business Growth in Thailand</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Strategic financial planning to help scale your foreign business in Thailand. We provide insights and
            recommendations to optimize operations, reduce costs, and maximize profitability.
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
            <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="mb-6 text-sky-100">Schedule a free consultation to discuss your growth goals in Thailand.</p>
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
