import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PND50 | บริการภาษีและบัญชีมืออาชีพสำหรับธุรกิจไทย",
  description: "บริการยื่น PND50 วางแผนภาษี และบัญชีครบวงจรสำหรับธุรกิจในประเทศไทย ด้วยทีมผู้เชี่ยวชาญและเทคโนโลยี AI",
  openGraph: {
    title: "PND50 | บริการภาษีและบัญชีมืออาชีพ",
    description: "ปรับปรุงการยื่น PND50 การวางแผนภาษี และบัญชีด้วยทีมงานมืออาชีพ",
    locale: "th_TH",
  },
  alternates: {
    canonical: "https://pnd50.com/th",
    languages: {
      "en-US": "https://pnd50.com",
      en: "https://pnd50.com",
      "th-TH": "https://pnd50.com/th",
      th: "https://pnd50.com/th",
      "x-default": "https://pnd50.com",
    },
  },
}

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
