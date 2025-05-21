import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#002f86] text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/images/foundation-logo.png"
                  alt="Chandra-Jai Social Foundation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">Chandra-Jai Social Foundation</h3>
            </div>
            <p className="text-white/80 mb-4">
              Empowering women through education, skill development, and healthcare support since 2021.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#f7931e] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#f7931e] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-[#f7931e] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#f7931e] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/education" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Education & Skill Development
                </Link>
              </li>
              <li>
                <Link href="/programs/healthcare" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  Healthcare Support
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#f7931e] mt-0.5" />
                <span className="text-white/80">
                  Tower - D - 202, EON Waterfront
                  <br />
                  SR NO 72/2/2 KHARADI PUNE
                  <br />
                  Vadgaon Sheri, Pune City
                  <br />
                  Maharashtra, India - 411014
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#f7931e]" />
                <a href="tel:+919886366004" className="text-white/80 hover:text-[#f7931e] transition-colors">
                  +91 9886366004
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#f7931e]" />
                <a
                  href="mailto:info@chandrajaisocialfoundation.org"
                  className="text-white/80 hover:text-[#f7931e] transition-colors"
                >
                  info@chandrajaisocialfoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Chandra-Jai Social Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 text-sm hover:text-[#f7931e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 text-sm hover:text-[#f7931e] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
