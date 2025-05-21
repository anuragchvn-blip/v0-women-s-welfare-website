"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, CreditCard, Heart, Landmark } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpiScanner } from "@/components/upi-scanner"
import { ScrollReveal } from "@/components/scroll-reveal"
import { processDonation } from "./actions"

export default function DonatePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setError(null)

    try {
      await processDonation(formData)
    } catch (err) {
      setError("An error occurred while processing your donation. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Heart className="h-16 w-16 text-[#f7931e]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Make a Difference Today</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Your donation helps us continue our mission of alleviating poverty and promoting social welfare. All
              donations are eligible for tax benefits under Section 80G.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#002f86]">
                  Your Support Makes a Difference
                </h2>
                <p className="text-gray-500">
                  Every donation, no matter the size, helps us make a real impact in the lives of people in need.
                </p>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">₹500</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Provides essential supplies for a family in need for one week.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">₹1,000</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Funds a skills training workshop for an individual seeking employment.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">₹2,500</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Provides a month of educational support for a child.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">₹5,000</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Sponsors a community development initiative, benefiting multiple families.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <Card className="border-2 border-[#002f86]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#002f86]">Donation Form</CardTitle>
                    <CardDescription>Choose your donation type and amount</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                        {error}
                      </div>
                    )}
                    <form action={handleSubmit} className="space-y-6">
                      <Tabs defaultValue="one-time" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="one-time">One-time</TabsTrigger>
                          <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        </TabsList>
                        <TabsContent value="one-time" className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="amount">Donation Amount (₹)</Label>
                            <RadioGroup
                              name="amount"
                              defaultValue="1000"
                              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                            >
                              <div>
                                <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                                <Label
                                  htmlFor="amount-500"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹500
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                                <Label
                                  htmlFor="amount-1000"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹1,000
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="2500" id="amount-2500" className="sr-only" />
                                <Label
                                  htmlFor="amount-2500"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹2,500
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="custom" id="amount-other" className="sr-only" />
                                <Label
                                  htmlFor="amount-other"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  Other
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="custom-amount">Custom Amount</Label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                              <Input
                                name="customAmount"
                                id="custom-amount"
                                type="number"
                                className="pl-7"
                                placeholder="Enter amount"
                              />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="monthly" className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="monthly-amount">Monthly Donation Amount (₹)</Label>
                            <RadioGroup
                              name="monthlyAmount"
                              defaultValue="500"
                              className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                            >
                              <div>
                                <RadioGroupItem value="200" id="monthly-200" className="sr-only" />
                                <Label
                                  htmlFor="monthly-200"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹200
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="500" id="monthly-500" className="sr-only" />
                                <Label
                                  htmlFor="monthly-500"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹500
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="1000" id="monthly-1000" className="sr-only" />
                                <Label
                                  htmlFor="monthly-1000"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  ₹1,000
                                </Label>
                              </div>
                              <div>
                                <RadioGroupItem value="custom" id="monthly-other" className="sr-only" />
                                <Label
                                  htmlFor="monthly-other"
                                  className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-[#002f86] data-[state=checked]:bg-[#002f86]/10 data-[state=checked]:text-[#002f86]"
                                >
                                  Other
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="monthly-custom-amount">Custom Monthly Amount</Label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                              <Input
                                name="monthlyCustomAmount"
                                id="monthly-custom-amount"
                                type="number"
                                className="pl-7"
                                placeholder="Enter amount"
                              />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                      <div className="space-y-2">
                        <Label>Payment Method</Label>
                        <RadioGroup name="paymentMethod" defaultValue="upi" className="grid gap-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="upi" id="payment-upi" />
                            <Label htmlFor="payment-upi" className="flex items-center gap-2">
                              <Image
                                src="/gpay-logo.svg"
                                alt="GPay Logo"
                                width={24}
                                height={24}
                                className="h-4 w-auto"
                              />{" "}
                              UPI / Google Pay
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="payment-card" />
                            <Label htmlFor="payment-card" className="flex items-center gap-2">
                              <CreditCard className="h-4 w-4" /> Credit/Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="netbanking" id="payment-netbanking" />
                            <Label htmlFor="payment-netbanking" className="flex items-center gap-2">
                              <Landmark className="h-4 w-4" /> Net Banking
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="Enter your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="tax-receipt"
                          name="taxReceipt"
                          className="h-4 w-4 rounded border-gray-300 text-[#002f86] focus:ring-[#002f86]"
                        />
                        <Label htmlFor="tax-receipt" className="text-sm">
                          I would like to receive a tax receipt (80G)
                        </Label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#f7931e] hover:bg-[#f7931e]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Complete Donation"}
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        By donating, you agree to our{" "}
                        <Link href="/terms" className="text-[#002f86] underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#002f86] underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* UPI Scanner Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]"
            >
              Quick Donate via UPI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] text-gray-500 md:text-xl"
            >
              Scan the QR code or use our UPI ID to make a quick donation from your phone
            </motion.p>
          </div>
          <div className="mt-8 flex justify-center">
            <UpiScanner />
          </div>
          <div className="mt-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#002f86] font-medium md:text-lg"
            >
              💡 All donations are eligible for tax benefits under Section 80G
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-500"
            >
              Registration Number: AAJCC34382F22021
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
              Why Donate to Chandra-Jai Social Foundation?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Your donation makes a real impact in the lives of people in need.
            </p>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-[#002f86]" />
                <CardTitle className="mt-4">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're committed to transparency. 85% of all donations go directly to our programs, with detailed
                  annual reports available to all donors.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-[#002f86]" />
                <CardTitle className="mt-4">Tax Deductible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All donations are tax-deductible under Section 80G. We'll provide you with a receipt for your records.
                  Registration Number: AAJCC34382F22021
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-[#002f86]" />
                <CardTitle className="mt-4">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your payment information is secure. We use industry-standard encryption to protect your data.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
