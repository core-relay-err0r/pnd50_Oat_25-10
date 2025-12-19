import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PND50 - บริการบัญชีและภาษีในประเทศไทย | AI Boutique Accounting",
  description:
    "บริการบัญชี ภาษี และที่ปรึกษาธุรกิจสำหรับชาวต่างชาติในประเทศไทย ทีมผู้เชี่ยวชาญที่พูดภาษาของคุณ พร้อมระบบ AI ที่ทำให้งานเร็วขึ้น 5 เท่าและไม่มีข้อผิดพลาด",
  keywords: ["บริการบัญชีไทย", "ภาษีสำหรับชาวต่างชาติ", "ที่ปรึกษาธุรกิจไทย", "PND50", "บัญชี AI", "จดทะเบียนบริษัท"],
  alternates: {
    canonical: "https://pnd50.com/th",
    languages: {
      en: "https://pnd50.com",
      th: "https://pnd50.com/th",
      ru: "https://pnd50.com/ru",
      "zh-CN": "https://pnd50.com/cn",
    },
  },
  openGraph: {
    title: "PND50 - บริการบัญชีและภาษีในประเทศไทย",
    description: "บริการบัญชี ภาษี และที่ปรึกษาธุรกิจสำหรับชาวต่างชาติในประเทศไทย",
    locale: "th_TH",
    type: "website",
  },
}

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
