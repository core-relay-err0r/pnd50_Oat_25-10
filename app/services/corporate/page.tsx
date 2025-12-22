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
  "Thai Limited Company registration",
  "BOI promotion applications",
  "Director & shareholder changes",
  "Annual DBD filings",
  "Business license applications",
  "Work permit support",
  "Corporate bank account guidance",
  "Company seal & documentation",
]

const faqs = [
  {
    question: "How do I register a company in Thailand?",
    answer:
      "We register Thai Limited Companies with 51% Thai shareholding (standard) or 100% foreign ownership via BOI promotion. Process takes 2-4 weeks including tax registration.",
  },
  {
    question: "What's the minimum capital required?",
    answer:
      "No legal minimum, but 2 million THB registered capital is required per work permit for foreign employees. We advise on the right structure for your needs.",
  },
  {
    question: "Can foreigners own 100% of a Thai company?",
    answer:
      "Yes, through BOI promotion or a Foreign Business License. BOI offers tax incentives and takes 2-3 months. We guide you through the application process.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Open Business", url: "/services/corporate" },
]

export default function CorporatePage() {
  return (
    <>
      <ServiceSchema
        name="Company Registration & Corporate Services in Thailand"
        description="Expert company registration and corporate services for foreign businesses opening in Thailand."
        url="/services/corporate"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Open a Business in Thailand"
        description="Start your company in Thailand with confidence. We handle company registration, shareholder updates, DBD filings, and ongoing corporate governance — making it easy for foreign investors to do business in Thailand."
        icon={<Building2 className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Ready to Start Your Business?"
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
