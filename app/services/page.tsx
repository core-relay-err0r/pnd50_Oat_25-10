import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Corporate</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Formation */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">FORMATION</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Company registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    Offshore company registration
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Registered office address
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    BOI promotion & company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    US Treaty of Amity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Regional operating HQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Foreign business license
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Business licenses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Trademark registration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    IP protection
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Corporate Governance & Accounting */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">CORPORATE GOVERNANCE</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Corporate secretarial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Company dissolution
                  </Link>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block mt-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors border-b-2 border-gray-900 hover:border-blue-600"
              >
                View all
              </Link>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">ACCOUNTING & TAX</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Accounting & tax packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Annual audit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Half year report
                  </Link>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block mt-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors border-b-2 border-gray-900 hover:border-blue-600"
              >
                View all
              </Link>
            </div>
          </div>

          {/* Column 3: HR Outsourcing & Supply Chain */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">HR OUTSOURCING</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Payroll outsourcing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    HR administration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    PEO/Employer of record
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Immigration & visas
                  </Link>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block mt-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors border-b-2 border-gray-900 hover:border-blue-600"
              >
                View all
              </Link>
            </div>

            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-4 tracking-wide">SUPPLY CHAIN & DIGITALISATION</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Microsoft Dynamics 365
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                    ERP & CRM solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    Trade & supply chain management
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-block mt-4 text-gray-900 font-semibold hover:text-blue-600 transition-colors border-b-2 border-gray-900 hover:border-blue-600"
              >
                View all
              </Link>
            </div>
          </div>

          {/* Column 4: Featured Content */}
          <div className="space-y-0">
            <div className="relative h-64 w-full rounded-lg overflow-hidden mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ujHj7SUabB8zhEvNIxbiD2VGdwJZjG.png"
                alt="Thai guardian statue"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-[#002B49] text-white p-8 rounded-b-lg">
              <p className="text-orange-500 font-semibold mb-2">Solution</p>
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Thailand
                <br />
                market entry
              </h3>
              <Link
                href="#"
                className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#002B49] transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe that <span className="text-blue-600 font-semibold">financial management</span> should be an{" "}
              <span className="text-blue-600 font-semibold">accelerator</span> for your business, not a{" "}
              <span className="text-blue-600 font-semibold">bottleneck</span>. Our philosophy is built on three core
              pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Innovation-Led Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <span className="text-3xl">住</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Led</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We leverage AI and automation to deliver faster, more accurate, and more insightful financial services,
                giving you a competitive edge.
              </p>
            </div>

            {/* Expert-Driven Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert-Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team consists of a team of seasoned accountants and tax advisors who specialize in the nuances of
                Thai law for foreign businesses.
              </p>
            </div>

            {/* Client-Centric Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Centric</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are more than just accountants; we are your strategic partners. Your success is the ultimate measure
                of our own.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team: Your Strategic Partner</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">PND50</span>, we are{" "}
              <span className="font-semibold text-blue-600">AI-driven</span> by the ambition to be the{" "}
              <span className="font-semibold text-blue-600">leading technology-driven accounting firm</span> in
              Thailand. Our team is composed of{" "}
              <span className="font-semibold text-blue-600">highly experienced accountants</span> and{" "}
              <span className="font-semibold text-blue-600">tax advisors</span> who have worked with{" "}
              <span className="font-semibold text-blue-600">foreign-owned businesses</span> across various industries.
              From <span className="font-semibold text-blue-600">startup clients</span> to{" "}
              <span className="font-semibold text-blue-600">established enterprises</span>, our team is a{" "}
              <span className="font-semibold text-blue-600">dedicated team</span> of{" "}
              <span className="font-semibold text-blue-600">seasoned financial experts</span> and{" "}
              <span className="font-semibold text-blue-600">tech innovators</span>, united by a{" "}
              <span className="font-semibold text-blue-600">single mission</span>: to empower your business. We
              specialize in navigating the <span className="font-semibold text-blue-600">complexities</span> of the Thai
              market for our <span className="font-semibold text-blue-600">international clients</span>, transforming{" "}
              <span className="font-semibold text-blue-600">regulatory challenges</span> into{" "}
              <span className="font-semibold text-blue-600">opportunities for growth</span>. We don't just manage your{" "}
              <span className="font-semibold text-blue-600">books</span>; we partner with you to{" "}
              <span className="font-semibold text-blue-600">build a foundation</span> for lasting success.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join the Future of Accounting</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your financial operations? Let's discuss how PND50 can empower your business in Thailand.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full"
          >
            <Link href="/calculator">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
