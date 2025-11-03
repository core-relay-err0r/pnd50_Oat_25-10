"use client"
import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Calculator,
  FileText,
  Building2,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Zap,
  Download,
  Briefcase,
  User,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface ClientInfo {
  companyName: string
  businessType: string
  serviceType: string
  monthlyTransactions: string
  annualRevenue: string
  hasExistingAccountant: boolean
  existingAccountantChoice: "yes" | "no" | ""
  hasVAT: boolean
  hasSocialFund: boolean
  employeeCount: string
  needsRushProcessing: boolean
  email: string // Email is required
  phone?: string // Phone is optional
  whatsappId?: string // WhatsApp ID is optional
  contactEmail?: string
  telephone?: string
}

interface QuotationResult {
  monthlyAccountingFee: number
  annualAuditFee: number
  rushFee: number
  totalMonthly: number
  totalAnnual: number
}

const fullServiceTransactionRanges = [
  { value: "1-50", label: "1 – 50 transactions", price: 15000, rushFee: 4500 },
  { value: "51-100", label: "51 – 100 transactions", price: 20000, rushFee: 6000 },
  { value: "101-150", label: "101 – 150 transactions", price: 25000, rushFee: 7500 },
  { value: "151-200", label: "151 – 200 transactions", price: 30000, rushFee: 9000 },
  { value: "201-300", label: "201 – 300 transactions", price: 40000, rushFee: 12000 },
  { value: "301-400", label: "301 – 400 transactions", price: 50000, rushFee: 15000 },
  { value: "401-600", label: "401 – 600 transactions", price: 65000, rushFee: 19500 },
  { value: "601-800", label: "601 – 800 transactions", price: 75000, rushFee: 22500 },
  { value: "801-1000", label: "801 – 1,000 transactions", price: 90000, rushFee: 27000 },
]

const taxOnlyTransactionRanges = [
  { value: "1-50", label: "1 – 50 transactions", price: 10000, rushFee: 3000 },
  { value: "51-100", label: "51 – 100 transactions", price: 12000, rushFee: 3600 },
  { value: "101-150", label: "101 – 150 transactions", price: 16000, rushFee: 4800 },
  { value: "151-200", label: "151 – 200 transactions", price: 20000, rushFee: 6000 },
  { value: "201-300", label: "201 – 300 transactions", price: 26000, rushFee: 7800 },
  { value: "301-400", label: "301 – 400 transactions", price: 33000, rushFee: 9900 },
  { value: "401-600", label: "401 – 600 transactions", price: 43000, rushFee: 12900 },
  { value: "601-800", label: "601 – 800 transactions", price: 50000, rushFee: 15000 },
  { value: "801-1000", label: "801 – 1,000 transactions", price: 60000, rushFee: 18000 },
]

const bookkeepingOnlyTransactionRanges = [
  { value: "1-50", label: "1 – 50 transactions", price: 10000, rushFee: 3000 },
  { value: "51-100", label: "51 – 100 transactions", price: 15000, rushFee: 4500 },
  { value: "101-150", label: "101 – 150 transactions", price: 20000, rushFee: 6000 },
  { value: "151-200", label: "151 – 200 transactions", price: 25000, rushFee: 7500 },
  { value: "201-300", label: "201 – 300 transactions", price: 30000, rushFee: 9000 },
  { value: "301-400", label: "301 – 400 transactions", price: 35000, rushFee: 10500 },
  { value: "401-600", label: "401 – 600 transactions", price: 50000, rushFee: 15000 },
  { value: "601-800", label: "601 – 800 transactions", price: 60000, rushFee: 18000 },
  { value: "801-1000", label: "801 – 1,000 transactions", price: 70000, rushFee: 21000 },
]

