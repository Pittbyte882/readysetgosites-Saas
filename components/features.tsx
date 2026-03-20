"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, BarChart3, Globe, Workflow } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, React.ElementType> = {
  Brain, Zap, Shield, BarChart3, Globe, Workflow,
}

export function Features() {
  const { isDark } = useTheme()

  return (
    <section id="features" className="py-28 lg:py-36" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
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
              Platform Capabilities
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Everything your
            <br />
            <span style={{
              background: `linear-gradient(135deg, var(--primary), var(--accent))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              team needs.
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Built for modern teams who demand intelligence, speed, and reliability from their core platform.
          </p>
        </motion.div>
        {/* Features — split screen editorial */}
        <div className="space-y-8">
          {siteConfig.features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                style={{ border: "1px solid var(--border)" }}
              >
                {/* Image */}
                <div
                  className="relative h-64 md:h-80 overflow-hidden md:[direction:ltr]"
                  style={{ background: "var(--card)" }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-50 transition-all duration-700 hover:opacity-70 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, var(--primary) 0%, transparent 100%)`,
                      opacity: 0.25,
                    }}
                  />
                  {Icon && (
                    <div
                      className="absolute top-6 left-6 p-3 rounded-xl"
                      style={{ background: "var(--primary)", boxShadow: `0 0 30px var(--glow)` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex flex-col justify-center p-10 lg:p-14 md:[direction:ltr]"
                  style={{ background: isDark ? "var(--card)" : "var(--secondary)" }}
                >
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {feature.description}
                  </p>
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                  >
                    Learn more →
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}