import type { Metadata } from "next"
import LocalizedServicesPage from "@/components/localized/services-page"

export const metadata: Metadata = {
  title: "บริการ | PND50 - บริการบัญชีและภาษีในประเทศไทย",
  description: "บริการบัญชี ภาษี เงินเดือน และจดทะเบียนบริษัทครบวงจรสำหรับธุรกิจต่างชาติในประเทศไทย ให้บริการโดยทีมผู้เชี่ยวชาญ",
  alternates: {
    canonical: "https://pnd50.com/th/services",
    languages: {
      en: "https://pnd50.com/services",
      th: "https://pnd50.com/th/services",
      ru: "https://pnd50.com/ru/services",
      zh: "https://pnd50.com/cn/services",
    },
  },
}

export default function ThaiServicesPage() {
  return <LocalizedServicesPage locale="th" />
}