const annualBookkeepingTransactionRanges = [
  { value: "1-50", label: "1 – 50 transactions", price: 10000, rushFee: 3000 },
  { value: "51-100", label: "51 – 100 transactions", price: 15000, rushFee: 4500 },
  { value: "101-150", label: "101 – 150 transactions", price: 20000, rushFee: 6000 },
  { value: "151-200", label: "151 – 200 transactions", price: 25000, rushFee: 7500 },
  { value: "201-300", label: "201 – 300 transactions", price: 35000, rushFee: 10500 },
  { value: "301-400", label: "301 – 400 transactions", price: 40000, rushFee: 12000 },
  { value: "401-600", label: "401 – 600 transactions", price: 55000, rushFee: 16500 },
  { value: "601-800", label: "601 – 800 transactions", price: 70000, rushFee: 21000 },
  { value: "801-1000", label: "801 – 1,000 transactions", price: 80000, rushFee: 24000 },
]

const revenueRanges = [
  { value: "zero", label: "Zero Income", price: 25000, rushFee: 7500 },
  { value: "1m", label: "Maximum to 1 million THB", price: 30000, rushFee: 9000 },
  { value: "1-5m", label: "1+ million to 5 million THB", price: 35000, rushFee: 10500 },
  { value: "5-10m", label: "5+ million to 10 million THB", price: 40000, rushFee: 12000 },
  { value: "10-15m", label: "10+ million to 15 million THB", price: 60000, rushFee: 18000 },
  { value: "15-20m", label: "15+ million to 20 million THB", price: 70000, rushFee: 21000 },
  { value: "20-30m", label: "20+ million to 30 million THB", price: 80000, rushFee: 24000 },
  { value: "30-50m", label: "30+ million to 50 million THB", price: 90000, rushFee: 27000 },
  { value: "50-70m", label: "50+ million to 70 million THB", price: 100000, rushFee: 30000 },
  { value: "70-100m", label: "70+ million to 100 million THB", price: 155000, rushFee: 46500 },
  { value: "100-200m", label: "100+ million to 200 million THB", price: 300000, rushFee: 90000 },
  { value: "200m+", label: "200+ million to 300 million THB", price: 400000, rushFee: 120000 },
]

const annualAuditNoAccountantTransactionRanges = [
  { value: "1-50", label: "1 – 50 transactions", price: 10000, rushFee: 3000 },
  { value: "51-100", label: "51 – 100 transactions", price: 15000, rushFee: 4500 },
  { value: "101-150", label: "101 – 150 transactions", price: 20000, rushFee: 6000 },
  { value: "151-200", label: "151 – 200 transactions", price: 25000, rushFee: 7500 },
  { value: "201-300", label: "201 – 300 transactions", price: 30000, rushFee: 9000 },
  { value: "301-400", label: "301 – 400 transactions", price: 35000, rushFee: 10500 },
  { value: "401-600", label: "401 – 600 transactions", price: 50000, rushFee: 15000 },
  { value: "601-800", label: "601 – 800 transactions", price: 60000, rushFee: 18000 },
  { value: "801-1000", label: "801 – 1,000 transactions", price: 70000, rushFee: 21000 },
]

const documentChecklist = [
  {
    category: "Company Registration Documents",
    items: [
      "Company Affidavit and Objectives",
      "Shareholders list (Bor Aor Jor 5) and Shares Certificates",
      "Minutes of Statutory Meeting",
      "Memorandum of association",
      "Articles of Association",
      "Lease Agreement and Consent letter",
    ],
  },
  {
    category: "VAT Registration",
    items: ["PorPor 20", "PorPor 01", "Previous VAT (P.P.30) filing forms and receipts (past 12 months)"],
  },
  {
    category: "Staff Information",
    items: [
      "Thai ID Card/Passport/Work Permit of employees",
      "Employee details (start date, salary, etc.)",
      "Director ID Card/Passport/Work Permit",
    ],
  },
  {
    category: "Accounting Documents",
    items: [
      "All Receipts/Tax invoices/WHT Certificates (past 12 months)",
      "Bank Statements (past 12 months)",
      "Updated financial reports until current date",
      "Previous Annual Audit filings",
    ],
  },
  {
    category: "Tax Filings",
    items: [
      "P.N.D.1 filing forms and receipts (past 12 months)",
      "P.N.D.3 filing forms and receipts",
      "P.P.30/VAT forms and receipts",
      "SSO forms and receipts",
    ],
  },
]

