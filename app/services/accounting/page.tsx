import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services in Thailand | PND50",
  description:
    "Professional accounting and bookkeeping services in Thailand for foreign businesses. Monthly financial statements, bank reconciliations, and TR Cloud system. Full English support.",
  keywords: [
    "accounting services Thailand",
    "bookkeeping Thailand",
    "accounting for foreign business Thailand",
    "monthly bookkeeping Thailand",
    "financial statements Thailand",
    "expat accounting Thailand",
    "accounting services in Thailand",
    "bookkeeping in Thailand",
    "accounting for foreign business in Thailand",
    "expat accounting Thailand",
    "English speaking accountant Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/accounting`,
    languages: {
      en: `${siteConfig.url}/services/accounting`,
      "en-US": `${siteConfig.url}/services/accounting`,
      "en-GB": `${siteConfig.url}/services/accounting`,
      "en-SG": `${siteConfig.url}/services/accounting`,
      "en-AU": `${siteConfig.url}/services/accounting`,
      "x-default": `${siteConfig.url}/services/accounting`,
    },
  },
  openGraph: {
    title: "Accounting & Bookkeeping Services in Thailand | PND50",
    description: "Professional accounting services for foreign businesses in Thailand. Full English support.",
    url: `${siteConfig.url}/services/accounting`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting Services in Thailand | PND50",
    description: "Professional accounting for foreign businesses in Thailand.",
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
  "Monthly bookkeeping in English",
  "Financial statements preparation",
  "Bank reconciliations",
  "TR Cloud accounting system",
  "Monthly reports via email",
  "Compliance with Thai Accounting Standards",
]

const faqs = [
  {
    question: "Do I need an accountant for my business in Thailand?",
    answer:
      "Yes, all companies registered in Thailand must maintain accounting records according to Thai Accounting Standards. Financial statements must be prepared in Thai Baht and audited annually.",
  },
  {
    question: "Can you provide accounting reports in English?",
    answer:
      "Yes, we provide all reports and communication in English. Our team is fluent in English and experienced in serving foreign-owned businesses in Thailand.",
  },
  {
    question: "What accounting system do you use?",
    answer:
      "We use TR Cloud, a secure accounting system operated by our team. All reports are delivered directly to you via email every month with clear explanations.",
  },
]

export default function AccountingPage() {
  return (
    <>
      <ServiceSchema
        name="Accounting & Bookkeeping Services in Thailand"
        description="Professional accounting and bookkeeping services for foreign businesses operating in Thailand."
        url="/services/accounting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Accounting in Thailand", url: "/services/accounting" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Accounting & Bookkeeping in Thailand"
        description="Professional accounting services for foreign-owned businesses in Thailand. We handle your monthly bookkeeping, financial statements, and reconciliations with precision — all delivered in English."
        icon={<BookOpen className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
      />
    </>
  )
}
