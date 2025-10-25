import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { CheckCircle, TrendingUp, FileCheck2, Shield, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "PND.50 Corporate Tax Filing in Thailand | PND50",
  description:
    "Expert PND.50 corporate income tax filing services. PND50 ensures accurate, optimized, and timely submission to the Thai Revenue Department.",
}

const PND50FilingPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Seamless PND.50 Corporate Tax Filing
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The PND.50 is your company's annual report card to the Thai Revenue Department. Our meticulous,
                tech-driven approach ensures your corporate income tax is filed accurately, optimized for savings, and
                fully compliant.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                File Your PND.50 With Experts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="PND.50 tax form and digital submission"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Streamlined PND.50 Filing Process</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              A step-by-step process designed for accuracy and peace of mind.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-lg p-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tax Optimization & Strategy</h3>
                  <p className="text-gray-600 mt-1">
                    We analyze your financials to identify all eligible deductions, credits, and BOI privileges,
                    ensuring you pay the minimum legal tax.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-lg p-3">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Meticulous Preparation</h3>
                  <p className="text-gray-600 mt-1">
                    Our experts prepare the PND.50 form, financial statements, and all required attachments with
                    unmatched precision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-lg p-3">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Audit-Ready Submission</h3>
                  <p className="text-gray-600 mt-1">
                    We perform a multi-point review before e-filing with the Revenue Department, providing you with a
                    complete, audit-ready package for your records.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Key Filing Components</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Full Financial Statements</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>SBC.3 Submission</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Tax Loss Carry-Forward Calculation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Transfer Pricing Disclosure Form</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span>Board of Investment (BOI) Privilege Application</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">File Your Corporate Taxes With Confidence</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            The deadline for PND.50 filing is approaching. Let our experts ensure your submission is accurate,
            optimized, and on time.
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

export default PND50FilingPage
