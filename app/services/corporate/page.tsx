import type { Metadata } from "next"
import { Building2 } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Open a Business in Thailand | Company Registration | PND50",
  description:
    "Open a business in Thailand with expert help. Company registration, BOI applications, and corporate services for foreign investors. Start your Thai company today with full English support.",
  keywords: [
    "open business in Thailand",
    "start company in Thailand",
    "company registration in Thailand",
    "register business in Thailand",
    "foreign company in Thailand",
    "Thai company setup",
    "BOI Thailand",
    "start business Thailand foreigner",
    "how to open company in Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/corporate`,
    languages: {
      en: `${siteConfig.url}/services/corporate`,
      "en-US": `${siteConfig.url}/services/corporate`,
      "en-GB": `${siteConfig.url}/services/corporate`,
      "en-SG": `${siteConfig.url}/services/corporate`,
      "en-AU": `${siteConfig.url}/services/corporate`,
      "x-default": `${siteConfig.url}/services/corporate`,
    },
  },
  openGraph: {
    title: "Open a Business in Thailand | PND50",
    description: "Start your company in Thailand with expert help. Full English support for foreign investors.",
    url: `${siteConfig.url}/services/corporate`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open a Business in Thailand | PND50",
    description: "Start your company in Thailand with expert help.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        name="Company Registration & Corporate Services in Thailand"
        description="Expert company registration and corporate services for foreign businesses opening in Thailand."
        url="/services/corporate"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Open Business in Thailand", url: "/services/corporate" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Open a Business in Thailand"
        description="Start your company in Thailand with confidence. We handle company registration, shareholder updates, DBD filings, and ongoing corporate governance — making it easy for foreign investors to do business in Thailand."
        icon={<Building2 className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Ready to Start Your Business?"
      />
    </>
  )
}
