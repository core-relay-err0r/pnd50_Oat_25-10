// Homepage metadata export (since page.tsx is a client component)
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"

export const homeMetadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  keywords: siteConfig.keywords.home,
  openGraph: {
    title: pageMetadata.home.title,
    description: pageMetadata.home.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Boutique Accounting`,
      },
    ],
  },
}
