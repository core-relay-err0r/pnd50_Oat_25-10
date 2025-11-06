import type { Metadata } from "next"
import {
  BookOpen,
  FileText,
  Users,
  Building2,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Rocket,
  Zap,
  ArrowLeft,
} from "lucide-react"
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
  {
    icon: TrendingUp,
    title: "Business Growth Solutions",
    description:
      "Strategic financial planning and analysis to help scale your business in Thailand. We provide insights and recommendations to optimize your operations and maximize profitability.",
    features: ["Financial analysis", "Growth strategy", "Cost optimization", "Performance metrics"],
  },
]

const packages = [
  {
    icon: Rocket,
    title: "Startup",
    description: "Ideal for foreign companies seeking to study Thai market for business development purposes.",
    features: [
      "Company registration",
      "Basic accounting setup",
      "Monthly bookkeeping",
      "Tax compliance",
      "Email support",
    ],
    setupTime: "2-3 weeks",
    popular: false,
    href: "/services/packages/startup",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Ideal for most businesses. Takes the shortest time to get comprehensive support.",
    features: [
      "Everything in Startup",
      "Payroll services",
      "VAT management",
      "Financial reporting",
      "Priority support",
    ],
    setupTime: "1 week",
    popular: true,
    href: "/services/packages/growth",
  },
  {
    icon: Zap,
    title: "Full-Cycle",
    description: "Ideal for established companies wishing to expand their operations in Thailand.",
    features: [
      "Everything in Growth",
      "Strategic advisory",
      "Audit support",
      "Corporate governance",
      "Dedicated account manager",
    ],
    setupTime: "Immediate",
    popular: false,
    href: "/services/packages/full-cycle",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group mb-6 sm:mb-8 touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

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

      {/* Packages Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Business structures in Thailand
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Select the perfect structure for <span className="text-primary">your business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon
              const isPopular = pkg.popular

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl ${
                    isPopular
                      ? "bg-[#0a2540] text-white border-2 border-primary"
                      : "bg-card border-2 border-border hover:border-primary/50"
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 ${isPopular ? "text-white" : "text-foreground"}`}>
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${isPopular ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            isPopular ? "bg-primary" : "bg-primary"
                          }`}
                        ></span>
                        <span className={isPopular ? "text-white/90" : "text-foreground"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Setup Time Circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`relative w-28 h-28 rounded-full flex items-center justify-center ${
                        isPopular ? "border-4 border-primary/30" : "border-4 border-primary/20"
                      }`}
                    >
                      <div className="text-center">
                        <div className={`text-lg font-bold ${isPopular ? "text-white" : "text-foreground"}`}>
                          {pkg.setupTime}
                        </div>
                        <div className={`text-xs ${isPopular ? "text-white/60" : "text-muted-foreground"}`}>
                          Setup time
                        </div>
                      </div>
                      {/* Circular progress indicator */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke={isPopular ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.3)"}
                          strokeWidth="4"
                          strokeDasharray="289"
                          strokeDashoffset="72"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={pkg.href}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all mb-3 ${
                      isPopular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Request a quote
                  </Link>

                  {/* Learn More Link */}
                  <Link
                    href={pkg.href}
                    className={`block text-center text-sm font-medium transition-colors ${
                      isPopular ? "text-white/80 hover:text-white" : "text-primary hover:text-primary/80"
                    }`}
                  >
                    Learn more
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
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
