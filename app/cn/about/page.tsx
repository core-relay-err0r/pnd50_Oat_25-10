import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.cn.about.title,
  description: localizedPageMetadata.cn.about.description,
  keywords: localizedPageMetadata.cn.about.keywords,
  alternates: {
    canonical: "https://pnd50.com/cn/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      "zh-CN": "https://pnd50.com/cn/about",
    },
  },
  openGraph: {
    title: localizedPageMetadata.cn.about.title,
    description: localizedPageMetadata.cn.about.description,
    locale: "zh_CN",
    type: "website",
  },
}

export default function ChineseAboutPage() {
  return <LocalizedAboutPage locale="cn" />
}
