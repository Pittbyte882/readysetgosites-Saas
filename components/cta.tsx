"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

function SectionDivider() {
  return (
    <div
      className="w-full h-px"
      style={{
        background: "linear-gradient(90deg, transparent 0%, var(--primary) 30%, var(--accent) 70%, transparent 100%)",
        opacity: 0.6,
      }}
    />
  )
}

export function CTA() {
  const { isDark } = useTheme()

  return (
    <>
      <SectionDivider />
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          background: isDark ? "#03010a" : "var(--background)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 0",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 50%, var(--primary) 0%, transparent 70%)`,
            opacity: isDark ? 0.1 : 0.05,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            opacity: isDark ? 0.3 : 0.15,
          }}
        />

        <div className="max-w-4xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-12 glass"
              style={{ border: "1px solid var(--border)" }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
                Join {siteConfig.stats[0].value.toLocaleString()}+ companies already using {siteConfig.name}
              </span>
            </div>

            {/* Headline — reduced from previous enormous size */}
            <h2
              className="font-bold leading-none mb-8 tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--foreground)",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
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
              className="text-xl max-w-xl mx-auto mb-14 leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              14-day free trial. No credit card. Full access to every feature.
              Your first insight will arrive before your coffee gets cold.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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
              className="text-sm"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              SOC 2 Type II · GDPR Compliant · 99.9% Uptime SLA
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}