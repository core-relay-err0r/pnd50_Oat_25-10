import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Tax Filing & Compliance Services in Thailand | PND50",
  description:
    "Expert tax filing and compliance services in Thailand for foreign businesses. VAT, withholding tax, corporate income tax, and Revenue Department compliance. Full English support for expats.",
  keywords: [
    "tax filing in Thailand",
    "VAT in Thailand",
    "corporate income tax Thailand",
    "withholding tax in Thailand",
    "tax compliance in Thailand",
    "PND50 tax filing Thailand",
    "foreign business tax Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/tax`,
    languages: {
      en: `${siteConfig.url}/services/tax`,
      "en-US": `${siteConfig.url}/services/tax`,
      "en-GB": `${siteConfig.url}/services/tax`,
      "en-SG": `${siteConfig.url}/services/tax`,
      "en-AU": `${siteConfig.url}/services/tax`,
      "x-default": `${siteConfig.url}/services/tax`,
    },
  },
  openGraph: {
    title: "Tax Filing & Compliance in Thailand | PND50",
    description: "Expert tax services for foreign businesses in Thailand. Full English support.",
    url: `${siteConfig.url}/services/tax`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Services in Thailand | PND50",
    description: "Expert tax filing for foreign businesses in Thailand.",
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
  "Monthly VAT filing (PP30)",
  "Withholding tax (PND1, PND3, PND53)",
  "Half-year corporate tax (PND51)",
  "Annual corporate tax (PND50)",
  "Revenue Department submissions",
  "Tax calendar management",
  "Deadline tracking & reminders",
  "English tax advisory",
]

const faqs = [
  {
    question: "What taxes does my company pay in Thailand?",
    answer:
      "Most companies pay Corporate Income Tax (20%), VAT (7% if registered), and Withholding Tax on certain payments. We handle all filings and ensure you never miss a deadline.",
  },
  {
    question: "When are corporate taxes due?",
    answer:
      "PND51 (half-year) is due within 2 months of mid-year. PND50 (annual) is due within 150 days after fiscal year end. We track all deadlines and file on time.",
  },
  {
    question: "Do I need to register for VAT?",
    answer:
      "VAT registration is required if annual revenue exceeds 1.8 million THB. We advise on registration timing and handle all VAT filings monthly.",
  },
]

export default function TaxPage() {
  return (
    <>
      <ServiceSchema
        name="Tax Filing & Compliance Services in Thailand"
        description="Expert tax filing and compliance services for foreign businesses operating in Thailand."
        url="/services/tax"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Tax Services in Thailand", url: "/services/tax" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Tax & Compliance in Thailand"
        description="Complete tax filing and compliance services for foreign-owned businesses in Thailand. We ensure your company meets all Thai Revenue Department requirements with timely, accurate submissions."
        icon={<FileText className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
      />
    </>
  )
}
