import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Globe, Headphones, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Accounting Services for Russian Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Russian businesses in Thailand. We help Russian entrepreneurs navigate Thai compliance, company setup, and tax filing with Russian-speaking support.",
  keywords: [
    "Russian company Thailand",
    "accounting Russian business Thailand",
    "Thai accounting for Russians",
    "Russia to Thailand business",
    "Russian entrepreneur Thailand",
    "Thai tax for Russian companies",
    "бухгалтерия Таиланд",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/russia",
  },
  openGraph: {
    title: "Thai Accounting Services for Russian Companies | PND50",
    description:
      "Helping Russian businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/russia",
  },
}

export default function RussiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Thailand × Russia
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Accounting Services for{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Russian Companies
            </span>{" "}
            in Thailand
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Starting or running a business in Thailand as a Russian entrepreneur? We understand your unique challenges.
            Expert accounting, tax filing, and compliance services tailored for Russian-owned businesses in Thailand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/calculator">Get Instant Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Russian Companies Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Languages className="w-6 h-6 text-sky-600" />
            <h2 className="text-3xl font-bold text-slate-900 text-center">Why Russian Businesses Trust PND50</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Russian-Speaking Support Available",
                description:
                  "We work with Russian-speaking team members and understand the cultural nuances. Clear communication in English and Russian support when needed.",
              },
              {
                title: "Digital Business Expertise",
                description:
                  "Specialized in tech startups, e-commerce, digital marketing agencies, and online businesses — the sectors where Russian entrepreneurs excel in Thailand.",
              },
              {
                title: "Proven Track Record",
                description:
                  "Many of our clients are successful Russian entrepreneurs running tech startups and digital businesses from Thailand. Check our case studies.",
              },
              {
                title: "Modern, Tech-Driven Approach",
                description:
                  "We use modern accounting software, online documentation, and AI-powered tools. Everything accessible from anywhere, perfect for digital nomad businesses.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            How We Help Russian Entrepreneurs in Thailand
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "E-commerce & Online Stores",
                description:
                  "Running an e-commerce business serving international customers? We handle VAT exemptions for export sales, proper invoicing, foreign currency accounting, and ensure compliance with Thai e-commerce regulations.",
              },
              {
                title: "SaaS & Software Companies",
                description:
                  "Building and selling software from Thailand? We manage your recurring revenue accounting, subscription tracking, international payment processing, and navigate digital service tax implications.",
              },
              {
                title: "Digital Marketing & Agencies",
                description:
                  "Operating a digital marketing agency? We handle service revenue recognition, client invoicing, subcontractor payments, withholding tax, and provide clean financial reports.",
              },
              {
                title: "Crypto & Blockchain Projects",
                description:
                  "Involved in cryptocurrency or blockchain? We help you navigate Thailand's crypto tax rules, proper recording of digital asset transactions, and tax reporting requirements.",
              },
            ].map((scenario, index) => (
              <div key={index} className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                  {scenario.title}
                </h3>
                <p className="text-slate-600">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Russian Companies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Company Registration & Setup",
              "Business Bank Account Support",
              "Monthly Bookkeeping",
              "Corporate Tax Filing (PND50)",
              "VAT Management (PP.30)",
              "Withholding Tax",
              "Foreign Currency Accounting",
              "E-commerce Accounting",
              "SaaS Revenue Recognition",
              "Crypto Transaction Recording",
              "Work Permit & Visa Support",
              "Strategic Tax Planning",
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 mb-4 italic">
              "PND50 understood my digital marketing agency's needs perfectly. They handle all the Thai accounting
              complexity while I focus on growing my business. Communication is excellent, reports are always on time."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold">
                A
              </div>
              <div>
                <p className="font-semibold text-slate-900">Alex M.</p>
                <p className="text-sm text-slate-600">Owner, Russian Digital Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <Headphones className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Let's Simplify Your Thai Business Operations</h2>
          <p className="text-sky-100 text-lg mb-8">
            Book a free consultation to discuss your specific situation. We'll explain everything in clear English (or
            Russian if preferred) and show you how we can help.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
