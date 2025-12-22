import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"

export const metadata: Metadata = {
  title: "服务 | PND50 - 泰国会计和税务服务",
  description: "为泰国外资企业提供全面的会计、税务、薪资和公司注册服务，由专业团队提供支持。",
  alternates: {
    canonical: "https://pnd50.com/cn/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      zh: "https://pnd50.com/cn/services",
    },
  },
}

export default function ChineseServicesPage() {
  return <LocalizedServicesPage locale="cn" />
}
