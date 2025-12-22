import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"

export const metadata: Metadata = {
  title: "Услуги | PND50 - Бухгалтерские и налоговые услуги в Таиланде",
  description:
    "Комплексные бухгалтерские, налоговые, зарплатные и корпоративные услуги для иностранных компаний в Таиланде от команды экспертов.",
  alternates: {
    canonical: "https://pnd50.com/ru/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      zh: "https://pnd50.com/cn/services",
    },
  },
}

export default function RussianServicesPage() {
  return <LocalizedServicesPage locale="ru" />
}
