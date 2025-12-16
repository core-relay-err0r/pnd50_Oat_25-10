// Services page metadata export
import type { Metadata } from "next"
import { pageMetadata, siteConfig } from "@/lib/seo-config"

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
