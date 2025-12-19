import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PND50 - Бухгалтерские и налоговые услуги в Таиланде | AI Boutique Accounting",
  description:
    "Бухгалтерские, налоговые и консалтинговые услуги для иностранцев в Таиланде. Команда экспертов, говорящих на вашем языке. ИИ делает работу в 5 раз быстрее и без ошибок.",
  keywords: [
    "бухгалтерские услуги Таиланд",
    "налоги для иностранцев",
    "бизнес консалтинг Таиланд",
    "PND50",
    "ИИ бухгалтерия",
    "регистрация компании",
  ],
  alternates: {
    canonical: "https://pnd50.com/ru",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: "PND50 - Бухгалтерские и налоговые услуги в Таиланде",
    description: "Бухгалтерские, налоговые и консалтинговые услуги для иностранцев в Таиланде",
    locale: "ru_RU",
    type: "website",
  },
}

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
