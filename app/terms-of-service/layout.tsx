import type React from "react"
// Terms of Service layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: pageMetadata.termsOfService.title,
  description: pageMetadata.termsOfService.description,
  alternates: {
    canonical: `${siteConfig.url}/terms-of-service`,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: pageMetadata.termsOfService.title,
    description: pageMetadata.termsOfService.description,
    url: `${siteConfig.url}/terms-of-service`,
    siteName: siteConfig.name,
    type: "website",
  },
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms-of-service" },
        ]}
      />
      {children}
    </>
  )
}
