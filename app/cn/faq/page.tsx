import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.cn.faq.title,
  description: localizedPageMetadata.cn.faq.description,
  keywords: localizedPageMetadata.cn.faq.keywords,
  alternates: {
    canonical: "https://pnd50.com/cn/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      "zh-CN": "https://pnd50.com/cn/faq",
    },
  },
  openGraph: {
    title: localizedPageMetadata.cn.faq.title,
    description: localizedPageMetadata.cn.faq.description,
    locale: "zh_CN",
    type: "website",
  },
}

export default function ChineseFAQPage() {
  return <LocalizedFAQPage locale="cn" />
}
