"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")

      let startTime: number
      let animationFrame: number

      const countUp = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(countUp)
        }
      }

      animationFrame = requestAnimationFrame(countUp)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  )
}
