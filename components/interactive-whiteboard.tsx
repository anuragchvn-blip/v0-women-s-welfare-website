"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Eraser, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function InteractiveWhiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#002f86")
  const [brushSize, setBrushSize] = useState(5)
  const [tool, setTool] = useState<"brush" | "eraser">("brush")
  const [messages, setMessages] = useState<string[]>([
    "Education is the most powerful weapon which you can use to change the world.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Be the change you wish to see in the world.",
  ])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Get context
    const context = canvas.getContext("2d")
    if (context) {
      context.lineCap = "round"
      context.lineJoin = "round"
      setCtx(context)
    }

    // Handle resize
    const handleResize = () => {
      if (!canvas || !context) return

      // Save current drawing
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

      // Resize canvas
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      // Restore context properties
      context.lineCap = "round"
      context.lineJoin = "round"

      // Restore drawing
      context.putImageData(imageData, 0, 0)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!ctx) return

    setIsDrawing(true)

    // Set brush properties
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color
    ctx.lineWidth = tool === "eraser" ? brushSize * 2 : brushSize

    // Get coordinates
    let x, y
    if ("touches" in e) {
      // Touch event
      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      // Mouse event
      x = e.nativeEvent.offsetX
      y = e.nativeEvent.offsetY
    }

    // Start new path
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return

    // Get coordinates
    let x, y
    if ("touches" in e) {
      // Touch event
      const rect = canvasRef.current?.getBoundingClientRect()
      if (!rect) return
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      // Mouse event
      x = e.nativeEvent.offsetX
      y = e.nativeEvent.offsetY
    }

    // Draw line
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!ctx) return

    setIsDrawing(false)
    ctx.closePath()
  }

  const clearCanvas = () => {
    if (!ctx || !canvasRef.current) return
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  const downloadCanvas = () => {
    if (!canvasRef.current) return

    // Create temporary link
    const link = document.createElement("a")
    link.download = "chandra-jai-whiteboard.png"
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()
  }

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setMessages([...messages, newMessage])
    setNewMessage("")
  }

  const colors = ["#002f86", "#f7931e", "#000000", "#FF0000", "#00FF00", "#0000FF"]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#002f86]">
              Share Your Thoughts
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Use our interactive whiteboard to express your ideas or leave a message of support
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {colors.map((c) => (
                  <button
                    key={c}
                    className={`w-8 h-8 rounded-full ${
                      color === c && tool === "brush" ? "ring-2 ring-offset-2 ring-gray-400" : ""
                    }`}
                    style={{ backgroundColor: c }}
                    onClick={() => {
                      setColor(c)
                      setTool("brush")
                    }}
                    aria-label={`Select ${c} color`}
                  />
                ))}
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 ${
                    tool === "eraser" ? "ring-2 ring-offset-2 ring-gray-400" : ""
                  }`}
                  onClick={() => setTool("eraser")}
                  aria-label="Eraser tool"
                >
                  <Eraser className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2">
                <label htmlFor="brush-size" className="text-sm font-medium">
                  Brush Size: {brushSize}px
                </label>
                <input
                  id="brush-size"
                  type="range"
                  min="1"
                  max="20"
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number.parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="relative border border-gray-200 rounded-lg overflow-hidden bg-white">
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={300}
                  className="w-full h-[300px] touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCanvas}
                  className="text-red-500 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-2" /> Clear
                </Button>
                <Button variant="outline" size="sm" onClick={downloadCanvas}>
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#002f86]">Community Messages</h3>
              <div className="h-[300px] overflow-y-auto border border-gray-200 rounded-lg p-4 bg-gray-50">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 mb-2 bg-white rounded-lg shadow-sm"
                  >
                    <p className="text-gray-700">{message}</p>
                  </motion.div>
                ))}
              </div>
              <form onSubmit={handleAddMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Leave a message of support..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002f86]"
                />
                <Button type="submit" className="bg-[#002f86] hover:bg-[#002f86]/90">
                  Send
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
