import StartupPackageClient from "@/app/services/packages/startup/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "แพ็คเกจสตาร์ทอัพ | PND50",
  description: "แพ็คเกจบริการครบวงจรสำหรับธุรกิจเริ่มต้นในประเทศไทย บัญชี ภาษี และการปฏิบัติตามกฎระเบียบ",
  openGraph: {
    locale: "th_TH",
  },
}

export default function StartupPackagePageThai() {
  return <StartupPackageClient />
}
