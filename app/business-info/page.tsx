import type { Metadata } from "next"
import BusinessInfoForm from "@/components/business-info-form"

export const metadata: Metadata = {
  title: "Business Information | PND50",
  description: "Provide your business information to get personalized accounting services and quotes.",
}

export default function BusinessInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Information</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help us understand your business better to provide tailored accounting solutions and accurate quotes.
            </p>
          </div>

          <BusinessInfoForm />
        </div>
      </div>
    </div>
  )
}
