import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tax Optimization Services - Example Company",
  description: "Optimize your tax strategy with our expert tax optimization services.",
}

const TaxOptimizationPage = () => {
  return (
    <main className="container mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Tax Optimization Services</h1>
          <p className="text-gray-700 text-lg">
            We offer comprehensive tax optimization services to help you minimize your tax liabilities and maximize your
            financial well-being. Our team of experienced tax professionals will work with you to develop a personalized
            tax strategy that aligns with your specific needs and goals.
          </p>
        </div>
        <Image
          src="/images/services/tax-optimization.png"
          alt="Strategic planning scene with financial graphs, calculator, and glasses"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>

      <section className="mb-8 bg-slate-50 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services Include:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-700 text-lg">
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> Tax Planning and Strategy
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> Tax Compliance and Reporting
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> Tax Credits and Incentives
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> Estate and Gift Tax Planning
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> International Tax Planning
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-2">✔</span> R&D Tax Credits
          </li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact us today to schedule a consultation and learn how our tax optimization services can benefit you.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </main>
  )
}

export default TaxOptimizationPage
