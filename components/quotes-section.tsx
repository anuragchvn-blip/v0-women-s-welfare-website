"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

// Quotes about women empowerment
const quotes = [
  {
    text: "A woman with a voice is, by definition, a strong woman.",
    author: "Melinda Gates",
  },
  {
    text: "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored.",
    author: "Sheryl Sandberg",
  },
  {
    text: "Women belong in all places where decisions are being made. It shouldn't be that women are the exception.",
    author: "Ruth Bader Ginsburg",
  },
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
  },
  {
    text: "Women are the real architects of society.",
    author: "Harriet Beecher Stowe",
  },
  {
    text: "The question isn't who's going to let me; it's who's going to stop me.",
    author: "Ayn Rand",
  },
]

export function QuotesSection() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextQuote()
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  return (
    <section className="w-full py-16 md:py-24 bg-[#5D3FD3]/5 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#002f86]">
              Inspirational Quotes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Words of wisdom that inspire and empower women around the world
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 opacity-20">
            <Quote className="h-20 w-20 text-[#002f86]" />
          </div>

          <div className="min-h-[200px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4"
              >
                <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-4">
                  {quotes[currentQuoteIndex].text}
                </p>
                <p className="text-[#002f86] font-semibold">— {quotes[currentQuoteIndex].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute -bottom-10 -right-10 opacity-20">
            <Quote className="h-20 w-20 text-[#002f86]" />
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="outline" size="icon" onClick={prevQuote} className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="sr-only">Previous quote</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="rounded-full"
          >
            {isAutoPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
            <span className="sr-only">{isAutoPlaying ? "Pause" : "Play"}</span>
          </Button>

          <Button variant="outline" size="icon" onClick={nextQuote} className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="sr-only">Next quote</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
