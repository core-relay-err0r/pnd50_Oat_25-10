import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.ru.about.title,
  description: localizedPageMetadata.ru.about.description,
  keywords: localizedPageMetadata.ru.about.keywords,
  alternates: {
    canonical: "https://pnd50.com/ru/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      "zh-CN": "https://pnd50.com/cn/about",
    },
  },
  openGraph: {
    title: localizedPageMetadata.ru.about.title,
    description: localizedPageMetadata.ru.about.description,
    locale: "ru_RU",
    type: "website",
  },
}

export default function RussianAboutPage() {
  return <LocalizedAboutPage locale="ru" />
}
