import type React from "react"
// Calculator layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.calculator.title,
  description: pageMetadata.calculator.description,
  keywords: siteConfig.keywords.calculator,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${siteConfig.url}/calculator`,
  },
  openGraph: {
    title: pageMetadata.calculator.title,
    description: pageMetadata.calculator.description,
    url: `${siteConfig.url}/calculator`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: pageMetadata.calculator.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageMetadata.calculator.title,
    description: pageMetadata.calculator.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Fee Calculator", url: "/calculator" },
        ]}
      />
      {children}
    </>
  )
}
