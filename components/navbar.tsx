"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#integrations", label: "Integrations" },
  { href: "#pricing", label: "Pricing" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled
          ? isDark ? "rgba(3,1,10,0.85)" : "rgba(255,255,255,0.85)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--primary)", boxShadow: `0 0 20px var(--glow)` }}
          >
            <Zap className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
          >
            NEXUS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all hover:opacity-60"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="text-sm font-medium px-4 py-2 transition-all hover:opacity-70"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            Sign In
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
              boxShadow: `0 0 20px var(--glow)`,
            }}
          >
            Get Started Free
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          style={{ color: "var(--foreground)" }}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMobileOpen && (
        <div
          className="md:hidden border-t px-6 py-6 space-y-4"
          style={{
            background: isDark ? "rgba(3,1,10,0.98)" : "rgba(255,255,255,0.98)",
            borderColor: "var(--border)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium py-2 transition-opacity hover:opacity-70"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            className="block w-full text-center py-3 rounded-full text-sm font-semibold"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Get Started Free
          </a>
        </div>
      )}
    </header>
  )
}