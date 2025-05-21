"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"

interface FloatingElementsProps {
  className?: string
}

export function FloatingElements({ className = "" }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    })
  }, [controls])

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{ y: y1 }}
        className="absolute top-[10%] left-[10%] h-16 w-16 rounded-full bg-[#5D3FD3]/10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{ y: y2 }}
        className="absolute top-[30%] right-[15%] h-24 w-24 rounded-full bg-[#FFB6C1]/20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{ y: y3 }}
        className="absolute top-[60%] left-[20%] h-20 w-20 rounded-full bg-[#F77F00]/10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        style={{ y: y4 }}
        className="absolute top-[80%] right-[10%] h-32 w-32 rounded-full bg-[#5D3FD3]/5"
      />
    </div>
  )
}
