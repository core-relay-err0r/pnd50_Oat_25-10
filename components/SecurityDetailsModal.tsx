"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Shield, Lock, FileText, Brain } from "lucide-react"

interface SecurityDetailsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SecurityDetailsModal({ isOpen, onClose }: SecurityDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Security & Compliance</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Your data security and privacy are our top priorities. Learn about our comprehensive security measures.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full h-12 w-12 flex items-center justify-center">
              <Lock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">End-to-End Encrypted Portal</h3>
              <p className="text-sm text-gray-600">
                All data, documents, and communications are secured with AES-256 encryption, both in transit and at
                rest. Your sensitive financial information is protected with bank-level security.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full h-12 w-12 flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-Time Document Tracking</h3>
              <p className="text-sm text-gray-600">
                Maintain a complete audit trail with live status updates and version history for every document you
                share. Track who accessed what and when for complete transparency.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full h-12 w-12 flex items-center justify-center">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">ISO 27001-Ready Infrastructure</h3>
              <p className="text-sm text-gray-600">
                Our systems are built on a framework compliant with the highest international standards for information
                security management, ensuring your data meets global compliance requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full h-12 w-12 flex items-center justify-center">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">AI-Powered Anomaly Detection</h3>
              <p className="text-sm text-gray-600">
                Our intelligent systems continuously monitor for unusual activity, proactively flagging potential risks
                before they escalate to protect your business data.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-gray-800 mb-2">Additional Security Measures</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multi-factor authentication (MFA) for all user accounts</li>
              <li>• Regular security audits and penetration testing</li>
              <li>• GDPR and local data protection compliance</li>
              <li>• Secure cloud infrastructure with 99.9% uptime guarantee</li>
              <li>• Professional indemnity insurance coverage</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
