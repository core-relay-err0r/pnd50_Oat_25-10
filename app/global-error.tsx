"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Global error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-500" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-900 mb-4">Critical Error</h1>
            <p className="text-slate-600 mb-8">A critical error occurred. Please refresh the page.</p>

            {error.digest && <p className="text-xs text-slate-400 mb-6 font-mono">Error ID: {error.digest}</p>}

            <Button onClick={reset} size="lg">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Page
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}
