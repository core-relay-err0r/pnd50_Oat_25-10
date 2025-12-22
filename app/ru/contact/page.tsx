import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.ru.contact.title,
  description: localizedPageMetadata.ru.contact.description,
  keywords: localizedPageMetadata.ru.contact.keywords,
  alternates: {
    canonical: "https://pnd50.com/ru/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      "zh-CN": "https://pnd50.com/cn/contact",
    },
  },
  openGraph: {
    title: localizedPageMetadata.ru.contact.title,
    description: localizedPageMetadata.ru.contact.description,
    locale: "ru_RU",
    type: "website",
  },
}

export default function RussianContactPage() {
  return <LocalizedContactPage locale="ru" />
}
