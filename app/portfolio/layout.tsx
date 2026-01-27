import type React from "react"
// Portfolio layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.portfolio.title,
  description: pageMetadata.portfolio.description,
  openGraph: {
    title: pageMetadata.portfolio.title,
    description: pageMetadata.portfolio.description,
    url: `${siteConfig.url}/portfolio`,
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]}
      />
      {children}
    </>
  )
}
