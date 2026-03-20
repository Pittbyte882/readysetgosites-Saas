"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { isDark } = useTheme()

  return (
    <>
      <SectionDivider />
      <section
        id="faq"
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
        {/* Subtle glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
            opacity: 0.04,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — sticky header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: "var(--primary)" }} />
                <span
                  className="text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  FAQs
                </span>
              </div>

              <h2
                className="text-5xl md:text-7xl font-bold leading-none mb-8"
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
                className="text-lg leading-relaxed mb-10"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
                Everything you need to know about Nexus.
                Can&apos;t find the answer? Talk to our team.
              </p>
              <a
              
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontFamily: "var(--font-sans)",
                  boxShadow: `0 0 24px var(--glow)`,
                }}
              >
                Talk to Sales →
              </a>
            </motion.div>

            {/* Right — accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {siteConfig.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all"
                  style={{
                    border: `1px solid ${openIndex === i ? "var(--primary)" : "var(--border)"}`,
                    background: openIndex === i
                      ? isDark ? "rgba(124,58,237,0.06)" : "var(--card)"
                      : isDark ? "rgba(255,255,255,0.015)" : "transparent",
                    boxShadow: openIndex === i ? `0 0 40px var(--glow)` : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between p-8 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span
                      className="text-base font-semibold pr-6 leading-snug"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                    >
                      {faq.question}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
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
                          className="px-8 pb-8 text-sm leading-relaxed"
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
    </>
  )
}