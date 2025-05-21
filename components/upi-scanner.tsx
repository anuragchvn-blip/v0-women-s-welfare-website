"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UpiScanner() {
  const [copied, setCopied] = useState(false)
  const upiId = "9886366004@upi"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden border-2 border-[#002f86]/10 max-w-md mx-auto">
      <CardHeader className="bg-[#002f86] text-white">
        <CardTitle className="text-center">Scan & Pay</CardTitle>
        <CardDescription className="text-center text-white/80">
          Support our mission by making a direct donation
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 w-64 overflow-hidden rounded-lg border-4 border-[#f7931e] p-2 mx-auto"
          >
            <Image
              src="/images/payment-qr.png"
              alt="UPI QR Code"
              width={240}
              height={240}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Merchant Name:</p>
            <p className="font-medium">CHANDRA JAI SOCIAL FOUNDATION</p>
            <p className="text-sm text-gray-500 mt-2">Mobile Number:</p>
            <p className="font-medium">9886366004</p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <div className="relative flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-center">
              <span className="text-sm font-medium">{upiId}</span>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-md border border-gray-300"
              onClick={copyToClipboard}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy UPI ID</span>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Image src="/gpay-logo.svg" alt="Google Pay" width={32} height={32} className="h-8 w-auto" />
            <Image src="/phonepe-logo.svg" alt="PhonePe" width={32} height={32} className="h-8 w-auto" />
            <Image src="/paytm-logo.svg" alt="Paytm" width={32} height={32} className="h-8 w-auto" />
            <Image src="/bhim-logo.svg" alt="BHIM" width={32} height={32} className="h-8 w-auto" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
