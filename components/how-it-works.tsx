"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Database, Cpu, LineChart, Rocket } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, React.ElementType> = {
  Database, Cpu, LineChart, Rocket,
}

export function HowItWorks() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"])

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-28 lg:py-36"
      style={{ background: isDark ? "var(--secondary)" : "var(--secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              How Nexus Works
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
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

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
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

          <div className="space-y-28">
            {siteConfig.steps.map((step, i) => {
              const Icon = iconMap[step.icon]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className={`grid md:grid-cols-2 gap-16 items-center`}
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "var(--primary)", boxShadow: `0 0 40px var(--glow)` }}
                      >
                        {Icon && <Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />}
                      </div>
                      <span
                        className="text-5xl font-bold opacity-15"
                        style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
                      style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed mb-8"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {step.description}
                    </p>

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
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)`,
                          opacity: 0.18,
                        }}
                      />
                    </div>
                    <div
                      className="absolute -inset-4 rounded-3xl -z-10"
                      style={{
                        background: `radial-gradient(ellipse, var(--primary) 0%, transparent 70%)`,
                        opacity: 0.1,
                        filter: "blur(30px)",
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}