"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
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

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const { isDark } = useTheme()

  return (
    <>
      <SectionDivider />
      <section
        id="pricing"
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          background: isDark ? "#0d0820" : "var(--secondary)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 0",
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, var(--primary) 0%, transparent 70%)`,
            opacity: 0.06,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

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
                Simple Pricing
              </span>
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            </div>

            <h2
              className="text-5xl md:text-7xl font-bold leading-none mb-10"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Invest in
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

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span
                className="text-sm font-medium"
                style={{
                  color: !isYearly ? "var(--foreground)" : "var(--muted-foreground)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-7 rounded-full transition-colors"
                style={{ background: isYearly ? "var(--primary)" : "var(--muted)" }}
              >
                <span
                  className="absolute top-0.5 w-6 h-6 rounded-full bg-white transition-transform shadow-sm"
                  style={{ transform: isYearly ? "translateX(32px)" : "translateX(2px)" }}
                />
              </button>
              <span
                className="text-sm font-medium"
                style={{
                  color: isYearly ? "var(--foreground)" : "var(--muted-foreground)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Annual
                <span
                  className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {siteConfig.pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: plan.highlight
                    ? isDark ? "rgba(124,58,237,0.12)" : "var(--card)"
                    : isDark ? "rgba(255,255,255,0.02)" : "var(--card)",
                  border: plan.highlight
                    ? "1px solid var(--primary)"
                    : "1px solid var(--border)",
                  boxShadow: plan.highlight ? `0 0 80px var(--glow)` : "none",
                  transform: plan.highlight ? "scale(1.04)" : "scale(1)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="h-1 w-full"
                    style={{
                      background: `linear-gradient(90deg, var(--primary), var(--accent))`,
                    }}
                  />
                )}

                {plan.badge && (
                  <div
                    className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: plan.highlight ? "var(--primary)" : "var(--muted)",
                      color: plan.highlight ? "var(--primary-foreground)" : "var(--muted-foreground)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-10 flex flex-col flex-1">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="text-sm mb-8 leading-relaxed"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {plan.description}
                  </p>

                  <div className="mb-10">
                    {plan.monthlyPrice === 0 ? (
                      <p
                        className="text-5xl font-bold"
                        style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                      >
                        Custom
                      </p>
                    ) : (
                      <>
                        <div className="flex items-end gap-1">
                          <span
                            className="text-6xl font-bold"
                            style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                          >
                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span
                            className="text-sm mb-2"
                            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                          >
                            /mo
                          </span>
                        </div>
                        {isYearly && (
                          <p
                            className="text-xs mt-2"
                            style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                          >
                            Billed annually · Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  <div className="space-y-3 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: "var(--primary)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-25">
                        <X
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: "var(--muted-foreground)" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#demo"
                    className="block w-full py-4 rounded-xl text-center text-sm font-semibold transition-all hover:opacity-90"
                    style={{
                      background: plan.highlight
                        ? "var(--primary)"
                        : isDark ? "rgba(255,255,255,0.06)" : "var(--secondary)",
                      color: plan.highlight ? "var(--primary-foreground)" : "var(--foreground)",
                      border: plan.highlight ? "none" : "1px solid var(--border)",
                      fontFamily: "var(--font-sans)",
                      boxShadow: plan.highlight ? `0 0 30px var(--glow)` : "none",
                    }}
                  >
                    {plan.monthlyPrice === 0 ? "Contact Sales" : "Start Free Trial"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className="text-center text-sm mt-12"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            All plans include a 14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </section>
    </>
  )
}