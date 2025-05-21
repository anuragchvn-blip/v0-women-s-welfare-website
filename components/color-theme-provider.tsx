"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the theme colors
export const themeColors = {
  primary: "#002f86", // Deep blue
  secondary: "#f7931e", // Orange
  white: "#ffffff", // White
  primaryLight: "rgba(0, 47, 134, 0.1)",
  primaryMedium: "rgba(0, 47, 134, 0.5)",
  secondaryLight: "rgba(247, 147, 30, 0.1)",
  secondaryMedium: "rgba(247, 147, 30, 0.5)",
}

// Create context
type ColorThemeContextType = {
  colors: typeof themeColors
}

const ColorThemeContext = createContext<ColorThemeContextType>({
  colors: themeColors,
})

// Hook to use the color theme
export const useColorTheme = () => useContext(ColorThemeContext)

// Provider component
interface ColorThemeProviderProps {
  children: ReactNode
}

export function ColorThemeProvider({ children }: ColorThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure we only render after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ColorThemeContext.Provider value={{ colors: themeColors }}>{children}</ColorThemeContext.Provider>
}
