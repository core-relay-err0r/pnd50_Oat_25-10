"use client"

import { Mail, Phone, MapPin, Shield, Eye, Lock, Users, FileText, Clock, Globe } from "lucide-react"

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <p className="mt-4 text-lg text-blue-50 leading-relaxed max-w-3xl">
            At PND50, we take your privacy seriously. This policy explains how we collect, use, and protect your
            personal information when you use our services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-600" />
            Quick Summary
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>Here's what you need to know about your privacy with PND50:</p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>We collect only the information necessary to provide our accounting and advisory services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Your data is encrypted and stored securely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>We never sell your personal information to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>You have the right to access, update, or delete your data at any time</span>
              </li>
            </ul>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FileText className="w-7 h-7 text-blue-600" />
            Key Terms Explained
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To help you understand this policy better, here are some important terms we use:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Personal Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Any information that can identify you, such as your name, email, phone number, or address.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Usage Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Information about how you use our website, like which pages you visit and how long you stay.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Cookies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Small files stored on your device that help us remember your preferences and improve your experience.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Service Provider</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Third-party companies we work with to help deliver our services to you.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Users className="w-7 h-7 text-blue-600" />
            What Information We Collect
          </h2>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information You Provide</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">When you use our services, we may ask you to provide:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Contact details:</strong> Email address, phone number, and mailing address
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Identity information:</strong> First and last name
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Business information:</strong> Company name, tax ID, and business address
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">When you visit our website, we automatically collect:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Device information:</strong> IP address, browser type, and operating system
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Usage patterns:</strong> Pages visited, time spent, and navigation paths
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span>
                  <strong>Location data:</strong> General geographic location based on IP address
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lock className="w-7 h-7 text-blue-600" />
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use your information to provide and improve our services. Specifically, we use it to:
          </p>
          <div className="grid gap-4">
            <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Provide Our Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deliver accounting and advisory services, manage your account, and process your requests.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-green-600 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Communicate With You</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Send important updates, respond to inquiries, and provide customer support.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-purple-600 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Improve Our Services</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Analyze usage patterns, fix technical issues, and develop new features.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-orange-600 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Ensure Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protect against fraud, unauthorized access, and other security threats.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Globe className="w-7 h-7 text-blue-600" />
            How We Share Your Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We respect your privacy and only share your information in limited circumstances:
          </p>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">With Service Providers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work with trusted third-party companies to help us provide our services (like payment processors or
                cloud storage providers). These companies are required to protect your data and can only use it for the
                specific services they provide to us.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">For Legal Reasons</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may disclose your information if required by law, court order, or government request, or to protect
                our rights and safety.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">With Your Consent</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may share your information with other parties when you give us explicit permission to do so.
              </p>
            </div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 p-5 mt-6 rounded-r-lg">
            <p className="text-red-900 font-semibold leading-relaxed">
              We never sell your personal information to third parties for marketing purposes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-7 h-7 text-blue-600" />
            How Long We Keep Your Data
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We only keep your personal information for as long as necessary to:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">1.</span>
              <span>Provide our services to you</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">2.</span>
              <span>Comply with legal and regulatory requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">3.</span>
              <span>Resolve disputes and enforce our agreements</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
            After this period, we securely delete or anonymize your information so it can no longer identify you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You have important rights regarding your personal information:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Access Your Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Request a copy of the personal information we hold about you.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">Correct Your Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Update or correct any inaccurate information.</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">Delete Your Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Request deletion of your personal information (subject to legal requirements).
              </p>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-2">Opt-Out</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unsubscribe from marketing communications at any time.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed">
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies & Tracking</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use cookies and similar technologies to improve your experience on our website. Here's what you should
            know:
          </p>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Required for the website to function properly. These cannot be disabled.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Remember your preferences and settings to provide a personalized experience.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Help us understand how visitors use our website so we can improve it.
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed bg-gray-50 p-4 rounded-lg">
            You can control cookies through your browser settings. Note that disabling certain cookies may affect
            website functionality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We take the security of your personal information seriously and use industry-standard measures to protect
            it:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span>Encryption of data in transit and at rest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span>Regular security audits and updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span>Restricted access to personal information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold mt-1">✓</span>
              <span>Secure data centers with physical and digital safeguards</span>
            </li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-5 mt-6 rounded-r-lg">
            <p className="text-yellow-900 text-sm leading-relaxed">
              <strong>Important:</strong> While we implement strong security measures, no method of transmission over
              the internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your
              data to the best of our ability.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal
            information from children. If you believe we have inadvertently collected information from a child, please
            contact us immediately so we can delete it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may contain links to other websites. We are not responsible for the privacy practices of these
            external sites. We encourage you to read the privacy policies of any website you visit.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal
            requirements. When we make changes:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>We'll post the updated policy on this page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>We'll update the "Last updated" date at the top</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>For significant changes, we'll notify you by email or prominent notice on our website</span>
            </li>
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg">
            We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Questions? We're Here to Help</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
            reach out:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a href="mailto:oat3653377@gmail.com" className="text-blue-100 hover:text-white underline">
                  oat3653377@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-blue-100">Available Monday-Friday, 9am-5pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-blue-100">Bangkok, Thailand</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Website</h3>
                <a href="/contact" className="text-blue-100 hover:text-white underline">
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default PrivacyPolicyPage
