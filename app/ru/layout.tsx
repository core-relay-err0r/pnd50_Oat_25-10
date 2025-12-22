import type React from "react"
import type { Metadata } from "next"
import { LocaleSetter } from "@/components/locale-setter"
import { localizedKeywords, localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.ru.home.title,
  description: localizedPageMetadata.ru.home.description,
  keywords: [
    ...localizedKeywords.ru.primary,
    ...localizedKeywords.ru.secondary,
    ...localizedKeywords.ru.longTail.slice(0, 5),
  ],
  alternates: {
    canonical: "https://pnd50.com/ru",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: localizedPageMetadata.ru.home.title,
    description: localizedPageMetadata.ru.home.description,
    locale: "ru_RU",
    type: "website",
    siteName: "PND50",
    url: "https://pnd50.com/ru",
  },
  twitter: {
    card: "summary_large_image",
    title: localizedPageMetadata.ru.home.title,
    description: localizedPageMetadata.ru.home.description,
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

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocaleSetter locale="ru" />
      {children}
    </>
  )
}
