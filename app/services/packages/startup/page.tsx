import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Startup Package | PND50",
  description: "Perfect for new companies in Thailand. Essential services to launch your business with confidence.",
}

export default function StartupPackagePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative border-b border-border bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container relative mx-auto px-4 py-12 md:py-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl">
            {/* Left side - Text content */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  <Sparkles className="w-3 h-3" />
                  Most Popular for New Businesses
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">Startup Package</h1>
                <p className="text-xl text-muted-foreground">Perfect for New Companies in Thailand</p>
              </div>
            </div>

            {/* Right side - Hero image */}
            <div className="relative lg:block hidden">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/startup-team-launching-business-with-laptop-and-ro.jpg"
                  alt="Startup team launching their business in Thailand"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Start Smart. Stay Compliant.
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>Launching a business in Thailand comes with many accounting and tax obligations.</p>
                <p>
                  Our <span className="font-semibold text-foreground">Startup Package</span> is designed to make your
                  first year simple, compliant, and stress-free.
                </p>
                <p className="text-foreground font-medium">
                  We handle your accounting, tax, and payroll — so you can focus on building your business.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">What's Included</h2>
              <div className="grid gap-6">
                {/* Monthly Bookkeeping */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Bookkeeping</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Accurate recording of all business transactions and preparation of financial statements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tax Filings */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Tax Filings</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Withholding tax (PND 1, 3, 53, 54, P.P.36) and monthly VAT (P.P.30), filed on time every month.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payroll Services */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Payroll Services</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monthly payroll calculation and social security submissions (up to 3 employees).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Monthly Financial Reports */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Financial Reports</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Trial Balance, Balance Sheet, Profit & Loss, and General Ledger — prepared by our team using TR
                        Cloud.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Annual Financial Statements */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Annual Financial Statements</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Preparation and submission of year-end financial reports and corporate income tax filings
                        (PND50, PND51).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Consultation */}
                <div className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">Business Consultation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Initial advisory session to help new companies understand accounting and compliance requirements
                        in Thailand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Why Choose PND50</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Built for Foreign-Owned Companies</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We understand the compliance challenges international businesses face in Thailand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Tech-Driven Accuracy</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All bookkeeping is handled securely by our internal accounting team using TR Cloud.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Transparent & Reliable</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        No hidden fees, no confusing jargon — just professional, honest service.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Local Expertise, Global Standard</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A dedicated accounting professional ensures your business stays compliant and audit-ready.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Who This Package Is For */}
            <div className="bg-gradient-to-br from-card to-card/50 border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-5">Who This Package Is For</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    New or recently registered companies in Thailand
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Businesses with up to 3 employees</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Companies with low-to-medium monthly transaction volume
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Foreign-owned entities setting up operations in Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Next Step - Enhanced CTA */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-3">Ready to Get Started?</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Let's make your first year in Thailand simple and worry-free.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                <span className="font-semibold text-foreground">Contact us today</span> for a personalized quotation
                based on your company's structure and activity.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-background hover:bg-accent">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>

            {/* Note on Accounting System */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">Note on Accounting System</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                All bookkeeping and reporting are managed internally by our accounting team through{" "}
                <span className="font-semibold text-foreground">TR Cloud</span>, a secure cloud-based system used for
                internal processing only.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clients receive accurate financial reports directly via email — no software setup required.
              </p>
            </div>

            {/* Optional Tagline */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-6 shadow-sm">
              <div className="flex gap-4">
                <Star className="w-6 h-6 text-primary fill-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm italic text-foreground font-medium leading-relaxed">
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
