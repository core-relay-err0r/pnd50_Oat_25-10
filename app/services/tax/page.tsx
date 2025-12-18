import type { Metadata } from "next"
import { FileText } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Tax Filing & Compliance Services in Thailand | PND50",
  description:
    "Expert tax filing and compliance services in Thailand for foreign businesses. VAT, withholding tax, corporate income tax, and Revenue Department compliance. Full English support.",
  keywords: [
    "tax filing Thailand",
    "VAT Thailand foreign business",
    "corporate income tax Thailand",
    "withholding tax Thailand",
    "tax compliance Thailand",
    "PND50 tax filing",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/tax`,
  },
}

const features = [
  "Monthly VAT filing (PP30)",
  "Withholding tax submissions (PND1, PND3, PND53)",
  "Corporate income tax (PND50, PND51)",
  "Revenue Department compliance",
  "Tax planning and optimization",
  "English-language tax advisory",
]

const faqs = [
  {
    question: "What taxes does a company pay in Thailand?",
    answer:
      "Companies in Thailand typically pay Corporate Income Tax (20%), VAT (7%), and Withholding Tax on certain payments. We handle all filings to ensure full compliance with Thai tax law.",
  },
  {
    question: "When is corporate tax due in Thailand?",
    answer:
      "Corporate income tax (PND50) is due within 150 days after the fiscal year end. Half-year tax (PND51) is due within 2 months after the first 6 months. We track all deadlines for you.",
  },
  {
    question: "Can you help reduce my tax burden legally in Thailand?",
    answer:
      "Yes, we provide tax planning advice to help optimize your tax position within Thai law. This includes BOI incentives, expense deductions, and proper structuring.",
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
          { name: "Tax & Compliance", url: "/services/tax" },
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
