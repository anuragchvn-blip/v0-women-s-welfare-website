import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-[#002f86]">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
