import type { Metadata } from "next"
import LocalizedContactPage from "@/components/localized/contact-page"

export const metadata: Metadata = {
  title: "ติดต่อเรา | PND50 - บริการบัญชีในประเทศไทย",
  description: "ติดต่อ PND50 สำหรับบริการบัญชี ภาษี และที่ปรึกษาธุรกิจในประเทศไทย เราพร้อมช่วยเหลือธุรกิจของคุณ",
  alternates: {
    canonical: "https://pnd50.com/th/contact",
    languages: {
      en: "https://pnd50.com/contact",
      th: "https://pnd50.com/th/contact",
      ru: "https://pnd50.com/ru/contact",
      zh: "https://pnd50.com/cn/contact",
    },
  },
}

export default function ThaiContactPage() {
  return <LocalizedContactPage locale="th" />
}
