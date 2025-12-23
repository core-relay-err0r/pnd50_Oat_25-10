import type { Metadata } from "next"
import { Users } from "lucide-react"
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
  title: "Payroll Services in Thailand | Salary & Social Security | PND50",
  description:
    "Professional payroll services in Thailand for foreign businesses. Monthly salary processing, social security submissions, PND1 tax withholding, and payslip generation. Full English support.",
  keywords: [
    "payroll Thailand",
    "payroll services Thailand",
    "salary processing Thailand",
    "social security Thailand",
    "outsource payroll Thailand",
    // Thai keywords
    "เงินเดือน",
    "ทำเงินเดือน",
    "ประกันสังคม",
    "บริการเงินเดือน",
    "จ่ายเงินเดือน",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/payroll`,
    languages: {
      en: `${siteConfig.url}/services/payroll`,
      "x-default": `${siteConfig.url}/services/payroll`,
    },
  },
  openGraph: {
    title: "Payroll Services in Thailand | PND50",
    description:
      "Professional payroll processing for foreign businesses in Thailand. Social security and tax compliance included.",
    url: `${siteConfig.url}/services/payroll`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-services.png`,
        width: 1200,
        height: 630,
        alt: "PND50 Payroll Services in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payroll Services in Thailand | PND50",
    description: "Professional payroll for foreign businesses in Thailand.",
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

const howToSteps = [
  {
    name: "Employee Setup",
    text: "We set up your employee database with salary details, tax IDs, and social security numbers.",
  },
  {
    name: "Monthly Data Collection",
    text: "Submit attendance, overtime, leave, and any salary changes by the 20th of each month.",
  },
  {
    name: "Payroll Processing",
    text: "We calculate net salaries, tax withholdings, and social security contributions for all employees.",
  },
  { name: "Payslip Delivery", text: "Receive individual payslips and summary reports by month-end for your records." },
  {
    name: "Government Submissions",
    text: "We file PND1 withholding tax and social security contributions to respective government agencies.",
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
      <DetailedServiceSchema
        name="Payroll Services in Thailand"
        description="Professional payroll processing and social security services for foreign businesses in Thailand."
        url="/services/payroll"
        serviceType="Payroll Service"
        datePublished="2024-01-15"
        dateModified="2025-06-20"
        priceRange="฿฿"
        aggregateRating={{ ratingValue: "4.9", reviewCount: "52" }}
        breadcrumb={breadcrumbItems}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceHowToSchema serviceName="Payroll Processing" steps={howToSteps} totalTime="P30D" />
      <AuthorSchema
        name="PND50 Payroll Team"
        jobTitle="Payroll Specialists"
        description="HR and payroll experts ensuring accurate salary processing and labor law compliance"
        credentials={["HR Management Certificate", "Social Security Specialist"]}
      />

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
