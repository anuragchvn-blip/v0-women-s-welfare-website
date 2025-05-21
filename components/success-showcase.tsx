"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the type for our showcase items
type ShowcaseItem = {
  id: string
  title: string
  description: string
  imageSrc: string
}

// Define props with proper TypeScript typing
interface SuccessShowcaseProps {
  className?: string
}

export function SuccessShowcase({ className = "" }: SuccessShowcaseProps) {
  // Define showcase items with proper error handling for images
  const showcaseItems: ShowcaseItem[] = [
    {
      id: "1",
      title: "Women Empowerment Initiative",
      description: "Supporting women through education and skill development",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Educational Support Program",
      description: "Providing resources for women's education",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "3",
      title: "Skill Development Workshop",
      description: "Teaching valuable skills for self-reliance",
      imageSrc: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Use state with proper typing
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Make sure we have items before trying to access them
  const currentItem = showcaseItems && showcaseItems.length > 0 ? showcaseItems[currentIndex] : null

  // Simple navigation functions with proper bounds checking
  const goToNext = () => {
    if (showcaseItems && showcaseItems.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length)
    }
  }

  const goToPrev = () => {
    if (showcaseItems && showcaseItems.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
    }
  }

  // Set component as loaded after mount
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Error state - render fallback UI
  if (hasError) {
    return (
      <div className={`relative rounded-xl overflow-hidden bg-gray-100 ${className}`}>
        <div className="flex h-[300px] sm:h-[350px] md:h-[400px] items-center justify-center">
          <div className="text-center p-6">
            <p className="text-gray-500 mb-2">Unable to load showcase</p>
            <button onClick={() => setHasError(false)} className="px-4 py-2 bg-[#002f86] text-white rounded-md">
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Loading state or no items - render placeholder
  if (!isLoaded || !currentItem) {
    return (
      <div className={`relative rounded-xl overflow-hidden bg-gray-100 ${className}`}>
        <div className="flex h-[300px] sm:h-[350px] md:h-[400px] items-center justify-center">
          <p className="text-gray-500">Loading showcase...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {/* Main content */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
        {/* Use next/image with proper error handling */}
        <div className="relative h-full w-full">
          <Image
            src={currentItem.imageSrc || "/placeholder.svg"}
            alt={currentItem.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
            onError={() => setHasError(true)}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-bold">{currentItem.title}</h3>
          <p className="mt-2 text-white/80">{currentItem.description}</p>
        </div>
      </div>

      {/* Navigation buttons - only show if we have multiple items */}
      {showcaseItems && showcaseItems.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10 transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 z-10 transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
