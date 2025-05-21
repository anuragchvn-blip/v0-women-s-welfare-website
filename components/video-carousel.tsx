"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define a simple array of videos
const videos = [
  {
    id: "video1",
    title: "Women Empowerment - Inspirational Video",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "video2",
    title: "The Empowered Woman",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "video3",
    title: "Women Supporting Women",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "video4",
    title: "Breaking Barriers",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
]

export function VideoCarousel() {
  // Basic state for current index
  const [currentIndex, setCurrentIndex] = useState(0)

  // Simple navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  // Get current video data safely
  const currentVideo = videos[currentIndex] || videos[0]

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Simple carousel display */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
        <img
          src={currentVideo.thumbnail || "/placeholder.svg"}
          alt={currentVideo.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="mb-2 text-xl font-bold">{currentVideo.title}</h3>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/40"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
