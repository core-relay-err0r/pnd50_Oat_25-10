import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.ru.faq.title,
  description: localizedPageMetadata.ru.faq.description,
  keywords: localizedPageMetadata.ru.faq.keywords,
  alternates: {
    canonical: "https://pnd50.com/ru/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      "zh-CN": "https://pnd50.com/cn/faq",
    },
  },
  openGraph: {
    title: localizedPageMetadata.ru.faq.title,
    description: localizedPageMetadata.ru.faq.description,
    locale: "ru_RU",
    type: "website",
  },
}

export default function RussianFAQPage() {
  return <LocalizedFAQPage locale="ru" />
}
