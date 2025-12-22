import type React from "react"
import type { Metadata } from "next"
import { LocaleSetter } from "@/components/locale-setter"
import { localizedKeywords, localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.cn.home.title,
  description: localizedPageMetadata.cn.home.description,
  keywords: [
    ...localizedKeywords.cn.primary,
    ...localizedKeywords.cn.secondary,
    ...localizedKeywords.cn.longTail.slice(0, 5),
  ],
  alternates: {
    canonical: "https://pnd50.com/cn",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: localizedPageMetadata.cn.home.title,
    description: localizedPageMetadata.cn.home.description,
    locale: "zh_CN",
    type: "website",
    siteName: "PND50",
    url: "https://pnd50.com/cn",
  },
  twitter: {
    card: "summary_large_image",
    title: localizedPageMetadata.cn.home.title,
    description: localizedPageMetadata.cn.home.description,
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

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocaleSetter locale="cn" />
      {children}
    </>
  )
}
