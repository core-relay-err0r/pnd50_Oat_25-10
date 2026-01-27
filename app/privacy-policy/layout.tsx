import type React from "react"
// Privacy Policy layout with metadata
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: pageMetadata.privacyPolicy.title,
  description: pageMetadata.privacyPolicy.description,
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: pageMetadata.privacyPolicy.title,
    description: pageMetadata.privacyPolicy.description,
    url: `${siteConfig.url}/privacy-policy`,
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
