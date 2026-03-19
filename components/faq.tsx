"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const faqs = [
  {
    question: "How long does it take to get started with Nexus?",
    answer: "Most teams are fully operational within 24–72 hours. Our onboarding team guides you through connecting your first data sources, and our AI begins generating insights immediately. We also offer white-glove implementation for Enterprise customers.",
  },
  {
    question: "Does Nexus work with our existing tech stack?",
    answer: "Yes. Nexus connects to 500+ tools including Salesforce, HubSpot, Stripe, PostgreSQL, Snowflake, BigQuery, Slack, and hundreds more. If we don't have a native integration, our open API allows you to connect anything. We've never met a stack we couldn't integrate with.",
  },
  {
    question: "How does Nexus handle our data security and privacy?",
    answer: "Security is foundational to everything we build. Nexus is SOC 2 Type II certified, GDPR and CCPA compliant, and uses zero-trust architecture. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never train our models on your data, and you can request complete data deletion at any time.",
  },
  {
    question: "What makes Nexus different from traditional BI tools like Tableau or Looker?",
    answer: "Traditional BI tools require someone to ask the right questions. Nexus proactively surfaces insights, anomalies, and opportunities you didn't know to look for — before they become problems or missed opportunities. It's the difference between reactive reporting and proactive intelligence.",
  },
  {
    question: "Can we try Nexus before committing?",
    answer: "Absolutely. Every plan starts with a 14-day free trial — no credit card required. You get full access to all features in your selected tier. Our team will help you connect your first data source and ensure you see real value before your trial ends.",
  },
  {
    question: "What does the Enterprise plan include that others don't?",
    answer: "Enterprise includes custom AI model training on your specific business data, SSO/SAML, dedicated infrastructure, on-premise deployment options, a dedicated customer success manager, custom SLAs up to 99.99% uptime, and white-glove onboarding. Pricing is based on your specific needs — contact our sales team for a custom quote.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { isDark } = useTheme()

  return (
    <section className="py-32" style={{ background: isDark ? "var(--secondary)" : "var(--secondary)" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                FAQs
              </span>
            </div>
            <h2
              className="text-6xl md:text-8xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Questions
              <br />
              <span style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                answered.
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Everything you need to know about Nexus. Can&apos;t find the answer? Talk to our team.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontFamily: "var(--font-sans)",
                boxShadow: `0 0 20px var(--glow)`,
              }}
            >
              Talk to Sales →
            </a>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all"
                style={{
                  border: `1px solid ${openIndex === i ? "var(--primary)" : "var(--border)"}`,
                  background: openIndex === i
                    ? isDark ? "rgba(255,255,255,0.04)" : "var(--card)"
                    : isDark ? "rgba(255,255,255,0.01)" : "transparent",
                  boxShadow: openIndex === i ? `0 0 30px var(--glow)` : "none",
                  backdropFilter: "blur(10px)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className="text-base font-semibold pr-4"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      background: openIndex === i ? "var(--primary)" : "var(--muted)",
                    }}
                  >
                    {openIndex === i
                      ? <Minus className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                      : <Plus className="w-4 h-4" style={{ color: "var(--muted-foreground)" }} />
                    }
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-6 pb-6 text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}