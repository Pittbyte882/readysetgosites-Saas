"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, Zap, Building2, Crown } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For small teams getting started with data intelligence.",
    highlight: false,
    badge: null,
    features: [
      "Up to 5 team members",
      "10 data source connections",
      "5GB data processed/month",
      "Standard dashboards",
      "50+ integrations",
      "Email support",
      "99.5% uptime SLA",
    ],
    notIncluded: ["Custom AI models", "SSO / SAML", "Dedicated success manager", "SLA guarantee"],
  },
  {
    name: "Growth",
    icon: Building2,
    monthlyPrice: 149,
    yearlyPrice: 119,
    description: "For growing companies that need more power and scale.",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 25 team members",
      "Unlimited data connections",
      "100GB data processed/month",
      "Custom dashboards & reports",
      "500+ integrations",
      "Priority support (4hr SLA)",
      "99.9% uptime SLA",
      "AI-powered insights",
      "Automation workflows",
      "API access",
    ],
    notIncluded: ["Custom AI models", "Dedicated success manager"],
  },
  {
    name: "Enterprise",
    icon: Crown,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For enterprises that need custom solutions and white-glove service.",
    highlight: false,
    badge: "Custom Pricing",
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom AI model training",
      "SSO / SAML / MFA",
      "Dedicated success manager",
      "Custom SLA (up to 99.99%)",
      "On-premise deployment option",
      "Custom integrations",
      "Advanced security controls",
      "SLA-backed support",
    ],
    notIncluded: [],
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const { isDark } = useTheme()

  return (
    <section id="pricing" className="py-32 relative overflow-hidden" style={{ background: isDark ? "var(--secondary)" : "var(--secondary)" }}>

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, var(--primary) 0%, transparent 70%)`,
          opacity: 0.06,
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
              Simple Pricing
            </span>
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-6xl md:text-8xl font-bold leading-none mb-8"
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

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className="text-sm font-medium"
              style={{ color: !isYearly ? "var(--foreground)" : "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
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
              style={{ color: isYearly ? "var(--foreground)" : "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
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
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: plan.highlight
                  ? isDark ? "rgba(255,255,255,0.06)" : "var(--card)"
                  : isDark ? "rgba(255,255,255,0.02)" : "var(--card)",
                border: plan.highlight
                  ? "1px solid var(--primary)"
                  : "1px solid var(--border)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: plan.highlight ? `0 0 60px var(--glow)` : "none",
                transform: plan.highlight ? "scale(1.02)" : "scale(1)",
              }}
            >
              {plan.highlight && (
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, var(--primary), var(--accent))` }} />
              )}

              {plan.badge && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: plan.highlight ? "var(--primary)" : "var(--muted)",
                    color: plan.highlight ? "var(--primary-foreground)" : "var(--muted-foreground)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      background: plan.highlight ? "var(--primary)" : "var(--muted)",
                    }}
                  >
                    <plan.icon
                      className="w-5 h-5"
                      style={{ color: plan.highlight ? "var(--primary-foreground)" : "var(--muted-foreground)" }}
                    />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                  >
                    {plan.name}
                  </h3>
                </div>

                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {plan.description}
                </p>

                <div className="mb-8">
                  {plan.monthlyPrice === 0 ? (
                    <p
                      className="text-4xl font-bold"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                    >
                      Custom
                    </p>
                  ) : (
                    <>
                      <div className="flex items-end gap-1">
                        <span
                          className="text-5xl font-bold"
                          style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                        >
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span
                          className="text-sm mb-1.5"
                          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          /mo
                        </span>
                      </div>
                      {isYearly && (
                        <p className="text-xs mt-1" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                          Billed annually · Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/yr
                        </p>
                      )}
                    </>
                  )}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                      <span className="text-sm" style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 opacity-30">
                      <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--muted-foreground)" }} />
                      <span className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#demo"
                  className="block w-full py-3.5 rounded-xl text-center text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: plan.highlight
                      ? "var(--primary)"
                      : isDark ? "var(--muted)" : "var(--secondary)",
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
          className="text-center text-sm mt-8"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
        >
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}