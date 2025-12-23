import type { Metadata } from "next"
import { FileText } from "lucide-react"
import {
  DetailedServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
  AuthorSchema,
  ServiceHowToSchema,
} from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Tax Filing in Thailand | Corporate Tax & VAT Services | PND50",
  description:
    "Expert tax filing services in Thailand for foreign businesses. VAT, withholding tax, corporate income tax (PND50, PND51), and Revenue Department compliance. Full English support.",
  keywords: [
    "tax filing Thailand",
    "tax filing in Thailand",
    "corporate tax Thailand",
    "VAT Thailand",
    "withholding tax Thailand",
    "PND50",
    "PND51",
    // Thai keywords
    "ยื่นภาษี",
    "ภาษีนิติบุคคล",
    "ภาษีมูลค่าเพิ่ม",
    "ภ.ง.ด.50",
    "ภ.ง.ด.51",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/tax`,
    languages: {
      en: `${siteConfig.url}/services/tax`,
      "x-default": `${siteConfig.url}/services/tax`,
    },
  },
  openGraph: {
    title: "Tax Filing in Thailand | PND50",
    description:
      "Expert tax filing for foreign businesses in Thailand. VAT, corporate tax, and full compliance support.",
    url: `${siteConfig.url}/services/tax`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-services.png`,
        width: 1200,
        height: 630,
        alt: "PND50 Tax Filing Services in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Filing in Thailand | PND50",
    description: "Expert tax filing for foreign businesses in Thailand.",
    images: [`${siteConfig.url}/og-services.png`],
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

const howToSteps = [
  {
    name: "Tax Calendar Setup",
    text: "We create a customized tax calendar with all your company's filing deadlines and send reminders in advance.",
  },
  {
    name: "Monthly VAT Filing",
    text: "We prepare and submit PP30 VAT returns by the 15th of each month, including input/output reconciliation.",
  },
  {
    name: "Withholding Tax Management",
    text: "We calculate, file, and pay withholding taxes (PND1, PND3, PND53) for all applicable payments.",
  },
  {
    name: "Corporate Tax Filing",
    text: "We prepare and submit PND51 (half-year) and PND50 (annual) corporate income tax returns with optimized calculations.",
  },
]

export default function TaxPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Tax & Compliance", url: "/services/tax" },
  ]

  return (
    <>
      <DetailedServiceSchema
        name="Tax Filing & Compliance Services in Thailand"
        description="Expert tax filing and compliance services for foreign businesses operating in Thailand."
        url="/services/tax"
        serviceType="Tax Preparation Service"
        datePublished="2024-01-15"
        dateModified="2025-06-20"
        priceRange="฿฿"
        aggregateRating={{ ratingValue: "4.9", reviewCount: "127" }}
        breadcrumb={breadcrumbItems}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceHowToSchema serviceName="Tax Filing & Compliance" steps={howToSteps} totalTime="P365D" />
      <AuthorSchema
        name="PND50 Tax Team"
        jobTitle="Tax Specialists"
        description="Certified tax auditors with expertise in Thai corporate taxation and Revenue Department compliance"
        credentials={["Tax Auditor Certificate", "Revenue Department Licensed"]}
      />

      <ServicePageClient
        title="Tax & Compliance in Thailand"
        description="Complete tax filing and compliance services for foreign-owned businesses in Thailand. We ensure your company meets all Thai Revenue Department requirements with timely, accurate submissions."
        icon={<FileText className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
