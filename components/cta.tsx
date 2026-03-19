"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function CTA() {
  const { isDark } = useTheme()

  return (
    <section className="py-32 relative overflow-hidden !pb-0" style={{ background: "var(--background)" }}>

      {/* Massive gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, var(--primary) 0%, transparent 70%)`,
          opacity: isDark ? 0.12 : 0.06,
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass" style={{ border: "1px solid var(--border)" }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
              Join 48,000+ companies already using Nexus
            </span>
          </div>

          <h2
            className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Start building
            <br />
            <span style={{
              background: `linear-gradient(135deg, var(--primary), var(--accent))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              intelligence
            </span>
            <br />
            today.
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto mb-12"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            14-day free trial. No credit card. Full access to every feature.
            Your first insight will arrive before your coffee gets cold.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="group flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-sans)",
                boxShadow: `0 0 60px var(--glow), 0 20px 40px rgba(0,0,0,0.2)`,
              }}
            >
              Start for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="flex items-center gap-2 px-10 py-5 rounded-full text-lg font-semibold transition-all hover:opacity-80 glass"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
            >
              Book a Demo
            </a>
          </div>

          <p
            className="text-xs mt-6"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            SOC 2 Type II · GDPR Compliant · 99.9% Uptime SLA
          </p>
        </motion.div>
      </div>
    </section>
  )
}