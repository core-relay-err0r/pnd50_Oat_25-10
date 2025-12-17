import type React from "react"
// Calculator layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.calculator.title,
  description: pageMetadata.calculator.description,
  keywords: siteConfig.keywords.calculator,
  openGraph: {
    title: pageMetadata.calculator.title,
    description: pageMetadata.calculator.description,
    url: `${siteConfig.url}/schedule`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: `${siteConfig.url}/schedule`,
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
          { name: "Schedule Consultation", url: "/schedule" },
        ]}
      />
      {children}
    </>
  )
}
