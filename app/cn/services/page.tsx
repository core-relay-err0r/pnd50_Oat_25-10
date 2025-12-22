import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.cn.services.title,
  description: localizedPageMetadata.cn.services.description,
  keywords: localizedPageMetadata.cn.services.keywords,
  alternates: {
    canonical: "https://pnd50.com/cn/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      "zh-CN": "https://pnd50.com/cn/services",
    },
  },
  openGraph: {
    title: localizedPageMetadata.cn.services.title,
    description: localizedPageMetadata.cn.services.description,
    locale: "zh_CN",
    type: "website",
  },
}

export default function ChineseServicesPage() {
  return <LocalizedServicesPage locale="cn" />
}
