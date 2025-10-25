import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, BarChart2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Comprehensive Accounting Services | PND50",
  description:
    "Accurate, reliable, and insightful accounting services to help your business thrive. From bookkeeping to financial reporting, we've got you covered.",
}

const AccountingPage = () => {
  return (
    <>
      <Section className="bg-white pt-24 pb-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Precision Accounting for Business Clarity
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We offer a comprehensive range of accounting services to ensure your financials are accurate, compliant,
                and a powerful tool for decision-making.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div>
              <Image
                src="/images/services/accounting-hero.png"
                alt="3D illustration of a financial dashboard with charts and calculator"
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What We Offer</h2>
            <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
              Our core accounting services are designed to provide a complete financial picture of your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-7 w-7 text-blue-500" />
                  Bookkeeping Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Meticulous recording of all financial transactions to maintain accurate and up-to-date books.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-7 w-7 text-blue-500" />
                  Financial Statements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Preparation of key financial statements, including balance sheets, income statements, and cash flow
                  statements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart2 className="h-7 w-7 text-blue-500" />
                  Financial Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  In-depth analysis of your financial data to provide actionable insights for business growth and
                  efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Streamline Your Finances?</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Let us handle the numbers so you can focus on what you do best—running your business. Get in touch for a
            free consultation.
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

export default AccountingPage
