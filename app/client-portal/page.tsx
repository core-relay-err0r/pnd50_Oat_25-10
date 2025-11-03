"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Calendar,
  DollarSign,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Upload,
  Eye,
  BarChart3,
  Shield,
} from "lucide-react"

export default function ClientPortalPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for demonstration
  const documents = [
    { name: "PND50 Filing - Q4 2024", status: "complete", progress: 100, date: "2024-12-15", type: "Tax Filing" },
    { name: "VAT Return - January 2025", status: "review", progress: 75, date: "2025-01-20", type: "VAT" },
    { name: "Financial Statement 2024", status: "processing", progress: 45, date: "2025-01-25", type: "Financial" },
    { name: "Payroll Report - January", status: "pending", progress: 20, date: "2025-02-01", type: "Payroll" },
  ]

  const invoices = [
    { id: "INV-2025-001", amount: 15000, status: "paid", date: "2025-01-15", service: "Monthly Accounting" },
    { id: "INV-2025-002", amount: 8500, status: "pending", date: "2025-01-20", service: "Tax Consultation" },
    { id: "INV-2024-012", amount: 12000, status: "paid", date: "2024-12-15", service: "Year-End Closing" },
  ]

  const messages = [
    {
      from: "Sarah Chen",
      subject: "Q4 Tax Filing Complete",
      preview: "Your Q4 tax filing has been successfully submitted to the Revenue Department...",
      date: "2 hours ago",
      unread: true,
    },
    {
      from: "Michael Wong",
      subject: "VAT Return Update",
      preview: "We're currently reviewing your January VAT return. Expected completion...",
      date: "1 day ago",
      unread: true,
    },
    {
      from: "PND50 Team",
      subject: "Monthly Newsletter",
      preview: "Important updates on Thai tax regulations for 2025...",
      date: "3 days ago",
      unread: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete":
        return "bg-emerald-500"
      case "review":
        return "bg-blue-500"
      case "processing":
        return "bg-yellow-500"
      case "pending":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-4 w-4" />
      case "review":
        return <Eye className="h-4 w-4" />
      case "processing":
        return <Clock className="h-4 w-4" />
      case "pending":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-neutral-50">
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Client Portal</h1>
              <p className="text-sm text-neutral-600">Welcome back, Alex Johnson</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1 px-1.5 py-0 text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700 bg-transparent">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 bg-white p-2 rounded-lg shadow-sm">
            <TabsTrigger value="overview" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="invoices" className="gap-2">
              <DollarSign className="h-4 w-4" />
              Invoices
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
              <Badge variant="destructive" className="ml-1 px-1.5 py-0 text-xs">
                2
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-500" />
                    Active Documents
                  </CardDescription>
                  <CardTitle className="text-3xl font-bold">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">3 pending review</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Completed This Month
                  </CardDescription>
                  <CardTitle className="text-3xl font-bold">8</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-yellow-500" />
                    Outstanding Balance
                  </CardDescription>
                  <CardTitle className="text-3xl font-bold">฿8,500</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">1 invoice pending</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-500" />
                    Next Deadline
                  </CardDescription>
                  <CardTitle className="text-3xl font-bold">5 days</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">VAT Return - Jan 2025</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Recent Documents
                  </CardTitle>
                  <CardDescription>Track your latest filings and submissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {documents.slice(0, 3).map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${getStatusColor(doc.status)}/10`}>
                        <FileText className={`h-5 w-5 ${getStatusColor(doc.status).replace("bg-", "text-")}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.date}</p>
                      </div>
                      <Badge variant="outline" className="gap-1">
                        {getStatusIcon(doc.status)}
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Recent Messages
                  </CardTitle>
                  <CardDescription>Communications from your accounting team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {messages.slice(0, 3).map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer ${
                        message.unread ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className={`font-medium text-sm ${message.unread ? "text-blue-600" : ""}`}>{message.from}</p>
                        <span className="text-xs text-muted-foreground">{message.date}</span>
                      </div>
                      <p className="text-sm font-medium mb-1">{message.subject}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{message.preview}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Document Management</CardTitle>
                    <CardDescription>View and manage all your financial documents</CardDescription>
                  </div>
                  <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                    <Upload className="h-4 w-4" />
                    Upload Document
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div className={`p-3 rounded-lg ${getStatusColor(doc.status)}/10`}>
                        <FileText className={`h-6 w-6 ${getStatusColor(doc.status).replace("bg-", "text-")}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold">{doc.name}</p>
                          <Badge variant="secondary" className="text-xs">
                            {doc.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Due: {doc.date}</p>
                        <div className="flex items-center gap-3">
                          <Progress value={doc.progress} className="h-2 flex-1" />
                          <span className="text-sm font-medium text-muted-foreground">{doc.progress}%</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="gap-1">
                          {getStatusIcon(doc.status)}
                          {doc.status}
                        </Badge>
                        {doc.status === "complete" && (
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Invoices Tab */}
          <TabsContent value="invoices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Invoice Management</CardTitle>
                <CardDescription>View and pay your invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {invoices.map((invoice, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg ${invoice.status === "paid" ? "bg-emerald-100" : "bg-yellow-100"}`}
                        >
                          <DollarSign
                            className={`h-6 w-6 ${invoice.status === "paid" ? "text-emerald-600" : "text-yellow-600"}`}
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{invoice.id}</p>
                          <p className="text-sm text-muted-foreground">{invoice.service}</p>
                          <p className="text-xs text-muted-foreground">{invoice.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xl font-bold">฿{invoice.amount.toLocaleString()}</p>
                          <Badge variant={invoice.status === "paid" ? "default" : "destructive"} className="mt-1">
                            {invoice.status === "paid" ? "Paid" : "Pending"}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                          {invoice.status === "pending" && (
                            <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Communicate with your accounting team</CardDescription>
                  </div>
                  <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                    <MessageSquare className="h-4 w-4" />
                    New Message
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer ${
                        message.unread ? "bg-blue-50/50 border-blue-200" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {message.from.charAt(0)}
                          </div>
                          <div>
                            <p className={`font-semibold ${message.unread ? "text-blue-600" : ""}`}>{message.from}</p>
                            <p className="text-xs text-muted-foreground">{message.date}</p>
                          </div>
                        </div>
                        {message.unread && (
                          <Badge variant="default" className="bg-blue-600">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="font-medium mb-1">{message.subject}</p>
                      <p className="text-sm text-muted-foreground">{message.preview}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Security & Privacy
                </CardTitle>
                <CardDescription>Your data is protected with enterprise-grade security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg bg-emerald-50/50 border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <p className="font-semibold">End-to-End Encryption</p>
                    </div>
                    <p className="text-sm text-muted-foreground">All data encrypted with AES-256</p>
                  </div>

                  <div className="p-4 border rounded-lg bg-emerald-50/50 border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <p className="font-semibold">Two-Factor Authentication</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Extra layer of account security</p>
                  </div>

                  <div className="p-4 border rounded-lg bg-emerald-50/50 border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <p className="font-semibold">Secure Document Storage</p>
                    </div>
                    <p className="text-sm text-muted-foreground">ISO 27001-ready infrastructure</p>
                  </div>

                  <div className="p-4 border rounded-lg bg-emerald-50/50 border-emerald-200">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <p className="font-semibold">Activity Monitoring</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Advanced threat detection</p>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50">
                  <h3 className="font-semibold text-lg mb-2">Recent Security Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last login</span>
                      <span className="font-medium">Today at 9:24 AM from Bangkok, Thailand</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Password changed</span>
                      <span className="font-medium">15 days ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">2FA status</span>
                      <Badge variant="default" className="bg-emerald-600">
                        Enabled
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
