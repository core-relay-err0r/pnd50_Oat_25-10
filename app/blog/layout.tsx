import type React from "react"
import type { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: {
    template: "%s | PND50 Blog",
    default: "PND50 Blog | ภ.ง.ด.50 Thailand Tax Guide",
  },
  description:
    "Expert guides on PND50 (ภ.ง.ด.50) tax filing, Thailand corporate tax, and business compliance. Learn about PND50 deadlines, documents, penalties, and filing requirements for foreign companies.",
  keywords: [
    "PND50",
    "ภ.ง.ด.50",
    "PND50 Thailand",
    "PND50 filing",
    "PND50 tax form",
    "PND50 deadline",
    "PND50 documents",
    "PND50 penalties",
    "PND50 vs PND51",
    "Thailand corporate tax",
    "Thailand tax filing",
    "Thai tax form",
    "corporate income tax Thailand",
    "foreign company tax Thailand",
    "Revenue Department Thailand",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "PND50 Blog | ภ.ง.ด.50 Thailand Tax Guide",
    description:
      "Expert guides on PND50 (ภ.ง.ด.50) tax filing, deadlines, documents, and compliance for foreign companies in Thailand.",
    url: `${siteConfig.url}/blog`,
    siteName: "PND50",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-blog.png`,
        width: 1200,
        height: 630,
        alt: "PND50 Blog - Thailand Tax Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PND50 Blog | ภ.ง.ด.50 Thailand Tax Guide",
    description: "Expert guides on PND50 (ภ.ง.ด.50) tax filing for foreign companies in Thailand.",
    images: [`${siteConfig.url}/og-blog.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
