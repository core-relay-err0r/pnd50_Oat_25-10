import type { Metadata } from "next"
import { Users } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Payroll Services in Thailand | PND50",
  description:
    "Professional payroll services in Thailand for foreign businesses. Monthly payroll processing, social security submissions, and tax withholding. Accurate and timely for expat companies.",
  keywords: [
    "payroll services Thailand",
    "payroll outsourcing Thailand",
    "social security Thailand",
    "employee payroll Thailand",
    "foreign business payroll Thailand",
    "expat payroll Thailand",
    "HR services Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/payroll`,
    languages: {
      en: `${siteConfig.url}/services/payroll`,
      "en-US": `${siteConfig.url}/services/payroll`,
      "en-GB": `${siteConfig.url}/services/payroll`,
      "en-SG": `${siteConfig.url}/services/payroll`,
      "en-AU": `${siteConfig.url}/services/payroll`,
      "x-default": `${siteConfig.url}/services/payroll`,
    },
  },
  openGraph: {
    title: "Payroll Services in Thailand | PND50",
    description: "Professional payroll processing for foreign businesses in Thailand.",
    url: `${siteConfig.url}/services/payroll`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services in Thailand | PND50",
    description: "Professional payroll for foreign businesses in Thailand.",
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
  "Monthly salary calculations",
  "Social security submissions",
  "Personal income tax (PND1)",
  "Payslip generation",
  "Year-end tax certificates (50 Tawi)",
  "Leave tracking support",
  "Thai & foreign employee payroll",
  "Labor law compliance",
]

const faqs = [
  {
    question: "What's included in payroll services?",
    answer:
      "Salary calculations, social security contributions (5% employer + 5% employee, capped at 750 THB each), tax withholding, payslips, and all government submissions.",
  },
  {
    question: "Can you handle foreign employee payroll?",
    answer:
      "Yes. We process payroll for both Thai nationals and foreign employees with work permits, ensuring correct tax treatment for each.",
  },
  {
    question: "When do you need payroll information each month?",
    answer:
      "We request salary changes, overtime, and leave data by the 20th. Payslips are delivered by month-end, and government filings are submitted on time.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Payroll Services", url: "/services/payroll" },
]

export default function PayrollPage() {
  return (
    <>
      <ServiceSchema
        name="Payroll Services in Thailand"
        description="Professional payroll processing and social security services for foreign businesses in Thailand."
        url="/services/payroll"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Payroll Services in Thailand"
        description="Accurate and timely payroll processing for foreign-owned businesses in Thailand. We handle salary calculations, social security, and tax withholding — so you can focus on growing your team."
        icon={<Users className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
