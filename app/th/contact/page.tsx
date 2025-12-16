import ContactClient from "@/app/contact/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ติดต่อเรา | PND50 บริการบัญชีและภาษี",
  description:
    "ติดต่อ PND50 สำหรับคำปรึกษาด้านบัญชีและภาษีในประเทศไทย โทร: +66 2 017 2949 อีเมล: info@pnd50.com พร้อมให้บริการคุณ 24/7",
  openGraph: {
    title: "ติดต่อเรา | PND50",
    description: "พร้อมให้คำปรึกษาด้านบัญชีและภาษีในไทย",
    locale: "th_TH",
  },
}

export default function ContactPageThai() {
  return <ContactClient />
}
