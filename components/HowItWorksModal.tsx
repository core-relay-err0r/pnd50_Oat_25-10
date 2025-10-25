"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
// import { CheckCircle, Rocket, Handshake } from 'lucide-react'

interface HowItWorksModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">How It Works</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Our streamlined process ensures a seamless experience from start to finish.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
              {/* <Handshake className="h-5 w-5" /> */}
              <span>🤝</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">1. Initial Consultation</h3>
              <p className="text-sm text-gray-500">
                We start with a free consultation to understand your unique needs and business goals.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-green-100 text-green-600 rounded-full h-10 w-10 flex items-center justify-center">
              {/* <CheckCircle className="h-5 w-5" /> */}
              <span>✅</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">2. Tailored Strategy & Onboarding</h3>
              <p className="text-sm text-gray-500">
                We develop a customized tax and accounting strategy and guide you through our simple onboarding process.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-purple-100 text-purple-600 rounded-full h-10 w-10 flex items-center justify-center">
              {/* <Rocket className="h-5 w-5" /> */}
              <span>🚀</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">3. Ongoing Support & Reporting</h3>
              <p className="text-sm text-gray-500">
                Receive continuous support, proactive advice, and clear, concise financial reporting to keep you
                informed.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
