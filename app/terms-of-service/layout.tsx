import type React from "react"
// Terms of Service layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: pageMetadata.termsOfService.title,
  description: pageMetadata.termsOfService.description,
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: pageMetadata.termsOfService.title,
    description: pageMetadata.termsOfService.description,
    url: `${siteConfig.url}/terms-of-service`,
  },
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
