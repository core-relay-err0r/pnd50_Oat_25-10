import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
    </div>
  )
}
