import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.th.faq.title,
  description: localizedPageMetadata.th.faq.description,
  keywords: localizedPageMetadata.th.faq.keywords,
  alternates: {
    canonical: "https://pnd50.com/th/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      "zh-CN": "https://pnd50.com/cn/faq",
    },
  },
  openGraph: {
    title: localizedPageMetadata.th.faq.title,
    description: localizedPageMetadata.th.faq.description,
    locale: "th_TH",
    type: "website",
  },
}

export default function ThaiFAQPage() {
  return <LocalizedFAQPage locale="th" />
}
