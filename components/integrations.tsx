"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

const integrations = [
  { name: "Salesforce", color: "#00A1E0", letter: "SF" },
  { name: "Slack", color: "#4A154B", letter: "SL" },
  { name: "HubSpot", color: "#FF7A59", letter: "HS" },
  { name: "Stripe", color: "#635BFF", letter: "ST" },
  { name: "Notion", color: "#000000", letter: "NO" },
  { name: "Jira", color: "#0052CC", letter: "JI" },
  { name: "GitHub", color: "#181717", letter: "GH" },
  { name: "Figma", color: "#F24E1E", letter: "FG" },
  { name: "PostgreSQL", color: "#336791", letter: "PG" },
  { name: "Shopify", color: "#96BF48", letter: "SH" },
  { name: "Twilio", color: "#F22F46", letter: "TW" },
  { name: "Zendesk", color: "#03363D", letter: "ZD" },
  { name: "Intercom", color: "#1F8DED", letter: "IC" },
  { name: "Mixpanel", color: "#7856FF", letter: "MX" },
  { name: "Snowflake", color: "#29B5E8", letter: "SF" },
  { name: "BigQuery", color: "#4285F4", letter: "BQ" },
  { name: "MongoDB", color: "#47A248", letter: "MG" },
  { name: "Klaviyo", color: "#000000", letter: "KL" },
]

export function Integrations() {
  const { isDark } = useTheme()

  return (
    <section
      id="integrations"
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Gradient fade edges */}
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
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
              500+ Integrations
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-6xl md:text-8xl font-bold leading-none mb-6"
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
            className="text-xl max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Your existing tools don&apos;t change. Nexus connects to them all and creates a unified intelligence layer on top.
          </p>
        </motion.div>

        {/* Central nexus node */}
        <div className="relative flex items-center justify-center">
          <div className="relative">
            {/* Outer rings */}
            {[160, 280, 400].map((size, i) => (
              <div
                key={size}
                className="absolute rounded-full border animate-spin-slow"
                style={{
                  width: size,
                  height: size,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  borderColor: "var(--border)",
                  opacity: 0.3 - i * 0.08,
                  animationDuration: `${20 + i * 10}s`,
                  animationDirection: i % 2 === 0 ? "normal" : "reverse",
                }}
              />
            ))}

            {/* Center node */}
            <div
              className="relative w-24 h-24 rounded-2xl flex items-center justify-center z-10"
              style={{
                background: "var(--primary)",
                boxShadow: `0 0 60px var(--glow), 0 0 120px var(--glow)`,
              }}
            >
              <span className="text-2xl font-bold" style={{ color: "var(--primary-foreground)", fontFamily: "var(--font-display)" }}>N</span>
            </div>

            {/* Integration logos floating */}
            {integrations.slice(0, 12).map((integration, i) => {
              const angle = (i / 12) * 360
              const radius = 220
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <motion.div
                  key={integration.name}
                  className="absolute w-14 h-14 rounded-xl flex items-center justify-center text-white text-xs font-bold cursor-default"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    background: isDark
                      ? `linear-gradient(135deg, ${integration.color}33, ${integration.color}11)`
                      : `${integration.color}15`,
                    border: `1px solid ${integration.color}40`,
                    backdropFilter: "blur(10px)",
                    fontFamily: "var(--font-sans)",
                    color: isDark ? "var(--foreground)" : integration.color,
                    fontSize: "10px",
                    letterSpacing: "0.05em",
                  }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  {integration.letter}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* More integrations row */}
        <div className="flex flex-wrap justify-center gap-3 mt-20">
          {integrations.slice(12).map((integration, i) => (
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
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
            }}
          >
            +482 more
          </div>
        </div>
      </div>
    </section>
  )
}