import type { Metadata } from "next"
import { Lightbulb } from "lucide-react"
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data"
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
  "Strategic business guidance",
  "Compliance advisory",
  "Business planning support",
  "Market entry consulting",
  "Financial analysis",
  "Expert consultation in English",
]

const faqs = [
  {
    question: "What kind of business advice do you provide in Thailand?",
    answer:
      "We provide practical guidance on accounting, tax planning, compliance requirements, business structuring, and market entry strategies for foreign businesses operating in Thailand.",
  },
  {
    question: "Can you help me understand Thai business regulations?",
    answer:
      "Yes, we help foreign business owners navigate Thai regulations including company law, tax requirements, labor law, and industry-specific compliance requirements.",
  },
  {
    question: "Do you offer ongoing advisory or one-time consultations?",
    answer:
      "Both! We offer one-time consultations for specific questions and ongoing advisory retainers for businesses that need regular strategic support in Thailand.",
  },
]

export default function AdvisoryPage() {
  return (
    <>
      <ServiceSchema
        name="Business Advisory & Consulting Services in Thailand"
        description="Expert business advisory and consulting for foreign companies operating in Thailand."
        url="/services/advisory"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Business Advisory in Thailand", url: "/services/advisory" },
        ]}
      />
      <FAQSchema faqs={faqs} />

      <ServicePageClient
        title="Business Advisory in Thailand"
        description="Clear, practical guidance for foreign businesses in Thailand. We help expat entrepreneurs and foreign investors make confident decisions with expert advice on accounting, compliance, and business strategy."
        icon={<Lightbulb className="w-6 h-6 text-white" />}
        features={features}
        faqs={faqs}
        ctaText="Need Expert Advice?"
      />
    </>
  )
}
