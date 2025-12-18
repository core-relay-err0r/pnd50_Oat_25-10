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
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/payroll`,
  },
}

const features = [
  "Monthly payroll processing",
  "Social security submissions",
  "Personal income tax withholding (PND1)",
  "Payslip generation",
  "Year-end tax certificates",
  "Compliance with Thai labor law",
]

const faqs = [
  {
    question: "What is included in payroll services in Thailand?",
    answer:
      "Our payroll services include salary calculation, social security contributions, personal income tax withholding, payslip generation, and all required government submissions.",
  },
  {
    question: "Is social security mandatory for employees in Thailand?",
    answer:
      "Yes, employers must register employees with Social Security and contribute 5% of salary (capped at 750 THB/month), matched by the employee. We handle all submissions.",
  },
  {
    question: "Can you handle payroll for both Thai and foreign employees?",
    answer:
      "Yes, we process payroll for both Thai nationals and foreign employees with work permits. We ensure proper tax treatment and compliance for each employee type.",
  },
]

export default function PayrollPage() {
  return (
    <>
      <ServiceSchema
        name="Payroll Services in Thailand"
        description="Professional payroll processing and social security services for foreign businesses in Thailand."
        url="/services/payroll"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Payroll Services", url: "/services/payroll" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Payroll Services in Thailand"
        description="Accurate and timely payroll processing for foreign-owned businesses in Thailand. We handle salary calculations, social security, and tax withholding — so you can focus on growing your team."
        icon={<Users className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
      />
    </>
  )
}
