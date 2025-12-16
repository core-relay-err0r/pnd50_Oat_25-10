import type React from "react"
// Services layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  keywords: siteConfig.keywords.services,
  openGraph: {
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    url: `${siteConfig.url}/services`,
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
