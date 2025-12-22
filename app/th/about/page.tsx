import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.th.about.title,
  description: localizedPageMetadata.th.about.description,
  keywords: localizedPageMetadata.th.about.keywords,
  alternates: {
    canonical: "https://pnd50.com/th/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      "zh-CN": "https://pnd50.com/cn/about",
    },
  },
  openGraph: {
    title: localizedPageMetadata.th.about.title,
    description: localizedPageMetadata.th.about.description,
    locale: "th_TH",
    type: "website",
  },
}

export default function ThaiAboutPage() {
  return <LocalizedAboutPage locale="th" />
}
