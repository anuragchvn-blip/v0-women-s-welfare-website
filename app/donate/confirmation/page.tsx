"use client"

import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function DonationConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className="h-24 w-24 text-green-500" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#002f86]">
                Thank You for Your Donation!
              </h1>

              <p className="text-gray-500 md:text-xl max-w-[600px] mx-auto">
                Your generous contribution will help us continue our mission of empowering women through education,
                skill development, and healthcare support.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 w-full max-w-md"
            >
              <h2 className="text-xl font-semibold text-[#002f86] mb-4">Donation Details</h2>
              <div className="space-y-2 text-left">
                <p className="flex justify-between">
                  <span className="text-gray-500">Transaction ID:</span>
                  <span className="font-medium">CJS-{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="font-medium text-green-600">Successful</span>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  A receipt has been sent to your email address. If you have any questions, please contact us at{" "}
                  <a href="mailto:info@chandrajaisocialfoundation.org" className="text-[#002f86] underline">
                    info@chandrajaisocialfoundation.org
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                <Link href="/" className="flex items-center gap-2">
                  Return to Home <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/get-involved" className="flex items-center gap-2">
                  Get Involved <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
