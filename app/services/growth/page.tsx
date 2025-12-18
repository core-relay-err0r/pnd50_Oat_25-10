import type { Metadata } from "next"
import { TrendingUp } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Business Growth & Financial Planning in Thailand | PND50",
  description:
    "Strategic financial planning and business growth solutions in Thailand. Scale your foreign business with expert analysis, cost optimization, and performance insights.",
  keywords: [
    "business growth Thailand",
    "financial planning Thailand",
    "scale business Thailand",
    "foreign business expansion Thailand",
    "cost optimization Thailand",
    "financial analysis Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/growth`,
  },
}

const features = [
  "Financial analysis and reporting",
  "Growth strategy development",
  "Cost optimization",
  "Performance metrics tracking",
  "Cash flow management",
  "Profitability analysis",
]

const faqs = [
  {
    question: "How can you help my business grow in Thailand?",
    answer:
      "We provide financial insights, identify cost savings, and help you make data-driven decisions. Our analysis helps foreign businesses optimize operations and increase profitability in Thailand.",
  },
  {
    question: "What financial reports will I receive?",
    answer:
      "We provide monthly management reports, cash flow analysis, profitability breakdowns, and custom KPI tracking tailored to your business goals in Thailand.",
  },
  {
    question: "Is this suitable for small businesses in Thailand?",
    answer:
      "Yes! Our growth solutions scale to businesses of all sizes. Even small foreign-owned companies benefit from proper financial planning and analysis.",
  },
]

export default function GrowthPage() {
  return (
    <>
      <ServiceSchema
        name="Business Growth & Financial Planning in Thailand"
        description="Strategic financial planning and business growth solutions for foreign companies in Thailand."
        url="/services/growth"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Business Growth", url: "/services/growth" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Business Growth in Thailand"
        description="Strategic financial planning to help scale your foreign business in Thailand. We provide insights and recommendations to optimize operations, reduce costs, and maximize profitability."
        icon={<TrendingUp className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Ready to Grow Your Business?"
      />
    </>
  )
}
