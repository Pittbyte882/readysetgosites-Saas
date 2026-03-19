"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Theme = "space" | "midnight" | "carbon" | "obsidian" | "minimal" | "arctic" | "ivory" | "rosegold"

interface ThemeContextType {
  theme: Theme
  setTheme: (t: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "space",
  setTheme: () => {},
  isDark: true,
})

const darkThemes = ["space", "midnight", "carbon", "obsidian"]

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("space")

  const themeClass: Record<Theme, string> = {
    space: "",
    midnight: "theme-midnight",
    carbon: "theme-carbon",
    obsidian: "theme-obsidian",
    minimal: "theme-minimal",
    arctic: "theme-arctic",
    ivory: "theme-ivory",
    rosegold: "theme-rosegold",
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark: darkThemes.includes(theme) }}>
      <div className={themeClass[theme]} style={{ minHeight: "100vh", background: "var(--background)" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}