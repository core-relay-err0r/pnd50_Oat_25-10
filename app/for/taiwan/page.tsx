import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Globe, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Accounting Services for Taiwan Companies in Thailand | PND50",
  description:
    "Expert accounting and tax services for Taiwanese businesses in Thailand. We help Taiwan companies with Thai compliance, company setup, and cross-border tax planning.",
  keywords: [
    "Taiwan company Thailand",
    "accounting Taiwan business Thailand",
    "Thai accounting for Taiwanese",
    "Taiwan to Thailand expansion",
    "Taiwanese business Thailand",
    "Thai tax for Taiwan companies",
  ],
  alternates: {
    canonical: "https://pnd50.com/for/taiwan",
  },
  openGraph: {
    title: "Thai Accounting Services for Taiwan Companies | PND50",
    description:
      "Helping Taiwanese businesses succeed in Thailand with expert accounting, tax filing, and compliance support.",
    url: "https://pnd50.com/for/taiwan",
  },
}

export default function TaiwanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Thailand × Taiwan
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Accounting Services for{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Taiwan Companies
            </span>{" "}
            in Thailand
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Expanding your Taiwanese business to Thailand? We provide professional accounting, tax filing, and
            compliance services tailored for Taiwan companies operating in Thailand's market.
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

      {/* Why Taiwan Companies Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Taiwanese Companies Trust PND50</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cross-Border Expertise",
                description:
                  "Deep understanding of Taiwan-Thailand business relationships. We help coordinate between your Taiwan HQ and Thai operations.",
              },
              {
                title: "Manufacturing & Trading Focus",
                description:
                  "Extensive experience with Taiwanese manufacturing and trading companies in Thailand. We understand your industry-specific needs.",
              },
              {
                title: "English & Professional Communication",
                description:
                  "Clear, professional English communication. Regular reporting in formats compatible with Taiwan accounting standards.",
              },
              {
                title: "Thai Regulatory Expertise",
                description:
                  "Navigate Thailand's tax laws, BOI incentives, customs regulations, and compliance requirements with confidence.",
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
            How We Help Taiwanese Companies in Thailand
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Manufacturing Operations",
                description:
                  "Managing Thai manufacturing facility? We handle inventory accounting, cost of goods sold, BOI reporting, customs documentation, and ensure compliance with Thai manufacturing regulations.",
              },
              {
                title: "Trading & Distribution",
                description:
                  "Running a trading or distribution operation? We manage import/export documentation, VAT on imports, transfer pricing, intercompany transactions, and customs compliance.",
              },
              {
                title: "Regional Office Setup",
                description:
                  "Establishing regional office in Thailand? We handle company registration, representative office setup, tax registration, bank account support, and ongoing compliance.",
              },
              {
                title: "BOI-Promoted Activities",
                description:
                  "Received BOI promotion? We manage BOI reporting requirements, tax holiday tracking, duty exemption monitoring, and help maximize your investment incentives.",
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

      {/* Services for Taiwan Companies */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Company Registration & Setup",
              "BOI Application Support",
              "Monthly Bookkeeping",
              "Manufacturing Cost Accounting",
              "Inventory Management",
              "Corporate Tax Filing (PND50)",
              "VAT Management (PP.30)",
              "Import/Export Documentation",
              "Transfer Pricing Documentation",
              "BOI Reporting",
              "Customs Compliance",
              "Audit Support",
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
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Thai Operations?</h2>
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
