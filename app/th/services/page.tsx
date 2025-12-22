import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"
import { localizedPageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: localizedPageMetadata.th.services.title,
  description: localizedPageMetadata.th.services.description,
  keywords: localizedPageMetadata.th.services.keywords,
  alternates: {
    canonical: "https://pnd50.com/th/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      "zh-CN": "https://pnd50.com/cn/services",
    },
  },
  openGraph: {
    title: localizedPageMetadata.th.services.title,
    description: localizedPageMetadata.th.services.description,
    locale: "th_TH",
    type: "website",
  },
}

export default function ThaiServicesPage() {
  return <LocalizedServicesPage locale="th" />
}
