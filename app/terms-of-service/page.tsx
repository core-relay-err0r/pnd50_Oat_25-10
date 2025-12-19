import { FileText, Scale, AlertTriangle, ShieldCheck, Gavel } from "lucide-react"
import CTASection from "@/components/layout/CTASection"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-100">
              <Gavel className="w-4 h-4" />
              Legal
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-4">
              Please read these terms carefully before using our accounting and advisory services.
            </p>
            <p className="text-sm text-slate-400">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Content Section - All sections visible */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 1. Acceptance of Terms */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>
                  Welcome to PND50. By accessing or using our website and services, you agree to be bound by these Terms
                  of Service. If you do not agree with any part of these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use our accounting, tax, and
                  advisory services.
                </p>
              </div>
            </div>

            {/* 2. Definitions */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">2. Definitions</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>In these Terms of Service:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">"PND50", "we", "us", "our"</strong> — refers to PND50 Co.,
                      Ltd., an accounting and advisory firm registered in Thailand.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">"You", "your"</strong> — refers to the individual or entity
                      accessing our services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">"Services"</strong> — refers to accounting, tax filing,
                      payroll, corporate registration, and advisory services provided by PND50.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Our Services */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">3. Our Services</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>PND50 provides professional accounting and business advisory services including:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Monthly bookkeeping and financial reporting</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Corporate and personal tax filing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Payroll processing and social security</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Company registration and DBD filings</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Business advisory and compliance</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
                    <span className="text-sky-500 font-bold">✓</span>
                    <span className="text-sm">Audit support and financial analysis</span>
                  </div>
                </div>
                <p className="text-sm bg-slate-50 p-4 rounded-xl">
                  All services are performed in accordance with Thai accounting standards and tax regulations.
                </p>
              </div>
            </div>

            {/* 4. Your Obligations */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">4. Your Obligations</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>When using our services, you agree to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      1
                    </span>
                    <span>Provide accurate and complete information for all filings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      2
                    </span>
                    <span>Respond promptly to requests for documents or clarification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      3
                    </span>
                    <span>Review and approve documents before submission deadlines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      4
                    </span>
                    <span>Pay for services according to agreed terms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      5
                    </span>
                    <span>Notify us of any changes affecting your business or filings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Restrictions */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">5. Restrictions</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>You are prohibited from:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Using our services for any unlawful purpose</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Providing false or misleading information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Sharing confidential reports or advice with unauthorized third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Attempting to access our systems or data without authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Reselling or redistributing our services without permission</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Limitation of Liability */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">6. Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>
                  PND50 exercises professional care in providing services. However, our liability is limited to the fees
                  paid for the specific service in question.
                </p>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/50">
                  <p className="text-amber-700 text-sm">
                    <strong>Important:</strong> We are not liable for penalties or losses resulting from inaccurate
                    information provided by you, late approval of documents, or circumstances beyond our reasonable
                    control.
                  </p>
                </div>
                <p>
                  Our advice is based on current Thai laws and regulations. We recommend reviewing any significant
                  business decisions with legal counsel.
                </p>
              </div>
            </div>

            {/* 7. Confidentiality */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">7. Confidentiality</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>
                  We maintain strict confidentiality of all client information. Your financial data, business details,
                  and personal information are protected and will not be disclosed to third parties except:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>When required by Thai law or government authorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>With your explicit written consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>To our professional advisors bound by confidentiality</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. Payment Terms */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">8. Payment Terms</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>Payment terms are specified in your service agreement. Generally:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>Monthly services are billed at the beginning of each month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>One-time services require payment upon completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>Late payments may incur additional fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>All fees are in Thai Baht unless otherwise specified</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 9. Termination */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">9. Termination</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>Either party may terminate services with 30 days written notice. Upon termination:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>Outstanding fees become immediately due</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>We will complete any filings in progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>All your documents will be returned or transferred as requested</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>Confidentiality obligations continue after termination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 10. Governing Law */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Gavel className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">10. Governing Law</h2>
              </div>
              <div className="space-y-3 text-slate-600">
                <p>
                  These Terms of Service are governed by the laws of the Kingdom of Thailand. Any disputes shall be
                  submitted to the jurisdiction of the Thai courts in Bangkok.
                </p>
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-semibold text-slate-800 mb-2">Contact for Legal Inquiries</p>
                  <p className="text-sm">PND50 Co., Ltd.</p>
                  <p className="text-sm">Email: oat3653377@gmail.com</p>
                  <p className="text-sm">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
