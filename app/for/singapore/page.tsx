import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Globe, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Accounting Services for Singapore Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Singapore businesses expanding to Thailand. We help Singaporean companies navigate Thai compliance, tax filing, and business setup with ease.",
  keywords: [
    "Singapore company Thailand",
    "accounting Singapore business Thailand",
    "Thai accounting for Singaporeans",
    "Singapore to Thailand expansion",
    "cross-border accounting ASEAN",
    "Thai tax for Singapore companies",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/singapore",
  },
  openGraph: {
    title: "Thai Accounting Services for Singapore Companies | PND50",
    description:
      "Helping Singapore businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/singapore",
  },
}

export default function SingaporePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Thailand × Singapore
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Accounting Services for{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Singapore Companies
            </span>{" "}
            in Thailand
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Expanding your Singapore business to Thailand? We speak your language — literally and figuratively. Expert
            accounting, tax filing, and compliance services designed specifically for Singaporean companies operating in
            Thailand.
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

      {/* Why Singapore Companies Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Singapore Companies Trust PND50</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "ASEAN Business Understanding",
                description:
                  "We understand cross-border ASEAN operations. Many of our clients are Singapore companies expanding regionally through Thailand.",
              },
              {
                title: "English-First Communication",
                description:
                  "Clear, professional English communication. No language barriers, no miscommunication — just straightforward accounting support.",
              },
              {
                title: "Thai Compliance Expertise",
                description:
                  "Navigate Thailand's tax laws, BOI regulations, and reporting requirements with confidence. We handle the complexity.",
              },
              {
                title: "Singapore Tax Coordination",
                description:
                  "We can coordinate with your Singapore accountant for transfer pricing, intercompany transactions, and tax treaty benefits.",
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

      {/* Common Use Cases */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            How We Help Singapore Companies in Thailand
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Regional Headquarters Setup",
                description:
                  "Setting up a Thai subsidiary or regional HQ? We handle company registration, bank account opening support, tax registration, and ongoing compliance.",
              },
              {
                title: "Manufacturing & Trading Operations",
                description:
                  "Managing Thai manufacturing or trading operations? We provide bookkeeping, inventory accounting, transfer pricing documentation, and monthly financial reporting.",
              },
              {
                title: "Service Delivery Entities",
                description:
                  "Operating a service entity in Thailand? We handle VAT, withholding tax, intercompany invoicing, and ensure proper documentation for cross-border transactions.",
              },
              {
                title: "BOI-Promoted Companies",
                description:
                  "Received BOI promotion? We manage BOI reporting requirements, duty exemption tracking, and ensure you maximize your tax incentives legally.",
              },
            ].map((useCase, index) => (
              <div key={index} className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-sky-100 text-sky-700 rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                  {useCase.title}
                </h3>
                <p className="text-slate-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Singapore Companies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Company Registration & Setup",
              "Monthly Bookkeeping",
              "Corporate Tax Filing (PND50)",
              "VAT Management (PP.30)",
              "Withholding Tax",
              "Transfer Pricing Documentation",
              "BOI Reporting",
              "Audit Support",
              "Payroll Services",
              "Work Permit Support",
              "Financial Reporting (Thai & English)",
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

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-sky-600 to-blue-600 text-white rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <Headphones className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Thai Operations?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Book a free consultation with our team. We'll discuss your specific needs and show you how we can support
            your Thailand operations.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
