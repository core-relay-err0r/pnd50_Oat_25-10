import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Shield, Target, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Strategic Tax Planning | PND50",
  description:
    "Proactive tax planning services to minimize liabilities, maximize savings, and ensure long-term financial health for your business.",
}

const TaxPlanningPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Strategic Tax Planning for Optimal Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Don't just pay taxes—plan for them. Our proactive approach helps you navigate complex tax laws, minimize
                your burden, and unlock capital for growth.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Tax Strategy <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/services/tax-planning-hero.png"
                alt="A business strategy planning session in a high-rise boardroom"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Tax Planning Framework</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              We provide end-to-end tax planning to build a resilient financial future for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-7 w-7 text-blue-500" />
                  Tax Strategy Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We create a customized, year-round tax strategy that aligns with your business goals and financial
                  situation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-7 w-7 text-blue-500" />
                  Tax Minimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identifying all available deductions, credits, and incentives to legally reduce your tax liabilities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-7 w-7 text-blue-500" />
                  Compliance & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ensuring full compliance with all tax laws and regulations to avoid penalties and audits.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Benefits of Proactive Tax Planning</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Reduced Tax Liabilities</h3>
                <p className="text-gray-600">
                  Keep more of your hard-earned money by paying only what you legally owe.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Improved Cash Flow</h3>
                <p className="text-gray-600">Better cash management through predictable and optimized tax payments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Long-Term Financial Growth</h3>
                <p className="text-gray-600">
                  Make informed business decisions with a clear understanding of tax implications.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Peace of Mind</h3>
                <p className="text-gray-600">
                  Eliminate tax-season stress with a year-round strategy and expert support.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get Started with Your Tax Plan Today</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how our strategic tax planning can benefit your
            business.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-4 text-lg font-bold rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            Schedule Free Consultation
          </Button>
        </Container>
      </Section>
    </>
  )
}

export default TaxPlanningPage
