import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Chandra-Jai Social Foundation | Empowering Women",
  description: "Empowering women through education, skill development, and healthcare support",
  keywords: [
    "women empowerment",
    "education",
    "skill development",
    "healthcare",
    "NGO",
    "foundation",
    "charity",
    "donate",
  ],
  authors: [{ name: "Chandra-Jai Social Foundation" }],
  creator: "Chandra-Jai Social Foundation",
  publisher: "Chandra-Jai Social Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'