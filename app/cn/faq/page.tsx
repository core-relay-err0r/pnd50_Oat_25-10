import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"

export const metadata: Metadata = {
  title: "常见问题 | PND50 - 泰国会计和税务",
  description: "关于泰国会计、税务和业务设立的清晰答案——用简单语言解释。",
  alternates: {
    canonical: "https://pnd50.com/cn/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      zh: "https://pnd50.com/cn/faq",
    },
  },
}

export default function ChineseFAQPage() {
  return <LocalizedFAQPage locale="cn" />
}
