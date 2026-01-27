import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from "@/components/seo/structured-data"

const focusedKeywords = [
  "PND50",
  "ภ.ง.ด.50",
  "P.N.D.50",
  "ภงด50",
  "PND50 accounting Thailand",
  "PND50 tax services",
  "ภ.ง.ด.50 บริการบัญชี",
  "PND50 corporate tax return Thailand",
  "ภ.ง.ด.50 แบบแสดงรายการภาษี",
  "accounting Thailand foreign business",
  "tax consultant Bangkok",
]

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PND50 | Accounting & Tax Services for Foreign Businesses in Thailand",
    template: `%s | PND50`,
  },
  description:
    "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50 (P.N.D.50). Expert accounting, tax filing, and business setup services for foreign-owned companies in Thailand.",
  keywords: focusedKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: "PND50 Thailand",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: siteConfig.alternateLocale,
    url: siteConfig.url,
    siteName: "PND50",
    title: "PND50 | Accounting & Tax Services Thailand",
    description:
      "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50. Expert accounting, tax filing, and business setup for foreign-owned companies.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PND50 - Accounting & Tax Services for Foreign Businesses in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PND50 | Accounting & Tax Services Thailand",
    description:
      "PND50 — named after Thailand's corporate tax form ภ.ง.ด.50. Expert accounting for foreign-owned companies.",
    images: [siteConfig.ogImage],
    creator: "@pnd50",
    site: "@pnd50",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "business",
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebsiteSchema />
      {children}
    </>
  )
}
