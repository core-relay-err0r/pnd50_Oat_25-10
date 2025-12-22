import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.th.contact.title,
  description: localizedPageMetadata.th.contact.description,
  keywords: localizedPageMetadata.th.contact.keywords,
  alternates: {
    canonical: "https://pnd50.com/th/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      "zh-CN": "https://pnd50.com/cn/contact",
    },
  },
  openGraph: {
    title: localizedPageMetadata.th.contact.title,
    description: localizedPageMetadata.th.contact.description,
    locale: "th_TH",
    type: "website",
  },
}

export default function ThaiContactPage() {
  return <LocalizedContactPage locale="th" />
}
