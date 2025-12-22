import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"

export const metadata: Metadata = {
  title: "关于我们 | PND50 - 泰国会计事务所",
  description: "PND50是一家位于泰国的会计和咨询公司，帮助外资企业清晰、自信地处理泰国会计和合规事务。",
  alternates: {
    canonical: "https://pnd50.com/cn/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      zh: "https://pnd50.com/cn/about",
    },
  },
}

export default function ChineseAboutPage() {
  return <LocalizedAboutPage locale="cn" />
}
