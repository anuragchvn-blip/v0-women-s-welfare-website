import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Meet the dedicated individuals who work tirelessly to fulfill our mission of empowering women
            </p>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/about" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Connect With Our Team</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Have questions about our team or interested in joining our efforts? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="bg-white text-[#002f86] hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/get-involved">Join Our Team</Link>
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
