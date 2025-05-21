"use client"

import type React from "react"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  glareEffect?: boolean
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.02,
  glareEffect = true,
}: InteractiveCardProps) {
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glareEffect) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setGlarePosition({ x, y })
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}

      {glareEffect && isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-30 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
      )}
    </motion.div>
  )
}
