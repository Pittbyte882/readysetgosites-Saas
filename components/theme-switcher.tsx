"use client"

import { useTheme, Theme } from "@/lib/theme-context"
import { Palette, Sun, Moon } from "lucide-react"
import { useState } from "react"

const themes: { id: Theme; label: string; colors: string[]; dark: boolean }[] = [
  { id: "space",     label: "Deep Space",      colors: ["#7c3aed","#03010a","#06b6d4"], dark: true },
  { id: "midnight",  label: "Midnight Luxury",  colors: ["#b8960c","#080608","#f5f0e8"], dark: true },
  { id: "carbon",    label: "Carbon Tech",      colors: ["#06b6d4","#0a0e12","#e8f4f8"], dark: true },
  { id: "obsidian",  label: "Obsidian",         colors: ["#a855f7","#060408","#f0ecff"], dark: true },
  { id: "minimal",   label: "Pure Minimal",     colors: ["#080808","#ffffff","#eeeeee"], dark: false },
  { id: "arctic",    label: "Arctic",           colors: ["#0ea5e9","#f0f8ff","#0a1628"], dark: false },
  { id: "ivory",     label: "Ivory Tech",       colors: ["#7c3aed","#faf9f7","#1a1814"], dark: false },
  { id: "rosegold",  label: "Rose Gold",        colors: ["#be5a38","#fdf8f6","#1a0e0a"], dark: false },
]

export function ThemeSwitcher() {
  const { theme, setTheme, isDark } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen && (
        <div
          className="absolute bottom-16 left-0 rounded-2xl shadow-2xl p-5 w-64 mb-2"
          style={{
            background: isDark ? "rgba(10,6,24,0.95)" : "rgba(255,255,255,0.95)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
              Theme
            </p>
            <div className="flex items-center gap-1">
              <Moon className="w-3 h-3" style={{ color: "var(--muted-foreground)" }} />
              <span className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>/</span>
              <Sun className="w-3 h-3" style={{ color: "var(--muted-foreground)" }} />
            </div>
          </div>

          {/* Dark themes */}
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)", fontSize: "10px" }}>
            Dark
          </p>
          <div className="space-y-1 mb-4">
            {themes.filter(t => t.dark).map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setIsOpen(false) }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:opacity-80"
                style={{
                  background: theme === t.id ? "var(--muted)" : "transparent",
                  border: theme === t.id ? "1px solid var(--primary)" : "1px solid transparent",
                }}
              >
                <div className="flex gap-1">
                  {t.colors.map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>

          {/* Light themes */}
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)", fontSize: "10px" }}>
            Light
          </p>
          <div className="space-y-1">
            {themes.filter(t => !t.dark).map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setIsOpen(false) }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:opacity-80"
                style={{
                  background: theme === t.id ? "var(--muted)" : "transparent",
                  border: theme === t.id ? "1px solid var(--primary)" : "1px solid transparent",
                }}
              >
                <div className="flex gap-1">
                  {t.colors.map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border border-black/10" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:opacity-90"
        style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          boxShadow: `0 0 20px var(--glow)`,
        }}
      >
        <Palette className="w-4 h-4" />
        <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-sans)" }}>Theme</span>
      </button>
    </div>
  )
}