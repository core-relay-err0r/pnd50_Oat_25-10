import FAQClient from "@/app/faq/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย | PND50",
  description: "คำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับบริการบัญชีและภาษีของ PND50 การยื่น PND50, VAT, ภาษีหัก ณ ที่จ่าย และอื่นๆ",
  openGraph: {
    title: "คำถามที่พบบ่อย | PND50",
    description: "คำตอบเกี่ยวกับบริการบัญชีและภาษีในไทย",
    locale: "th_TH",
  },
}

export default function FAQPageThai() {
  return <FAQClient />
}
