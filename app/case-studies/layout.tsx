import type React from "react"
// Case Studies layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.caseStudies.title,
  description: pageMetadata.caseStudies.description,
  alternates: {
    canonical: `${siteConfig.url}/case-studies`,
  },
  openGraph: {
    title: pageMetadata.caseStudies.title,
    description: pageMetadata.caseStudies.description,
    url: `${siteConfig.url}/case-studies`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "PND50 Client Success Stories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.caseStudies.title,
    description: pageMetadata.caseStudies.description,
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ]}
      />
      {children}
    </>
  )
}
