import type { Metadata } from "next"
import { Building2 } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

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
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/corporate`,
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
