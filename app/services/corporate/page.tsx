import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle, ArrowLeft } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Corporate Services & Company Registration in Thailand | PND50",
  description:
    "Open a business in Thailand with expert corporate services. Company registration, shareholder updates, DBD filings, and corporate governance for foreign investors and expat entrepreneurs.",
  keywords: [
    "open business Thailand",
    "company registration Thailand",
    "start company Thailand",
    "register business Thailand",
    "foreign company Thailand",
    "Thai company setup",
    "BOI Thailand",
    "DBD filing Thailand",
    "shareholder Thailand",
    "corporate governance Thailand",
    "expat business Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/corporate`,
  },
  openGraph: {
    title: "Corporate Services & Company Registration in Thailand | PND50",
    description: "Open a business in Thailand with expert corporate services for foreign investors.",
    url: `${siteConfig.url}/services/corporate`,
    type: "website",
  },
}

const features = [
  "Company registration (Thai Limited Company)",
  "BOI application assistance",
  "Shareholder and director updates",
  "Annual DBD filings",
  "Business license applications",
  "Corporate governance support",
]

const faqs = [
  {
    question: "How do I open a business in Thailand as a foreigner?",
    answer:
      "Foreign investors typically register a Thai Limited Company with at least 51% Thai shareholding, or apply for BOI promotion for 100% foreign ownership. We guide you through the entire registration process.",
  },
  {
    question: "How long does company registration take in Thailand?",
    answer:
      "Standard company registration takes 2-4 weeks, including name reservation, registration with DBD, tax registration, and opening a corporate bank account. BOI applications take 2-3 months.",
  },
  {
    question: "What is the minimum capital required to start a company in Thailand?",
    answer:
      "There's no legal minimum, but 2 million THB is required per work permit for foreign employees. We can advise on the appropriate capital structure for your business needs.",
  },
]

export default function CorporatePage() {
  return (
    <>
      <ServiceSchema
        name="Corporate Services & Company Registration in Thailand"
        description="Expert company registration and corporate services for foreign businesses opening in Thailand."
        url="/services/corporate"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Corporate Services", url: "/services/corporate" },
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
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Open a Business in Thailand</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Start your company in Thailand with confidence. We handle company registration, shareholder updates, DBD
            filings, and ongoing corporate governance — making it easy for foreign investors to do business in Thailand.
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
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Business in Thailand?</h2>
            <p className="mb-6 text-sky-100">Schedule a free consultation to discuss company registration and setup.</p>
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
