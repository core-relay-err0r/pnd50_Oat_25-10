import type { Metadata } from "next"
import LocalizedAboutPage from "@/components/localized/about-page"

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | PND50 - สำนักงานบัญชีในประเทศไทย",
  description:
    "PND50 เป็นสำนักงานบัญชีและที่ปรึกษาในประเทศไทย ช่วยเหลือธุรกิจที่เป็นเจ้าของโดยชาวต่างชาติในการจัดการบัญชีและการปฏิบัติตามกฎระเบียบไทย",
  alternates: {
    canonical: "https://pnd50.com/th/about",
    languages: {
      en: "https://pnd50.com/about",
      th: "https://pnd50.com/th/about",
      ru: "https://pnd50.com/ru/about",
      zh: "https://pnd50.com/cn/about",
    },
  },
}

export default function ThaiAboutPage() {
  return <LocalizedAboutPage locale="th" />
}