const serviceOptions = [
  {
    value: "monthly-tax-bookkeeping",
    label: "Monthly Tax Filing + Bookkeeping",
    description: "Monthly tax submission with comprehensive bookkeeping services",
  },
  {
    value: "monthly-tax-only",
    label: "Monthly Tax Filing (Tax filing only)",
    description: "Monthly tax submission service only",
  },
  {
    value: "annual-bookkeeping-audit",
    label: "Annual Bookkeeping + Annual Audit",
    description: "Annual bookkeeping services with year-end audit",
  },
  {
    value: "annual-audit",
    label: "Annual Year-End Audit",
    description: "Year-end financial statement audit for existing bookkeeping",
  },
]

export function AccountingCalculator() {
  const router = useRouter()
  const [step, setStep] = useState<"input" | "quotation" | "checklist">("input")
  const [userEmail, setUserEmail] = useState("")
  const [userTelephone, setUserTelephone] = useState("")
  const [userWhatsappId, setUserWhatsappId] = useState("")
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    companyName: "",
    businessType: "",
    serviceType: "",
    monthlyTransactions: "",
    annualRevenue: "",
    hasExistingAccountant: false,
    existingAccountantChoice: "",
    hasVAT: false,
    hasSocialFund: false,
    employeeCount: "",
    needsRushProcessing: false,
    email: "", // Initialize email
    phone: "", // Initialize phone
    whatsappId: "", // Initialize whatsappId
  })

  const quotation = useMemo((): QuotationResult => {
    let monthlyFee = 0
    let rushFee = 0
    let transactionTier = null

    switch (clientInfo.serviceType) {
      case "monthly-tax-bookkeeping":
        transactionTier = fullServiceTransactionRanges.find((t) => t.value === clientInfo.monthlyTransactions)
        break
      case "monthly-tax-only":
        transactionTier = taxOnlyTransactionRanges.find((t) => t.value === clientInfo.monthlyTransactions)
        break
      case "annual-bookkeeping-audit":
        transactionTier = annualBookkeepingTransactionRanges.find((t) => t.value === clientInfo.monthlyTransactions)
        break
      case "annual-audit":
        if (clientInfo.existingAccountantChoice === "no") {
          // Don't set transactionTier for monthly calculation
          transactionTier = null
        }
        break
      default:
        transactionTier = null
    }

    if (transactionTier) {
      monthlyFee = transactionTier.price
      // Apply rush fee only when rush processing is selected
      rushFee = clientInfo.needsRushProcessing ? transactionTier.rushFee : 0
    }

    const revenueTier = revenueRanges.find((r) => r.value === clientInfo.annualRevenue)
    let annualFee = 0
    let annualRushFee = 0

    if (revenueTier) {
      if (
        (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "yes") ||
        clientInfo.serviceType === "monthly-tax-bookkeeping" ||
        clientInfo.serviceType === "annual-bookkeeping-audit"
      ) {
        annualFee = revenueTier.price
        // Apply rush fee to annual audit when rush processing is selected
        annualRushFee = clientInfo.needsRushProcessing ? revenueTier.rushFee : 0
      }
    }

    if (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "no") {
      const transactionTierForAnnual = annualAuditNoAccountantTransactionRanges.find(
        (t) => t.value === clientInfo.monthlyTransactions,
      )

      let totalAnnualFee = 0
      let totalAnnualRushFee = 0

      if (transactionTierForAnnual) {
        totalAnnualFee += transactionTierForAnnual.price
        totalAnnualRushFee += clientInfo.needsRushProcessing ? transactionTierForAnnual.rushFee : 0
      }

      if (revenueTier) {
        totalAnnualFee += revenueTier.price
        totalAnnualRushFee += clientInfo.needsRushProcessing ? revenueTier.rushFee : 0
      }

      return {
        monthlyAccountingFee: 0, // No monthly fee for this service type
        annualAuditFee: totalAnnualFee + totalAnnualRushFee,
        rushFee: 0, // Rush fee is included in annual fee
        totalMonthly: 0, // No monthly charges
        totalAnnual: totalAnnualFee + totalAnnualRushFee,
      }
    }

    return {
      monthlyAccountingFee: monthlyFee,
      annualAuditFee: annualFee + annualRushFee,
      rushFee: rushFee,
      totalMonthly: monthlyFee + rushFee,
      totalAnnual: annualFee + annualRushFee,
    }
  }, [clientInfo])

  const getTransactionRanges = () => {
    switch (clientInfo.serviceType) {
      case "monthly-tax-bookkeeping":
        return fullServiceTransactionRanges
      case "monthly-tax-only":
        return taxOnlyTransactionRanges
      case "annual-bookkeeping-audit":
        return annualBookkeepingTransactionRanges
      case "annual-audit":
        return clientInfo.existingAccountantChoice === "no"
          ? annualAuditNoAccountantTransactionRanges
          : fullServiceTransactionRanges
      default:
        return fullServiceTransactionRanges
    }
  }

  const handleInputChange = (field: keyof ClientInfo, value: string | boolean) => {
    setClientInfo((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return !(
      !clientInfo.companyName ||
      !clientInfo.email || // Only email is required from contact fields
      !clientInfo.serviceType ||
      (!clientInfo.monthlyTransactions && clientInfo.serviceType !== "annual-audit") ||
      (clientInfo.serviceType === "annual-audit" &&
        clientInfo.existingAccountantChoice === "no" &&
        !clientInfo.monthlyTransactions) ||
      (clientInfo.serviceType === "annual-audit" &&
        clientInfo.existingAccountantChoice === "yes" &&
        !clientInfo.annualRevenue) ||
      (!clientInfo.annualRevenue &&
        (clientInfo.serviceType === "monthly-tax-bookkeeping" ||
          clientInfo.serviceType === "annual-bookkeeping-audit")) ||
      (clientInfo.serviceType === "annual-audit" && !clientInfo.existingAccountantChoice)
    )
  }

  const handleGenerateQuotation = () => {
    if (!isFormValid()) {
      alert("Please fill in all required fields")
      return
    }
    setStep("quotation")
  }

  const handleViewChecklist = () => {
    setStep("checklist")
  }

  const handleStartOver = () => {
    setStep("input")
    setClientInfo({
      companyName: "",
      businessType: "",
      serviceType: "",
      monthlyTransactions: "",
      annualRevenue: "",
      hasExistingAccountant: false,
      existingAccountantChoice: "",
      hasVAT: false,
      hasSocialFund: false,
      employeeCount: "",
      needsRushProcessing: false,
      email: "",
      phone: "",
      whatsappId: "",
    })
  }

  const handleAcceptQuoteAndSendPdf = async () => {
    setIsGeneratingPdf(true)

    try {
      const response = await fetch("/api/generate-quote-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientInfo,
          quotation,
          userEmail: "info@pnd50.com", // Hardcoded recipient email
          userTelephone: clientInfo.phone || "",
          userWhatsappId: clientInfo.whatsappId || "",
        }),
      })

      if (response.ok) {
        router.push("/calculator/success")
      } else {
        const error = await response.text()
        alert(`Failed to send quote: ${error}`)
      }
    } catch (error) {
      console.error("Error sending quote:", error)
      alert("An error occurred while sending the quote. Please try again.")
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm border border-border">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold text-foreground text-center">PND50</h1>
                <p className="text-muted-foreground text-sm">Accounting Services</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-3">
            Schedule Your <span className="text-primary">Free Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Professional accounting services for your business. Get accurate pricing in minutes.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm border border-border">
            <div
              className={`flex items-center gap-2 ${step === "input" ? "text-primary" : step === "quotation" || step === "checklist" ? "text-chart-2" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step === "input"
                    ? "bg-primary text-primary-foreground"
                    : step === "quotation" || step === "checklist"
                      ? "bg-chart-2 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step === "quotation" || step === "checklist" ? <CheckCircle className="h-4 w-4" /> : "1"}
              </div>
              <span className="font-medium text-sm">Business Info</span>
            </div>

            <ArrowRight
              className={`h-4 w-4 ${step === "quotation" || step === "checklist" ? "text-chart-2" : "text-muted"}`}
            />

            <div
              className={`flex items-center gap-2 ${step === "quotation" ? "text-primary" : step === "checklist" ? "text-chart-2" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step === "quotation"
                    ? "bg-primary text-primary-foreground"
                    : step === "checklist"
                      ? "bg-chart-2 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step === "checklist" ? <CheckCircle className="h-4 w-4" /> : "2"}
              </div>
              <span className="font-medium text-sm">Quotation</span>
            </div>

            <ArrowRight className={`h-4 w-4 ${step === "checklist" ? "text-chart-2" : "text-muted"}`} />

            <div
              className={`flex items-center gap-2 ${step === "checklist" ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step === "checklist" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className="font-medium text-sm">Documents</span>
            </div>
          </div>
        </div>

        {/* Step 1: Client Information Input */}
        {step === "input" && (
          <Card className="bg-background shadow-sm border border-border">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
                Business Information
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg">
                Tell us about your business to get an accurate quotation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Company Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Company Details</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="companyName" className="text-foreground font-medium text-base">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      value={clientInfo.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="businessType" className="text-foreground font-medium text-base">
                      Business Type
                    </Label>
                    <Input
                      id="businessType"
                      value={clientInfo.businessType}
                      onChange={(e) => handleInputChange("businessType", e.target.value)}
                      placeholder="e.g., Trading, Manufacturing, Services"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Your Contact section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Your Contact</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground font-medium text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={clientInfo.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter email address"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-foreground font-medium text-base">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={clientInfo.phone || ""}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter phone number"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="whatsappId" className="text-foreground font-medium text-base">
                      WhatsApp ID
                    </Label>
                    <Input
                      id="whatsappId"
                      value={clientInfo.whatsappId || ""}
                      onChange={(e) => handleInputChange("whatsappId", e.target.value)}
                      placeholder="Enter WhatsApp ID"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Select Your Service */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Select Your Service</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {serviceOptions.map((service) => (
                    <div
                      key={service.value}
                      onClick={() => handleInputChange("serviceType", service.value)}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        clientInfo.serviceType === service.value
                          ? "border-primary bg-primary/10"
                          : "border-border bg-background hover:border-foreground"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 mt-0.5 ${
                            clientInfo.serviceType === service.value ? "border-primary bg-primary" : "border-foreground"
                          }`}
                        >
                          {clientInfo.serviceType === service.value && (
                            <div className="w-full h-full rounded-full bg-background scale-50"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{service.label}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Financial Data</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {(clientInfo.serviceType !== "annual-audit" ||
                    (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "no")) && (
                    <div className="space-y-3">
                      <Label htmlFor="monthlyTransactions" className="text-foreground font-medium text-base">
                        {clientInfo.serviceType === "annual-audit"
                          ? "Annual review bookkeeping *"
                          : clientInfo.serviceType === "annual-bookkeeping-audit"
                            ? "Annual Transactions *"
                            : "Monthly Transactions (Per Month) *"}
                      </Label>
                      <Select
                        value={clientInfo.monthlyTransactions}
                        onValueChange={(value) => handleInputChange("monthlyTransactions", value)}
                      >
                        <SelectTrigger
                          className="border-input focus:border-ring focus:ring-ring/20 bg-background h-12 text-base"
                          style={{ color: "#374151" }}
                        >
                          <SelectValue placeholder="Select transaction volume" style={{ color: "#6b7280" }} />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {getTransactionRanges().map((range) => (
                            <SelectItem key={range.value} value={range.value} className="text-foreground py-3">
                              <div className="flex justify-between items-center w-full">
                                <span>{range.label}</span>
                                <span className="text-sm text-muted-foreground ml-4">
                                  ฿{range.price.toLocaleString()}
                                  {clientInfo.serviceType === "annual-bookkeeping-audit" ||
                                  clientInfo.serviceType === "annual-audit"
                                    ? "/year"
                                    : "/month"}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {(clientInfo.serviceType === "monthly-tax-bookkeeping" ||
                    clientInfo.serviceType === "annual-bookkeeping-audit" ||
                    clientInfo.serviceType === "annual-audit" ||
                    (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "yes")) && (
                    <div className="space-y-3">
                      <Label htmlFor="annualRevenue" className="text-foreground font-medium text-base">
                        Annual Revenue (Per Year) *
                      </Label>
                      <Select
                        value={clientInfo.annualRevenue}
                        onValueChange={(value) => handleInputChange("annualRevenue", value)}
                      >
                        <SelectTrigger
                          className="border-input focus:border-ring focus:ring-ring/20 bg-background h-12 text-base"
                          style={{ color: "#374151" }}
                        >
                          <SelectValue placeholder="Select revenue range" style={{ color: "#6b7280" }} />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {revenueRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value} className="text-foreground py-3">
                              <div className="flex justify-between items-center w-full">
                                <span>{range.label}</span>
                                <span className="text-sm text-muted-foreground ml-4">
                                  ฿{range.price.toLocaleString()}/year
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                {clientInfo.serviceType === "annual-audit" && (
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <Label className="text-foreground font-medium text-base mb-4 block">
                      Do you already have an existing accountant? *
                    </Label>
                    <div className="flex gap-6">
                      <div
                        onClick={() => handleInputChange("existingAccountantChoice", "yes")}
                        className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          clientInfo.existingAccountantChoice === "yes"
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-foreground"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            clientInfo.existingAccountantChoice === "yes"
                              ? "border-primary bg-primary"
                              : "border-foreground"
                          }`}
                        >
                          {clientInfo.existingAccountantChoice === "yes" && (
                            <div className="w-full h-full rounded-full bg-background scale-50"></div>
                          )}
                        </div>
                        <span className="font-medium text-foreground">YES</span>
                      </div>

                      <div
                        onClick={() => handleInputChange("existingAccountantChoice", "no")}
                        className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-all ${
                          clientInfo.existingAccountantChoice === "no"
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-foreground"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            clientInfo.existingAccountantChoice === "no"
                              ? "border-primary bg-primary"
                              : "border-foreground"
                          }`}
                        >
                          {clientInfo.existingAccountantChoice === "no" && (
                            <div className="w-full h-full rounded-full bg-background scale-50"></div>
                          )}
                        </div>
                        <span className="font-medium text-foreground">NO</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {clientInfo.existingAccountantChoice === "yes"
                        ? "We will provide audit services for your existing bookkeeping records."
                        : clientInfo.existingAccountantChoice === "no"
                          ? "We will handle both bookkeeping and audit services in our name."
                          : "Please select whether you have existing accounting services."}
                    </p>
                  </div>
                )}
              </div>

              {/* ... existing additional information section ... */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  Additional Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="hasVAT"
                          checked={clientInfo.hasVAT}
                          onCheckedChange={(checked) => handleInputChange("hasVAT", !!checked)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="hasVAT" className="text-foreground font-medium text-base">
                          VAT Registered
                        </Label>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="hasSocialFund"
                          checked={clientInfo.hasSocialFund}
                          onCheckedChange={(checked) => handleInputChange("hasSocialFund", !!checked)}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="hasSocialFund" className="text-foreground font-medium text-base">
                          Social Fund Registered
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="employeeCount" className="text-foreground font-medium text-base">
                      Number of Employees
                    </Label>
                    <Input
                      id="employeeCount"
                      value={clientInfo.employeeCount}
                      onChange={(e) => handleInputChange("employeeCount", e.target.value)}
                      placeholder="e.g., 5"
                      type="number"
                      className="border-input focus:border-ring focus:ring-ring/20 h-12 text-base"
                    />
                  </div>
                </div>
              </div>

              {clientInfo.serviceType && clientInfo.serviceType !== "" && (
                <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Checkbox
                      id="needsRushProcessing"
                      checked={clientInfo.needsRushProcessing}
                      onCheckedChange={(checked) => handleInputChange("needsRushProcessing", !!checked)}
                      className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600 mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="needsRushProcessing"
                        className="text-foreground font-semibold text-base flex items-center gap-2"
                      >
                        <Zap className="h-5 w-5 text-orange-500" />
                        Rush Processing Service
                      </Label>
                      <p className="text-muted-foreground text-sm mt-1">
                        Add 30% to all service fees for expedited processing and priority support
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <Button
                onClick={handleGenerateQuotation}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg font-semibold"
                size="lg"
              >
                Generate Preliminary Quotation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Quotation */}
        {step === "quotation" && (
          <div className="space-y-6">
            <Card className="bg-background shadow-sm border border-border">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Preliminary Quotation for {clientInfo.companyName}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Service: {serviceOptions.find((s) => s.value === clientInfo.serviceType)?.label} | Based on your
                  business information, here are our recommended services and pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {(clientInfo.serviceType === "monthly-tax-bookkeeping" ||
                  clientInfo.serviceType === "monthly-tax-only" ||
                  clientInfo.serviceType === "annual-bookkeeping-audit" ||
                  (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "no")) && (
                  <div className="p-4 border-2 border-primary/20 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          {clientInfo.serviceType === "monthly-tax-only"
                            ? "Monthly Tax Filing"
                            : clientInfo.serviceType === "annual-bookkeeping-audit"
                              ? "Annual Bookkeeping"
                              : clientInfo.serviceType === "annual-audit"
                                ? "Monthly Bookkeeping (In Our Name)"
                                : "Monthly Accounting (Filing & Bookkeeping)"}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {getTransactionRanges().find((t) => t.value === clientInfo.monthlyTransactions)?.label}
                        </p>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">
                        {clientInfo.serviceType === "annual-bookkeeping-audit" ? "Annual" : "Monthly"}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">
                          {clientInfo.serviceType === "annual-bookkeeping-audit"
                            ? "Base Annual Fee:"
                            : "Base Monthly Fee:"}
                        </span>
                        <span className="text-lg font-bold text-foreground">
                          ฿{quotation.monthlyAccountingFee.toLocaleString()}
                        </span>
                      </div>
                      {clientInfo.needsRushProcessing && quotation.rushFee > 0 && (
                        <div className="flex justify-between items-center text-orange-600">
                          <span className="flex items-center gap-1">
                            <Zap className="h-4 w-4" />
                            Rush Processing (30%):
                          </span>
                          <span className="text-lg font-bold">+฿{quotation.rushFee.toLocaleString()}</span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>
                          {clientInfo.serviceType === "annual-bookkeeping-audit" ? "Annual Total:" : "Monthly Total:"}
                        </span>
                        <span className="text-primary">฿{quotation.totalMonthly.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {(clientInfo.serviceType === "monthly-tax-bookkeeping" ||
                  clientInfo.serviceType === "annual-bookkeeping-audit" ||
                  (clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "yes")) && (
                  <div className="p-4 border-2 border-chart-2/20 bg-chart-2/10 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          Annual Audit for NAPE
                          {clientInfo.serviceType === "annual-audit" && " (Existing Bookkeeping + Accountant)"}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {revenueRanges.find((r) => r.value === clientInfo.annualRevenue)?.label}
                        </p>
                      </div>
                      <Badge className="bg-chart-2 text-primary-foreground">Annual</Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Base Annual Fee:</span>
                        <span className="text-lg font-bold text-foreground">
                          ฿
                          {(
                            revenueRanges.find((r) => r.value === clientInfo.annualRevenue)?.price || 0
                          ).toLocaleString()}
                        </span>
                      </div>
                      {clientInfo.needsRushProcessing && (
                        <div className="flex justify-between items-center text-orange-600">
                          <span className="flex items-center gap-1">
                            <Zap className="h-4 w-4" />
                            Rush Processing (30%):
                          </span>
                          <span className="text-lg font-bold">
                            +฿
                            {(
                              revenueRanges.find((r) => r.value === clientInfo.annualRevenue)?.rushFee || 0
                            ).toLocaleString()}
                          </span>
                        </div>
                      )}
                      <Separator />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Annual Total:</span>
                        <span className="text-chart-2">฿{quotation.annualAuditFee.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 bg-foreground text-background rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Investment Summary
                  </h3>
                  <div className="space-y-3">
                    {quotation.monthlyAccountingFee > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          {clientInfo.serviceType === "annual-bookkeeping-audit"
                            ? "Annual Bookkeeping:"
                            : "Monthly Investment:"}
                        </span>
                        <span className="text-xl font-bold">
                          ฿{quotation.totalMonthly.toLocaleString()}
                          {clientInfo.serviceType !== "annual-bookkeeping-audit" && "/month"}
                        </span>
                      </div>
                    )}
                    {quotation.annualAuditFee > 0 && (
                      <>
                        {clientInfo.serviceType === "annual-audit" && clientInfo.existingAccountantChoice === "no" ? (
                          <>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Annual Review Bookkeeping:</span>
                              <span className="text-xl font-bold">
                                ฿
                                {(
                                  getTransactionRanges().find((r) => r.value === clientInfo.monthlyTransactions)
                                    ?.price || 0
                                ).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-muted-foreground">Annual Revenue Audit:</span>
                              <span className="text-xl font-bold">
                                ฿
                                {(
                                  revenueRanges.find((r) => r.value === clientInfo.annualRevenue)?.price || 0
                                ).toLocaleString()}
                              </span>
                            </div>
                            {clientInfo.needsRushProcessing && (
                              <div className="flex justify-between items-center text-orange-400">
                                <span className="flex items-center gap-1">
                                  <Zap className="h-4 w-4" />
                                  Rush Processing:
                                </span>
                                <span className="text-xl font-bold">
                                  +฿
                                  {(
                                    (getTransactionRanges().find((r) => r.value === clientInfo.monthlyTransactions)
                                      ?.rushFee || 0) +
                                    (revenueRanges.find((r) => r.value === clientInfo.annualRevenue)?.rushFee || 0)
                                  ).toLocaleString()}
                                </span>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Annual Audit:</span>
                            <span className="text-xl font-bold">฿{quotation.annualAuditFee.toLocaleString()}</span>
                          </div>
                        )}
                      </>
                    )}
                    <Separator className="bg-foreground/20" />
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Annual Investment:</span>
                      <span className="text-yellow-400">
                        ฿
                        {(
                          (clientInfo.serviceType === "annual-bookkeeping-audit"
                            ? quotation.totalMonthly
                            : quotation.totalMonthly * 12) + quotation.annualAuditFee
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ... existing timeline and buttons ... */}
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    Filing Deadlines Timeline
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>Bookkeeping → 25th of following month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>WHT filing → 15th of following month</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span>VAT (PP.30) filing → 23rd of following month</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleViewChecklist}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    View Required Documents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleStartOver}
                    variant="outline"
                    className="border-border text-foreground bg-background hover:bg-muted"
                    size="lg"
                  >
                    Start Over
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Checklist */}
        {step === "checklist" && (
          <Card className="bg-background shadow-sm border border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-chart-2" />
                Required Documents Checklist
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Please prepare the following documents for your accounting service setup
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-bold text-primary-foreground mb-1">Next Steps</h4>
                    <p className="text-primary-foreground text-sm">
                      Once you agree to this quotation, we will prepare an agreement and send you this detailed
                      checklist. Please gather these documents to ensure smooth service delivery.
                    </p>
                  </div>
                </div>
              </div>

              {documentChecklist.map((section, index) => (
                <div key={index} className="border border-border bg-background rounded-lg p-4">
                  <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-muted-foreground rounded-md flex items-center justify-center">
                      <span className="text-xs font-bold text-background">{index + 1}</span>
                    </div>
                    {section.category}
                  </h4>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                        <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"></div>
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("quotation")}
                  variant="outline"
                  className="border-border text-foreground bg-background hover:bg-muted flex-1"
                  size="lg"
                >
                  Back to Quotation
                </Button>
                <Button
                  onClick={handleAcceptQuoteAndSendPdf}
                  disabled={isGeneratingPdf}
                  className="flex-1 bg-chart-2 hover:bg-chart-2/90 text-primary-foreground disabled:opacity-50"
                  size="lg"
                >
                  {isGeneratingPdf ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending Quote...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Send Quote to Email
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
