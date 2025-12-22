import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
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
  "Profit & loss statements",
  "Balance sheet preparation",
  "Bank reconciliations",
  "TR Cloud accounting system",
  "Monthly email reports",
  "Thai Accounting Standards compliance",
  "Dedicated accountant support",
]

const faqs = [
  {
    question: "Do I need an accountant for my business in Thailand?",
    answer:
      "Yes. All Thai registered companies must maintain proper accounting records and submit audited financial statements annually. Our team handles this for you in English.",
  },
  {
    question: "What accounting system do you use?",
    answer:
      "We use TR Cloud, a secure system operated by our team. You receive monthly reports via email — no software installation needed on your end.",
  },
  {
    question: "How often will I receive financial reports?",
    answer:
      "Monthly. You'll get profit & loss statements, balance sheets, and bank reconciliations delivered to your email with clear explanations in English.",
  },
]

const howToSteps = [
  {
    name: "Initial Setup",
    text: "We set up your TR Cloud account and import your chart of accounts based on Thai Accounting Standards.",
  },
  {
    name: "Monthly Data Collection",
    text: "Send us your bank statements, invoices, and receipts by the 5th of each month.",
  },
  {
    name: "Bookkeeping Processing",
    text: "Our team records all transactions, reconciles bank accounts, and prepares financial statements.",
  },
  {
    name: "Review & Delivery",
    text: "Receive your profit & loss statement, balance sheet, and summary report via email by month-end.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Accounting", url: "/services/accounting" },
]

export default function AccountingPage() {
  return (
    <>
      <DetailedServiceSchema
        name="Accounting & Bookkeeping Services in Thailand"
        description="Professional accounting and bookkeeping services for foreign businesses operating in Thailand."
        url="/services/accounting"
        serviceType="Accounting Service"
        datePublished="2024-01-15"
        dateModified="2025-06-20"
        priceRange="฿฿"
        aggregateRating={{ ratingValue: "4.9", reviewCount: "89" }}
        breadcrumb={breadcrumbItems}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceHowToSchema serviceName="Accounting & Bookkeeping" steps={howToSteps} totalTime="P30D" />
      <AuthorSchema
        name="PND50 Accounting Team"
        jobTitle="Certified Accountants"
        description="Team of certified accountants with 10+ years experience serving foreign businesses in Thailand"
        credentials={["Certified Public Accountant", "Tax Auditor Certificate"]}
      />

      <ServicePageClient
        title="Accounting & Bookkeeping in Thailand"
        description="Professional accounting services for foreign-owned businesses in Thailand. We handle your monthly bookkeeping, financial statements, and reconciliations with precision — all delivered in English."
        icon={<BookOpen className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
