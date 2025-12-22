import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"

export const metadata: Metadata = {
  title: "О нас | PND50 - Бухгалтерская фирма в Таиланде",
  description:
    "PND50 — бухгалтерская и консалтинговая фирма в Таиланде, помогающая компаниям с иностранным владением разобраться в тайском бухгалтерском учёте и соблюдении требований.",
  alternates: {
    canonical: "https://pnd50.com/ru/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      zh: "https://pnd50.com/cn/about",
    },
  },
}

export default function RussianAboutPage() {
  return <LocalizedAboutPage locale="ru" />
}
