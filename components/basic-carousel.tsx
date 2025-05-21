"use client"

import { useState } from "react"

// Simple carousel component using only basic HTML elements
export function BasicCarousel() {
  // Define slides directly in the component
  const slides = [
    {
      title: "Women Empowerment - Inspirational Video",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Empowered Woman",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Women Supporting Women",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Breaking Barriers",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // State for current slide index
  const [current, setCurrent] = useState(0)

  // Navigation functions
  const goToNext = () => setCurrent((current + 1) % slides.length)
  const goToPrev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrent(index)

  // Get current slide safely
  const currentSlide = slides[current] || slides[0]

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Main slide container */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
        <img
          src={currentSlide.image || "/placeholder.svg"}
          alt={currentSlide.title}
          className="h-full w-full object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-bold">{currentSlide.title}</h3>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10"
        aria-label="Previous slide"
      >
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
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10"
        aria-label="Next slide"
      >
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
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
