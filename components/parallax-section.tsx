"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage?: string
  overlayColor?: string
  speed?: number
  className?: string
}

export function ParallaxSection({
  children,
  bgImage = "/placeholder.svg?height=1080&width=1920",
  overlayColor = "rgba(0, 47, 134, 0.7)",
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, windowHeight * speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: overlayColor }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
