import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"

export const metadata: Metadata = {
  title: "FAQ | PND50 - Бухгалтерия и налоги в Таиланде",
  description: "Чёткие ответы о бухгалтерии, налогах и регистрации бизнеса в Таиланде — объяснённые простым языком.",
  alternates: {
    canonical: "https://pnd50.com/ru/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      zh: "https://pnd50.com/cn/faq",
    },
  },
}

export default function RussianFAQPage() {
  return <LocalizedFAQPage locale="ru" />
}
