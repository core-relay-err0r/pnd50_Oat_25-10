import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Rocket,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  FileCheck,
  MessageCircle,
  Star,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Startup Package | PND50",
  description: "Perfect for new companies in Thailand. Essential services to launch your business with confidence.",
}

export default function StartupPackagePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Startup Package</h1>
              <p className="text-lg text-muted-foreground">Perfect for New Companies in Thailand</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Start Smart. Stay Compliant.</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Launching a business in Thailand comes with many accounting and tax obligations.</p>
                <p>
                  Our <span className="font-semibold text-foreground">Startup Package</span> is designed to make your
                  first year simple, compliant, and stress-free.
                </p>
                <p>We handle your accounting, tax, and payroll — so you can focus on building your business.</p>
              </div>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">What's Included</h2>
              <div className="space-y-6">
                {/* Monthly Bookkeeping */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Monthly Bookkeeping</h3>
                    <p className="text-sm text-muted-foreground">
                      Accurate recording of all business transactions and preparation of financial statements.
                    </p>
                  </div>
                </div>

                {/* Tax Filings */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tax Filings</h3>
                    <p className="text-sm text-muted-foreground">
                      Withholding tax (PND 1, 3, 53, 54, P.P.36) and monthly VAT (P.P.30), filed on time every month.
                    </p>
                  </div>
                </div>

                {/* Payroll Services */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Payroll Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Monthly payroll calculation and social security submissions (up to 3 employees).
                    </p>
                  </div>
                </div>

                {/* Monthly Financial Reports */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Monthly Financial Reports</h3>
                    <p className="text-sm text-muted-foreground">
                      Trial Balance, Balance Sheet, Profit & Loss, and General Ledger — prepared by our team using TR
                      Cloud.
                    </p>
                  </div>
                </div>

                {/* Annual Financial Statements */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Annual Financial Statements</h3>
                    <p className="text-sm text-muted-foreground">
                      Preparation and submission of year-end financial reports and corporate income tax filings (PND50,
                      PND51).
                    </p>
                  </div>
                </div>

                {/* Business Consultation */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Initial advisory session to help new companies understand accounting and compliance requirements
                      in Thailand.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose PND50 */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose PND50</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Built for Foreign-Owned Companies</h3>
                    <p className="text-sm text-muted-foreground">
                      We understand the compliance challenges international businesses face in Thailand.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Tech-Driven Accuracy</h3>
                    <p className="text-sm text-muted-foreground">
                      All bookkeeping is handled securely by our internal accounting team using TR Cloud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Transparent & Reliable</h3>
                    <p className="text-sm text-muted-foreground">
                      No hidden fees, no confusing jargon — just professional, honest service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Local Expertise, Global Standard</h3>
                    <p className="text-sm text-muted-foreground">
                      A dedicated accounting professional ensures your business stays compliant and audit-ready.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {/* Who This Package Is For */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Who This Package Is For</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">New or recently registered companies in Thailand</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">Businesses with up to 3 employees</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Companies with low-to-medium monthly transaction volume
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Foreign-owned entities setting up operations in Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Next Step</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Let's make your first year in Thailand simple and worry-free.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Contact us today</span> for a personalized quotation
                based on your company's structure and activity.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>

            {/* Note on Accounting System */}
            <div className="bg-muted/50 border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-3">Note on Accounting System</h3>
              <p className="text-sm text-muted-foreground mb-3">
                All bookkeeping and reporting are managed internally by our accounting team through{" "}
                <span className="font-semibold text-foreground">TR Cloud</span>, a secure cloud-based system used for
                internal processing only.
              </p>
              <p className="text-sm text-muted-foreground">
                Clients receive accurate financial reports directly via email — no software setup required.
              </p>
            </div>

            {/* Optional Tagline */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="flex gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-foreground">
                  "We handle your books, taxes, and filings — so you can handle your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
