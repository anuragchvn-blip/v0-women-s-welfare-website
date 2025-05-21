"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// Fallback component that doesn't rely on Three.js
export function Hero3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-xl bg-[#5D3FD3]">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 flex h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 items-center justify-center rounded-full bg-white/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60%"
              height="60%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M12 13v9" />
              <path d="M9 19h6" />
            </svg>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 text-xl sm:text-2xl md:text-3xl font-bold"
        >
          Empowering Women
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm sm:text-base text-white/80 px-4"
        >
          Creating Change Through Support, Education, and Advocacy
        </motion.p>

        {/* Animated circles in the background */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-white/10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-[#FFB6C1]/20"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 h-12 w-12 rounded-full bg-[#F77F00]/20"
          animate={{
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  )
}
