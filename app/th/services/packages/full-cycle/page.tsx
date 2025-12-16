import FullCyclePackageClient from "@/app/services/packages/full-cycle/page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "แพ็คเกจครบวงจร | PND50",
  description: "แพ็คเกจบริการครบวงจรสำหรับธุรกิจขนาดใหญ่ในประเทศไทย บัญชี ภาษี CFO และคำปรึกษาเชิงกลยุทธ์",
  openGraph: {
    locale: "th_TH",
  },
}

export default function FullCyclePackagePageThai() {
  return <FullCyclePackageClient />
}
