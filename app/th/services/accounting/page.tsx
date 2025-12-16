import AccountingClient from "@/app/services/accounting/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "บริการบัญชี | PND50",
  description: "บริการบัญชีครบวงจรสำหรับธุรกิจในประเทศไทย จัดการบัญชี รายงานทางการเงิน และการปฏิบัติตามกฎระเบียบ",
  openGraph: {
    locale: "th_TH",
  },
}

export default function AccountingPageThai() {
  return <AccountingClient />
}
