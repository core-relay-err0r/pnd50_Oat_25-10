import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PND50 - 泰国会计和税务服务 | AI Boutique Accounting",
  description:
    "为在泰国的外国人提供会计、税务和商业咨询服务。我们的专家团队说您的语言。AI 使工作速度提高 5 倍且零错误。",
  keywords: ["泰国会计服务", "外国人税务", "泰国商业咨询", "PND50", "AI 会计", "公司注册"],
  alternates: {
    canonical: "https://pnd50.com/cn",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: "PND50 - 泰国会计和税务服务",
    description: "为在泰国的外国人提供会计、税务和商业咨询服务",
    locale: "zh_CN",
    type: "website",
  },
}

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
