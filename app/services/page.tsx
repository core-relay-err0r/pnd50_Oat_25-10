import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import ServicesPageClient from "./services-page-client"

export const metadata: Metadata = {
  title: "Business Services in Thailand | Accounting, Tax, Payroll, Company Setup | PND50",
  description:
    "Complete business services for foreign companies in Thailand. Accounting, tax filing, payroll management, company registration, and business advisory. Trusted by 200+ expat businesses.",
  keywords: [
    "business services Thailand",
    "accounting services Thailand",
    "tax services Thailand",
    "payroll Thailand",
    "company registration Thailand",
    "open business Thailand",
    "foreign company Thailand",
    "expat business Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
    languages: {
      en: `${siteConfig.url}/services`,
      "en-US": `${siteConfig.url}/services`,
      "en-GB": `${siteConfig.url}/services`,
      "en-SG": `${siteConfig.url}/services`,
      "en-AU": `${siteConfig.url}/services`,
      "x-default": `${siteConfig.url}/services`,
    },
  },
  openGraph: {
    title: "Business Services in Thailand | PND50",
    description:
      "Complete business services for foreign companies in Thailand. Accounting, tax, payroll, company setup and more.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Services in Thailand | PND50",
    description:
      "Complete business services for foreign companies in Thailand. Accounting, tax, payroll, company setup and more.",
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

export default function ServicesPage() {
  return <ServicesPageClient />
}
