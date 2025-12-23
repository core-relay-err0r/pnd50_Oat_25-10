import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: {
    template: "%s | PND50 Blog",
    default: "PND50 Blog | ภ.ง.ด.50 Thailand Tax Guide",
  },
  description:
    "Expert guides on PND50 (ภ.ง.ด.50) tax filing, accounting, and business compliance for foreign companies in Thailand.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
