"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

export function Integrations() {
  const { isDark } = useTheme()
  const orbital = siteConfig.integrations.slice(0, 12)
  const pills = siteConfig.integrations.slice(12)

  return (
    <section
      id="integrations"
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, var(--background), transparent)` }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to top, var(--background), transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              500+ Integrations
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Connects to
            <br />
            <span style={{
              background: `linear-gradient(135deg, var(--primary), var(--accent))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              everything.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Your existing tools don&apos;t change. Nexus connects to them all and creates a unified intelligence layer on top.
          </p>
        </motion.div>

        {/* Orbital */}
        <div className="relative flex items-center justify-center py-16">
          <div className="relative">
            {[160, 280, 400].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border animate-spin-slow"
                style={{
                  width: size, height: size,
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderColor: "var(--border)",
                  opacity: 0.25 - i * 0.06,
                  animationDuration: `${20 + i * 10}s`,
                  animationDirection: i % 2 === 0 ? "normal" : "reverse",
                }}
              />
            ))}

            <div
              className="relative w-20 h-20 rounded-2xl flex items-center justify-center z-10"
              style={{
                background: "var(--primary)",
                boxShadow: `0 0 60px var(--glow), 0 0 120px var(--glow)`,
              }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: "var(--primary-foreground)", fontFamily: "var(--font-display)" }}
              >
                N
              </span>
            </div>

            {orbital.map((integration, i) => {
              const angle = (i / 12) * 360
              const radius = 210
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={integration.name}
                  className="absolute w-12 h-12 rounded-xl flex items-center justify-center text-white cursor-default"
                  style={{
                    left: "50%", top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    background: isDark
                      ? `linear-gradient(135deg, ${integration.color}33, ${integration.color}11)`
                      : `${integration.color}18`,
                    border: `1px solid ${integration.color}40`,
                    backdropFilter: "blur(10px)",
                    color: isDark ? "var(--foreground)" : integration.color,
                    fontSize: "10px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: "700",
                    letterSpacing: "0.05em",
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {integration.letter}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {pills.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: isDark ? "var(--card)" : "var(--secondary)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {integration.name}
            </motion.div>
          ))}
          <div
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "var(--font-sans)" }}
          >
            +482 more
          </div>
        </div>
      </div>
    </section>
  )
}