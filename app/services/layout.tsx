import type React from "react"
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: siteConfig.keywords.services,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    url: `${siteConfig.url}/services`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "PND50 - Accounting & Tax Services in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ServiceSchema
        name="Professional Accounting & Tax Services"
        description={pageMetadata.services.description}
        url="/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      {children}
    </>
  )
}
