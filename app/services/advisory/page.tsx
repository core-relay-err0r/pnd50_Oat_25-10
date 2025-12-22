import type { Metadata } from "next"
import { Lightbulb } from "lucide-react"
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
  title: "Business Advisory & Consulting Services in Thailand | PND50",
  description:
    "Expert business advisory and consulting for foreign companies in Thailand. Strategic guidance on accounting, compliance, and business planning for expat entrepreneurs in Thailand.",
  keywords: [
    "business advisory in Thailand",
    "business consulting in Thailand",
    "business consultant Thailand",
    "foreign business advice Thailand",
    "expat business consulting Thailand",
    "Thailand market entry consulting",
    "business planning Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/advisory`,
    languages: {
      en: `${siteConfig.url}/services/advisory`,
      "en-US": `${siteConfig.url}/services/advisory`,
      "en-GB": `${siteConfig.url}/services/advisory`,
      "en-SG": `${siteConfig.url}/services/advisory`,
      "en-AU": `${siteConfig.url}/services/advisory`,
      "x-default": `${siteConfig.url}/services/advisory`,
    },
  },
  openGraph: {
    title: "Business Advisory in Thailand | PND50",
    description: "Expert consulting for foreign businesses in Thailand.",
    url: `${siteConfig.url}/services/advisory`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Advisory in Thailand | PND50",
    description: "Expert consulting for foreign businesses in Thailand.",
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
  "Thai regulation guidance",
  "Tax planning strategies",
  "Business structure advice",
  "Compliance risk assessment",
  "Market entry consulting",
  "Contract review support",
  "Government liaison",
  "Ongoing advisory retainer",
]

const faqs = [
  {
    question: "What business advice do you provide?",
    answer:
      "Practical guidance on Thai company law, tax optimization, compliance requirements, and business structuring. We help you understand regulations and make informed decisions.",
  },
  {
    question: "Is this a one-time consultation or ongoing?",
    answer:
      "Both options available. One-time consultations for specific questions, or monthly retainer for businesses needing regular strategic support in Thailand.",
  },
  {
    question: "Can you help with government matters?",
    answer:
      "Yes. We assist with Revenue Department, DBD, Social Security Office, and Immigration matters. Our team handles Thai-language documentation and submissions.",
  },
]

const howToSteps = [
  {
    name: "Initial Assessment",
    text: "We review your current business situation, challenges, and goals through a discovery call.",
  },
  {
    name: "Analysis & Research",
    text: "Our team researches relevant Thai regulations, market conditions, and options specific to your case.",
  },
  {
    name: "Strategic Recommendations",
    text: "We present actionable recommendations with clear pros, cons, and cost implications.",
  },
  {
    name: "Implementation Support",
    text: "We assist with executing the agreed strategy, coordinating with relevant government agencies as needed.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Business Advisory", url: "/services/advisory" },
]

export default function AdvisoryPage() {
  return (
    <>
      <DetailedServiceSchema
        name="Business Advisory & Consulting Services in Thailand"
        description="Expert business advisory and consulting for foreign companies operating in Thailand."
        url="/services/advisory"
        serviceType="Business Consulting Service"
        datePublished="2024-01-15"
        dateModified="2025-06-20"
        priceRange="฿฿฿"
        aggregateRating={{ ratingValue: "5.0", reviewCount: "38" }}
        breadcrumb={breadcrumbItems}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceHowToSchema serviceName="Business Advisory" steps={howToSteps} totalTime="P7D" />
      <AuthorSchema
        name="PND50 Advisory Team"
        jobTitle="Business Consultants"
        description="Senior consultants with deep expertise in Thai business regulations and market entry strategies"
        credentials={["MBA", "Certified Management Consultant"]}
      />

      <ServicePageClient
        title="Business Advisory in Thailand"
        description="Clear, practical guidance for foreign businesses in Thailand. We help expat entrepreneurs and foreign investors make confident decisions with expert advice on accounting, compliance, and business strategy."
        icon={<Lightbulb className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Need Expert Advice?"
        breadcrumbItems={breadcrumbItems}
      />
    </>
  )
}
