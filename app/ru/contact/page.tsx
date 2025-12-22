import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"

export const metadata: Metadata = {
  title: "Контакты | PND50 - Бухгалтерские услуги в Таиланде",
  description:
    "Свяжитесь с PND50 для получения бухгалтерских, налоговых и консультационных услуг в Таиланде. Мы готовы помочь вашему бизнесу.",
  alternates: {
    canonical: "https://pnd50.com/ru/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      zh: "https://pnd50.com/cn/contact",
    },
  },
}

export default function RussianContactPage() {
  return <LocalizedContactPage locale="ru" />
}
