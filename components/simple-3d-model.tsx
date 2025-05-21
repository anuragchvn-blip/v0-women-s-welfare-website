"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function Simple3DModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Venus symbol (female symbol) parameters
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2 - 20
    const radius = Math.min(canvas.width, canvas.height) * 0.2
    const stemLength = radius * 1.5
    const stemWidth = radius * 0.2
    const crossLength = radius * 0.8
    const color = "#002f86"

    // Animation variables
    let rotation = 0
    let scale = 0
    let fadeIn = 0

    // Animation function
    const animate = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update animation values
      if (rotation < Math.PI * 2) rotation += 0.02
      if (scale < 1) scale += 0.02
      if (fadeIn < 1) fadeIn += 0.02

      // Save context state
      ctx.save()

      // Apply transformations
      ctx.translate(centerX, centerY)
      ctx.rotate(Math.sin(rotation * 0.5) * 0.1)
      ctx.scale(scale, scale)
      ctx.globalAlpha = fadeIn

      // Draw circle
      ctx.beginPath()
      ctx.arc(0, -radius * 0.5, radius, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = stemWidth * 0.5
      ctx.stroke()

      // Draw stem
      ctx.beginPath()
      ctx.moveTo(0, radius * 0.5)
      ctx.lineTo(0, radius * 0.5 + stemLength)
      ctx.strokeStyle = color
      ctx.lineWidth = stemWidth
      ctx.stroke()

      // Draw cross
      ctx.beginPath()
      ctx.moveTo(-crossLength / 2, radius * 0.5 + stemLength)
      ctx.lineTo(crossLength / 2, radius * 0.5 + stemLength)
      ctx.strokeStyle = color
      ctx.lineWidth = stemWidth
      ctx.stroke()

      // Restore context state
      ctx.restore()

      // Continue animation
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative h-full w-full min-h-[300px]">
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center text-white"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">Empowering Women</h3>
          <p className="text-sm md:text-base opacity-80">Creating Change Through Support</p>
        </motion.div>
      </div>
    </div>
  )
}
