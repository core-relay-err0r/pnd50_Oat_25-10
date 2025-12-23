import type React from "react"
// Contact layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  keywords: siteConfig.keywords.contact,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Contact PND50 Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      {children}
    </>
  )
}
