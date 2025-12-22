import type { Metadata } from "next"
import LocalizedFAQPage from "@/components/localized/faq-page"

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | PND50 - บัญชีและภาษีในประเทศไทย",
  description: "คำตอบที่ชัดเจนเกี่ยวกับบัญชี ภาษี และการจัดตั้งธุรกิจในประเทศไทย อธิบายด้วยภาษาที่เข้าใจง่าย",
  alternates: {
    canonical: "https://pnd50.com/th/faq",
    languages: {
      en: "https://pnd50.com/faq",
      th: "https://pnd50.com/th/faq",
      ru: "https://pnd50.com/ru/faq",
      zh: "https://pnd50.com/cn/faq",
    },
  },
}

export default function ThaiFAQPage() {
  return <LocalizedFAQPage locale="th" />
}
