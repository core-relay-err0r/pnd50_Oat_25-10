import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import ServicesPageClient from "./services-page-client"

export const metadata: Metadata = {
  title: "Accounting in Thailand | Open Company in Thailand | PND50",
  description:
    "Professional accounting in Thailand and company registration services. Open your company in Thailand with expert guidance. Tax filing, payroll, and business setup for foreign entrepreneurs.",
  keywords: [
    "accounting in Thailand",
    "open company in Thailand",
    "company registration Thailand",
    "start business Thailand",
    "accounting services Bangkok",
    "foreign company registration Thailand",
    "Thailand business setup",
    "expat accounting Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Accounting in Thailand | Open Company in Thailand | PND50",
    description:
      "Professional accounting and company registration in Thailand. Start your business with expert support.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Accounting in Thailand - PND50 Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounting in Thailand | Open Company in Thailand | PND50",
    description:
      "Professional accounting and company registration in Thailand. Start your business with expert support.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
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
