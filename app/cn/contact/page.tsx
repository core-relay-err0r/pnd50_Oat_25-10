import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"

export const metadata: Metadata = {
  title: "联系我们 | PND50 - 泰国会计服务",
  description: "联系PND50获取泰国会计、税务和商业咨询服务。我们随时为您的业务提供帮助。",
  alternates: {
    canonical: "https://pnd50.com/cn/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      zh: "https://pnd50.com/cn/contact",
    },
  },
}

export default function ChineseContactPage() {
  return <LocalizedContactPage locale="cn" />
}
