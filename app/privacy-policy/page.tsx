import { Shield, Eye, Lock, Users, FileText, Clock, Globe, Mail } from "lucide-react"
import CTASection from "@/components/layout/CTASection"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-sky-100">
              <Shield className="w-4 h-4" />
              Legal
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mb-4">
              At PND50, we take your privacy seriously. This policy explains how we collect, use, and protect your
              personal information.
            </p>
            <p className="text-sm text-slate-400">Last updated: January 2025</p>
          </div>
        </div>
      </div>

      {/* Content Section - All sections visible */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Quick Summary */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">Quick Summary</h2>
              </div>
              <div className="space-y-3 text-slate-600 leading-relaxed">
                <p>Here's what you need to know about your privacy with PND50:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>
                      We collect only the information necessary to provide our accounting and advisory services
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>Your data is encrypted and stored securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>We never sell your personal information to third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                    <span>You have the right to access, update, or delete your data at any time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What Information We Collect */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Users className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">What Information We Collect</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Personal Information You Provide</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Contact details:</strong> Email address, phone number, and mailing address
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Identity information:</strong> First and last name
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Business information:</strong> Company name, tax ID, and business address
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Information We Collect Automatically</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Device information:</strong> IP address, browser type, and operating system
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Usage patterns:</strong> Pages visited, time spent, and navigation paths
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sky-500 font-bold mt-0.5">✓</span>
                      <span>
                        <strong>Location data:</strong> General geographic location based on IP address
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">How We Use Your Information</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Provide Our Services</h4>
                  <p className="text-sm text-slate-600">
                    Deliver accounting and advisory services, manage your account, and process your requests.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Communicate With You</h4>
                  <p className="text-sm text-slate-600">
                    Send important updates, respond to inquiries, and provide customer support.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Improve Our Services</h4>
                  <p className="text-sm text-slate-600">
                    Analyze usage patterns, fix technical issues, and develop new features.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                  <h4 className="font-semibold text-slate-800 mb-2">Ensure Security</h4>
                  <p className="text-sm text-slate-600">
                    Protect against fraud, unauthorized access, and other security threats.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Share Your Information */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">How We Share Your Information</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600">
                  We respect your privacy and only share your information in limited circumstances:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">With Service Providers</h4>
                    <p className="text-sm text-slate-600">
                      We work with trusted third-party companies to help us provide our services. These companies are
                      required to protect your data.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">For Legal Reasons</h4>
                    <p className="text-sm text-slate-600">
                      We may disclose your information if required by law, court order, or government request.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold text-slate-800 mb-1">With Your Consent</h4>
                    <p className="text-sm text-slate-600">
                      We may share your information with other parties when you give us explicit permission.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200/50">
                  <p className="text-red-700 font-medium text-sm">
                    We never sell your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* How Long We Keep Your Data */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">How Long We Keep Your Data</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>We only keep your personal information for as long as necessary to:</p>
                <ol className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      1
                    </span>
                    <span>Provide our services to you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      2
                    </span>
                    <span>Comply with legal and regulatory requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      3
                    </span>
                    <span>Resolve disputes and enforce our agreements</span>
                  </li>
                </ol>
                <p className="text-sm bg-slate-50 p-4 rounded-xl">
                  After this period, we securely delete or anonymize your information so it can no longer identify you.
                </p>
              </div>
            </div>

            {/* Your Privacy Rights */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">Your Privacy Rights</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600">You have important rights regarding your personal information:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                    <h4 className="font-semibold text-slate-800 mb-1">Access Your Data</h4>
                    <p className="text-sm text-slate-600">
                      Request a copy of the personal information we hold about you.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-teal-50 border border-teal-100">
                    <h4 className="font-semibold text-slate-800 mb-1">Correct Your Data</h4>
                    <p className="text-sm text-slate-600">Update or correct any inaccurate information.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <h4 className="font-semibold text-slate-800 mb-1">Delete Your Data</h4>
                    <p className="text-sm text-slate-600">Request deletion of your personal information.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <h4 className="font-semibold text-slate-800 mb-1">Opt-Out</h4>
                    <p className="text-sm text-slate-600">Unsubscribe from marketing communications at any time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                <h2 className="font-semibold text-lg text-slate-800">Contact Us</h2>
              </div>
              <div className="space-y-4 text-slate-600">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100">
                  <p className="font-semibold text-slate-800 mb-2">PND50 Co., Ltd.</p>
                  <p className="text-sm">Email: info@pnd50.com</p>
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
