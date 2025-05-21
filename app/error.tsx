"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-[#002f86]">Something went wrong</h1>
        <p className="text-gray-600">
          We're sorry, but something went wrong. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-[#002f86] hover:bg-[#002f86]/90 flex items-center gap-2">
            <RefreshCw className="h-4 w-4" /> Try Again
          </Button>
          <Button variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
