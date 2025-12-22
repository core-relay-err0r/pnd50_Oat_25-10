import type React from "react"
import type { Metadata } from "next"
import { LocaleSetter } from "@/components/locale-setter"
import { localizedKeywords, localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.th.home.title,
  description: localizedPageMetadata.th.home.description,
  keywords: [
    ...localizedKeywords.th.primary,
    ...localizedKeywords.th.secondary,
    ...localizedKeywords.th.longTail.slice(0, 5),
  ],
  alternates: {
    canonical: "https://pnd50.com/th",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: localizedPageMetadata.th.home.title,
    description: localizedPageMetadata.th.home.description,
    locale: "th_TH",
    type: "website",
    siteName: "PND50",
    url: "https://pnd50.com/th",
  },
  twitter: {
    card: "summary_large_image",
    title: localizedPageMetadata.th.home.title,
    description: localizedPageMetadata.th.home.description,
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

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocaleSetter locale="th" />
      {children}
    </>
  )
}
