import type { Metadata } from "next"
import { BookOpen, FileText, Users, Building2, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services | PND50",
  description:
    "Comprehensive accounting, tax, payroll, and corporate services for foreign-owned businesses in Thailand.",
}

const services = [
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    description:
      "We handle your monthly bookkeeping, financial statements, and reconciliations with precision. All work is processed internally using TR Cloud — a secure accounting system operated by our team. Reports are delivered directly to you via email every month.",
    features: ["Monthly bookkeeping", "Financial statements", "Bank reconciliations", "TR Cloud system"],
  },
  {
    icon: FileText,
    title: "Tax & Compliance",
    description:
      "Monthly and annual tax filings, including VAT, withholding tax, and corporate income tax. We help ensure your company remains fully compliant with Thai Revenue Department regulations.",
    features: ["VAT filing", "Withholding tax", "Corporate income tax", "Compliance support"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description:
      "Monthly payroll and social security submissions, prepared accurately and delivered on time. Ideal for both local and foreign-owned businesses.",
    features: ["Monthly payroll", "Social security", "Accurate calculations", "Timely delivery"],
  },
  {
    icon: Building2,
    title: "Corporate Services",
    description: "Company registration, shareholder updates, and annual DBD filings — handled efficiently by our team.",
    features: ["Company registration", "Shareholder updates", "DBD filings", "Corporate governance"],
  },
  {
    icon: Lightbulb,
    title: "Advisory & Support",
    description:
      "Clear, practical guidance on accounting and compliance to help your business make confident decisions in Thailand.",
    features: ["Strategic guidance", "Compliance advice", "Business planning", "Expert consultation"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional Services for Your Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From accounting to compliance, we provide comprehensive services tailored for foreign-owned businesses
              operating in Thailand.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to support your business growth and ensure compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Schedule a free consultation to discuss how we can support your business in Thailand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:border-primary hover:bg-card/50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
