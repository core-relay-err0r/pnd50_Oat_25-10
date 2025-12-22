import type React from "react"
// Case Studies layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.caseStudies.title,
  description: pageMetadata.caseStudies.description,
  openGraph: {
    title: pageMetadata.caseStudies.title,
    description: pageMetadata.caseStudies.description,
    url: `${siteConfig.url}/case-studies`,
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
