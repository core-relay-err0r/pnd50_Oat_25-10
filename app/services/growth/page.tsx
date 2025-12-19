import type { Metadata } from "next"
import { TrendingUp } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
import { siteConfig } from "@/lib/seo-config"
import { ServicePageClient } from "@/components/services/service-page-client"

export const metadata: Metadata = {
  title: "Business Growth & Financial Planning in Thailand | PND50",
  description:
    "Strategic financial planning and business growth solutions in Thailand. Scale your foreign business with expert analysis, cost optimization, and performance insights in Thailand.",
  keywords: [
    "business growth in Thailand",
    "financial planning in Thailand",
    "scale business in Thailand",
    "foreign business expansion Thailand",
    "cost optimization Thailand",
    "financial analysis Thailand",
    "grow company Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/growth`,
    languages: {
      en: `${siteConfig.url}/services/growth`,
      "en-US": `${siteConfig.url}/services/growth`,
      "en-GB": `${siteConfig.url}/services/growth`,
      "en-SG": `${siteConfig.url}/services/growth`,
      "en-AU": `${siteConfig.url}/services/growth`,
      "x-default": `${siteConfig.url}/services/growth`,
    },
  },
  openGraph: {
    title: "Business Growth in Thailand | PND50",
    description: "Scale your foreign business in Thailand with expert financial planning.",
    url: `${siteConfig.url}/services/growth`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Growth in Thailand | PND50",
    description: "Scale your foreign business in Thailand.",
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
  "Monthly financial analysis",
  "Cash flow forecasting",
  "Cost reduction strategies",
  "Profitability breakdown",
  "KPI dashboard setup",
  "Budget vs actual tracking",
  "Growth opportunity identification",
  "Management reporting",
]

const faqs = [
  {
    question: "How can financial analysis help my business?",
    answer:
      "We identify where your money goes, spot cost-saving opportunities, and track key metrics. Data-driven insights help you make better business decisions in Thailand.",
  },
  {
    question: "What reports will I receive?",
    answer:
      "Monthly management reports with cash flow analysis, profitability by service/product, expense breakdowns, and custom KPIs tailored to your business goals.",
  },
  {
    question: "Is this suitable for small businesses?",
    answer:
      "Yes. Even small foreign-owned companies benefit from proper financial tracking. We scale our analysis to match your business size and complexity.",
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
          { name: "Business Growth in Thailand", url: "/services/growth" },
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
