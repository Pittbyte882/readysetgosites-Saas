"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, ArrowDown } from "lucide-react"
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

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { isDark } = useTheme()
  const testimonials = siteConfig.testimonials

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)

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
          justifyContent: "center",
          padding: "8rem 0",
        }}
      >
        {/* Background quote mark */}
        <div
          className="absolute top-0 left-8 select-none pointer-events-none"
          style={{
            fontSize: "24rem",
            fontWeight: "700",
            lineHeight: 1,
            color: "var(--primary)",
            opacity: 0.025,
            fontFamily: "var(--font-display)",
          }}
        >
          "
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            Customer Stories
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-4 h-4" style={{ color: "var(--muted-foreground)" }} />
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
              >
                Customer Stories
              </span>
            </div>
            <h2
              className="text-5xl md:text-7xl font-bold leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Trusted by
              <br />
              <span style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                category leaders.
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 items-center">

            {/* Quote — 3 cols */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <Quote
                    className="w-12 h-12 mb-8"
                    style={{ color: "var(--primary)", opacity: 0.6 }}
                  />
                  <p
                    className="text-2xl md:text-3xl font-medium leading-relaxed mb-12"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                  >
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-5">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      style={{ border: "2px solid var(--primary)" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold text-lg"
                        style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                      >
                        {testimonials[current].name}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        {testimonials[current].title} · {testimonials[current].company}
                      </p>
                    </div>
                    <div
                      className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background: isDark ? "var(--muted)" : "var(--secondary)",
                        color: "var(--primary)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {testimonials[current].metric}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4 mt-12">
                <button
                  onClick={prev}
                  className="p-3 rounded-full transition-all hover:opacity-70"
                  style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="h-1 rounded-full transition-all"
                      style={{
                        width: i === current ? "32px" : "8px",
                        background: i === current ? "var(--primary)" : "var(--border)",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-3 rounded-full transition-all hover:opacity-70"
                  style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Company selector cards — 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              {testimonials.map((t, i) => (
                <motion.button
                  key={t.name}
                  onClick={() => setCurrent(i)}
                  className="w-full p-6 rounded-2xl text-left transition-all"
                  style={{
                    background: i === current
                      ? isDark ? "rgba(124,58,237,0.1)" : "var(--secondary)"
                      : "transparent",
                    border: `1px solid ${i === current ? "var(--primary)" : "var(--border)"}`,
                    boxShadow: i === current ? `0 0 30px var(--glow)` : "none",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: i === current ? "var(--primary)" : "var(--muted)",
                        color: i === current ? "var(--primary-foreground)" : "var(--muted-foreground)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {t.logo}
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-sm font-bold truncate"
                        style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                      >
                        {t.company}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        {t.metric}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-xs leading-relaxed line-clamp-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {t.quote.slice(0, 100)}...
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}