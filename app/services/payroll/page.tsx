import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, CheckCircle, ArrowLeft } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: "Payroll Services in Thailand | PND50",
  description:
    "Professional payroll services in Thailand for foreign businesses. Monthly payroll processing, social security submissions, and tax withholding. Accurate and timely for expat companies.",
  keywords: [
    "payroll services Thailand",
    "payroll outsourcing Thailand",
    "social security Thailand",
    "employee payroll Thailand",
    "foreign business payroll Thailand",
    "expat payroll Thailand",
    "monthly payroll Thailand",
    "Thai labor law payroll",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/payroll`,
  },
  openGraph: {
    title: "Payroll Services in Thailand | PND50",
    description: "Professional payroll services in Thailand for foreign businesses.",
    url: `${siteConfig.url}/services/payroll`,
    type: "website",
  },
}

const features = [
  "Monthly payroll processing",
  "Social security submissions",
  "Personal income tax withholding (PND1)",
  "Payslip generation",
  "Year-end tax certificates",
  "Compliance with Thai labor law",
]

const faqs = [
  {
    question: "What is included in payroll services in Thailand?",
    answer:
      "Our payroll services include salary calculation, social security contributions, personal income tax withholding, payslip generation, and all required government submissions.",
  },
  {
    question: "Is social security mandatory for employees in Thailand?",
    answer:
      "Yes, employers must register employees with Social Security and contribute 5% of salary (capped at 750 THB/month), matched by the employee. We handle all submissions.",
  },
  {
    question: "Can you handle payroll for both Thai and foreign employees?",
    answer:
      "Yes, we process payroll for both Thai nationals and foreign employees with work permits. We ensure proper tax treatment and compliance for each employee type.",
  },
]

export default function PayrollPage() {
  return (
    <>
      <ServiceSchema
        name="Payroll Services in Thailand"
        description="Professional payroll processing and social security services for foreign businesses in Thailand."
        url="/services/payroll"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Payroll Services", url: "/services/payroll" },
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
              <Users className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">Payroll Services in Thailand</h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed">
            Accurate and timely payroll processing for foreign-owned businesses in Thailand. We handle salary
            calculations, social security, and tax withholding — so you can focus on growing your team.
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
            <p className="mb-6 text-sky-100">Schedule a free consultation to discuss your payroll needs in Thailand.</p>
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
