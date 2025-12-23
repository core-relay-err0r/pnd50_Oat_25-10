import type { Metadata } from "next"
import { TrendingUp } from "lucide-react"
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
  title: "Grow Your Business in Thailand | Financial Planning | PND50",
  description:
    "Strategic financial planning and business growth solutions in Thailand. Scale your foreign business with expert analysis, cost optimization, and performance insights. Full English support.",
  keywords: [
    "grow business Thailand",
    "business growth Thailand",
    "expand business Thailand",
    "financial planning Thailand",
    "scale business Thailand",
    // Thai keywords
    "ขยายธุรกิจ",
    "เติบโตธุรกิจ",
    "วางแผนการเงิน",
    "พัฒนาธุรกิจ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/growth`,
    languages: {
      en: `${siteConfig.url}/services/growth`,
      "x-default": `${siteConfig.url}/services/growth`,
    },
  },
  openGraph: {
    title: "Grow Your Business in Thailand | PND50",
    description: "Scale your foreign business in Thailand with expert financial planning and growth strategies.",
    url: `${siteConfig.url}/services/growth`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-services.png`,
        width: 1200,
        height: 630,
        alt: "PND50 Business Growth in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Your Business in Thailand | PND50",
    description: "Scale your foreign business in Thailand.",
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

const howToSteps = [
  {
    name: "Financial Health Check",
    text: "We analyze your current financial statements, cash flow patterns, and key metrics.",
  },
  {
    name: "KPI Dashboard Setup",
    text: "We create a customized dashboard tracking the metrics that matter most for your business goals.",
  },
  {
    name: "Opportunity Identification",
    text: "We identify cost reduction opportunities, revenue optimization areas, and growth potential.",
  },
  {
    name: "Monthly Reviews",
    text: "Regular check-ins to review performance, adjust strategies, and ensure you're on track to meet targets.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Business Growth", url: "/services/growth" },
]

export default function GrowthPage() {
  return (
    <>
      <DetailedServiceSchema
        name="Business Growth & Financial Planning in Thailand"
        description="Strategic financial planning and business growth solutions for foreign companies in Thailand."
        url="/services/growth"
        serviceType="Financial Planning Service"
        datePublished="2024-01-15"
        dateModified="2025-06-20"
        priceRange="฿฿฿"
        aggregateRating={{ ratingValue: "4.9", reviewCount: "31" }}
        breadcrumb={breadcrumbItems}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceHowToSchema serviceName="Business Growth Planning" steps={howToSteps} totalTime="P90D" />
      <AuthorSchema
        name="PND50 Growth Team"
        jobTitle="Financial Analysts"
        description="Financial analysts specialized in helping foreign businesses scale operations in Thailand"
        credentials={["CFA", "Financial Planning Certificate"]}
      />

      <ServicePageClient
        title="Business Growth in Thailand"
        description="Strategic financial planning to help scale your foreign business in Thailand. We provide insights and recommendations to optimize operations, reduce costs, and maximize profitability."
        icon={<TrendingUp className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Ready to Grow Your Business?"
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
