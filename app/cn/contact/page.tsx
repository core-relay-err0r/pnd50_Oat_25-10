import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.cn.contact.title,
  description: localizedPageMetadata.cn.contact.description,
  keywords: localizedPageMetadata.cn.contact.keywords,
  alternates: {
    canonical: "https://pnd50.com/cn/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      "zh-CN": "https://pnd50.com/cn/contact",
    },
  },
  openGraph: {
    title: localizedPageMetadata.cn.contact.title,
    description: localizedPageMetadata.cn.contact.description,
    locale: "zh_CN",
    type: "website",
  },
}

export default function ChineseContactPage() {
  return <LocalizedContactPage locale="cn" />
}
