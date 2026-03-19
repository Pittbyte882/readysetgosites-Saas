"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Database, Cpu, LineChart, Rocket } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Connect Your Data",
    description: "Integrate all your data sources in minutes. Databases, APIs, SaaS tools, spreadsheets — Nexus connects to everything and unifies it into a single source of truth.",
    detail: "500+ native integrations · Real-time sync · Zero data loss",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Processes Everything",
    description: "Our AI engine automatically cleans, categorizes, and enriches your data. It learns your business patterns and begins identifying opportunities and anomalies immediately.",
    detail: "GPT-4 powered · Custom models · Continuous learning",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Insights Surface Instantly",
    description: "Dashboards, reports, and alerts update in real time. Your team gets the exact information they need, when they need it, without ever digging through data manually.",
    detail: "Live dashboards · Smart alerts · Natural language queries",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Take Action Automatically",
    description: "Nexus doesn't just show you what's happening — it acts on it. Set up automation workflows that trigger the right response the moment an insight is detected.",
    detail: "No-code workflows · Multi-step automation · Human-in-the-loop",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
]

export function HowItWorks() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-32"
      style={{ background: isDark ? "var(--secondary)" : "var(--secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
              How Nexus Works
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-6xl md:text-8xl font-bold leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
          >
            Four steps to
            <br />
            <span style={{
              background: `linear-gradient(135deg, var(--primary), var(--accent))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              intelligence.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: lineHeight,
                background: `linear-gradient(to bottom, var(--primary), var(--accent))`,
                boxShadow: `0 0 10px var(--glow)`,
              }}
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content side */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    {/* Step number */}
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--primary)",
                        boxShadow: `0 0 40px var(--glow)`,
                      }}
                    >
                      <step.icon className="w-7 h-7" style={{ color: "var(--primary-foreground)" }} />
                    </div>
                    <span
                      className="text-6xl font-bold opacity-20"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-4xl font-bold mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {step.description}
                  </p>

                  {/* Detail pills */}
                  <div className="flex flex-wrap gap-2">
                    {step.detail.split(" · ").map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: isDark ? "var(--muted)" : "var(--card)",
                          border: "1px solid var(--border)",
                          color: "var(--muted-foreground)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div className={`relative ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                    style={{
                      border: "1px solid var(--border)",
                      boxShadow: `0 0 60px var(--glow)`,
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)`,
                        opacity: 0.2,
                      }}
                    />
                  </div>

                  {/* Floating glow */}
                  <div
                    className="absolute -inset-4 rounded-3xl -z-10"
                    style={{
                      background: `radial-gradient(ellipse, var(--primary) 0%, transparent 70%)`,
                      opacity: 0.15,
                      filter: "blur(30px)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}