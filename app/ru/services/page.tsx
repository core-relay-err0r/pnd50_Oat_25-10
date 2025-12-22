import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.ru.services.title,
  description: localizedPageMetadata.ru.services.description,
  keywords: localizedPageMetadata.ru.services.keywords,
  alternates: {
    canonical: "https://pnd50.com/ru/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      "zh-CN": "https://pnd50.com/cn/services",
    },
  },
  openGraph: {
    title: localizedPageMetadata.ru.services.title,
    description: localizedPageMetadata.ru.services.description,
    locale: "ru_RU",
    type: "website",
  },
}

export default function RussianServicesPage() {
  return <LocalizedServicesPage locale="ru" />
}
