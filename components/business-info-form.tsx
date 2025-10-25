"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, FileText, CheckCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface BusinessInfo {
  companyName: string
  businessType: string
  email: string
  telephone: string
  whatsappId: string
  description: string
  services: string[]
}

const serviceOptions = [
  "Bookkeeping & Accounting",
  "Tax Preparation & Filing",
  "Payroll Management",
  "Financial Reporting",
  "Business Registration",
  "Audit & Assurance",
  "Business Consultation",
  "VAT Registration & Filing",
]

export default function BusinessInfoForm() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    companyName: "",
    businessType: "",
    email: "",
    telephone: "",
    whatsappId: "",
    description: "",
    services: [],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof BusinessInfo, value: string) => {
    setBusinessInfo((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleServiceToggle = (service: string) => {
    setBusinessInfo((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!businessInfo.companyName || !businessInfo.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in company name and email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

      toast({
        title: "Information submitted successfully!",
        description: "We'll contact you soon with personalized recommendations.",
      })

      // Reset form
      setBusinessInfo({
        companyName: "",
        businessType: "",
        email: "",
        telephone: "",
        whatsappId: "",
        description: "",
        services: [],
      })
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Company Details Card */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            Company Details
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">Basic information about your business</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="companyName" className="text-gray-700 font-medium text-base">
                Company Name *
              </Label>
              <Input
                id="companyName"
                value={businessInfo.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Enter your company name"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-base"
                required
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="businessType" className="text-gray-700 font-medium text-base">
                Business Type
              </Label>
              <Input
                id="businessType"
                value={businessInfo.businessType}
                onChange={(e) => handleInputChange("businessType", e.target.value)}
                placeholder="e.g., Trading, Manufacturing, Services"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="description" className="text-gray-700 font-medium text-base">
              Business Description
            </Label>
            <Textarea
              id="description"
              value={businessInfo.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Brief description of your business activities..."
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 min-h-[100px] text-base"
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Information Card - This is the relocated box */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-white" />
            </div>
            Get Your Quote PDF
          </CardTitle>
          <CardDescription className="text-gray-700 text-lg">
            Enter your contact information to receive a detailed PDF quote with all pricing and service information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-700 font-medium text-base">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={businessInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500/20 h-12 text-base bg-white"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="telephone" className="text-gray-700 font-medium text-base">
              Telephone
            </Label>
            <Input
              id="telephone"
              type="tel"
              value={businessInfo.telephone}
              onChange={(e) => handleInputChange("telephone", e.target.value)}
              placeholder="Enter your telephone number"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500/20 h-12 text-base bg-white"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="whatsappId" className="text-gray-700 font-medium text-base">
              WhatsApp ID
            </Label>
            <Input
              id="whatsappId"
              value={businessInfo.whatsappId}
              onChange={(e) => handleInputChange("whatsappId", e.target.value)}
              placeholder="Enter your WhatsApp ID"
              className="border-gray-300 focus:border-green-500 focus:ring-green-500/20 h-12 text-base bg-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Services Selection Card */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            Services Needed
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">Select the services you're interested in</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceOptions.map((service) => (
              <div
                key={service}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  businessInfo.services.includes(service)
                    ? "border-blue-500 bg-blue-50 text-blue-900"
                    : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{service}</span>
                  {businessInfo.services.includes(service) && <CheckCircle className="h-5 w-5 text-blue-600" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Mail className="h-5 w-5 mr-2" />
              Submit Information & Get Quote
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
