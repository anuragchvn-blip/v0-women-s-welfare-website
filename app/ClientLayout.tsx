"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { Footer } from "@/components/footer"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/foundation-logo.png"
                  alt="Chandra-Jai Social Foundation"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`font-bold text-lg ${isScrolled ? "text-[#002f86]" : "text-[#002f86]"}`}>
                CJS Foundation
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                About
              </Link>
              <Link
                href="/programs"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                Programs
              </Link>
              <Link
                href="/get-involved"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                Get Involved
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-600 hover:text-[#002f86]" : "text-gray-800 hover:text-[#002f86]"
                } transition-colors`}
              >
                Contact
              </Link>
              <Button className="bg-[#f7931e] hover:bg-[#f7931e]/90">
                <Link href="/donate">Donate</Link>
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-gray-900"}`} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}
