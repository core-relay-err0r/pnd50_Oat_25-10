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
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/accounting`,
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
          { name: "Accounting & Bookkeeping", url: "/services/accounting" },
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
