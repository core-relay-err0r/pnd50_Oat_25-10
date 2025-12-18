import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Lightbulb, CheckCircle, ArrowLeft } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Business Advisory & Consulting Services in Thailand | PND50",
  description:
    "Expert business advisory and consulting for foreign companies in Thailand. Strategic guidance on accounting, compliance, and business planning for expat entrepreneurs.",
  keywords: [
    "business advisory Thailand",
    "consulting services Thailand",
    "business consultant Thailand",
    "foreign business advice Thailand",
    "expat business consulting Thailand",
    "compliance advisory Thailand",
    "strategic planning Thailand",
    "Thailand market entry",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/advisory`,
  },
  openGraph: {
    title: "Business Advisory & Consulting Services in Thailand | PND50",
    description: "Expert business advisory and consulting for foreign companies in Thailand.",
    url: `${siteConfig.url}/services/advisory`,
    type: "website",
  },
}

const features = [
  "Strategic business guidance",
  "Compliance advisory",
  "Business planning support",
  "Market entry consulting",
  "Financial analysis",
  "Expert consultation in English",
]

const faqs = [
  {
    question: "What kind of business advice do you provide in Thailand?",
    answer:
      "We provide practical guidance on accounting, tax planning, compliance requirements, business structuring, and market entry strategies for foreign businesses operating in Thailand.",
  },
  {
    question: "Can you help me understand Thai business regulations?",
    answer:
      "Yes, we help foreign business owners navigate Thai regulations including company law, tax requirements, labor law, and industry-specific compliance requirements.",
  },
  {
    question: "Do you offer ongoing advisory or one-time consultations?",
    answer:
      "Both! We offer one-time consultations for specific questions and ongoing advisory retainers for businesses that need regular strategic support in Thailand.",
  },
]

export default function AdvisoryPage() {
  return (
    <>
      <ServiceSchema
        name="Business Advisory & Consulting Services in Thailand"
        description="Expert business advisory and consulting for foreign companies operating in Thailand."
        url="/services/advisory"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Advisory & Support", url: "/services/advisory" },
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
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Business Advisory in Thailand</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Clear, practical guidance for foreign businesses in Thailand. We help expat entrepreneurs and foreign
            investors make confident decisions with expert advice on accounting, compliance, and business strategy.
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
            <h2 className="text-2xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="mb-6 text-sky-100">
              Schedule a free consultation to discuss your business questions in Thailand.
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
