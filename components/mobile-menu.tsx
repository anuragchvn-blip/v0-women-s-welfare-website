"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 space-y-6">
              <Link href="/" className="block text-lg font-medium text-gray-900 hover:text-[#002f86]" onClick={onClose}>
                Home
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium text-gray-900 hover:text-[#002f86]"
                onClick={onClose}
              >
                About
              </Link>
              <Link
                href="/programs"
                className="block text-lg font-medium text-gray-900 hover:text-[#002f86]"
                onClick={onClose}
              >
                Programs
              </Link>
              <Link
                href="/get-involved"
                className="block text-lg font-medium text-gray-900 hover:text-[#002f86]"
                onClick={onClose}
              >
                Get Involved
              </Link>
              <Link
                href="/blog"
                className="block text-lg font-medium text-gray-900 hover:text-[#002f86]"
                onClick={onClose}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium text-gray-900 hover:text-[#002f86]"
                onClick={onClose}
              >
                Contact
              </Link>
              <Button className="w-full bg-[#f7931e] hover:bg-[#f7931e]/90">
                <Link href="/donate" onClick={onClose}>
                  Donate
                </Link>
              </Button>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
