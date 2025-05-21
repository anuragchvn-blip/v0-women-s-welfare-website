"use client"

import { createContext, useContext, useRef, useEffect, useState, type ReactNode } from "react"
import { useScroll, useSpring } from "framer-motion"

interface SmoothScrollContextType {
  scrollY: number
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scrollY: 0,
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [pageHeight, setPageHeight] = useState(0)

  const { scrollYProgress } = useScroll()
  const physics = { damping: 20, mass: 0.5, stiffness: 100 }
  const spring = useSpring(scrollYProgress, physics)

  useEffect(() => {
    if (!scrollRef.current) return

    const updatePageHeight = () => {
      if (scrollRef.current) {
        setPageHeight(scrollRef.current.scrollHeight)
      }
    }

    updatePageHeight()
    window.addEventListener("resize", updatePageHeight)
    return () => window.removeEventListener("resize", updatePageHeight)
  }, [])

  useEffect(() => {
    return spring.onChange((latest) => {
      if (!wrapperRef.current || !scrollRef.current) return
      const newScrollY = latest * (pageHeight - window.innerHeight)
      setScrollY(newScrollY)
      wrapperRef.current.style.transform = `translateY(-${newScrollY}px)`
    })
  }, [spring, pageHeight])

  return (
    <SmoothScrollContext.Provider value={{ scrollY }}>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
        <div ref={wrapperRef} className="will-change-transform">
          {children}
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full"
        style={{ height: pageHeight, pointerEvents: "none", visibility: "hidden" }}
      />
    </SmoothScrollContext.Provider>
  )
}
