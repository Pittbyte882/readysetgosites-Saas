"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const testimonials = [
  {
    quote: "Nexus didn't just improve our analytics — it fundamentally changed how we make decisions. We went from weekly data reviews to real-time intelligence that our entire team acts on daily. Revenue is up 34% since implementation.",
    name: "Alexandra Chen",
    title: "Chief Operating Officer",
    company: "Meridian Health",
    revenue: "$340M ARR",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    logo: "MH",
  },
  {
    quote: "We evaluated every enterprise intelligence platform on the market. Nexus was the only one that could actually deliver on the promise of unified AI-powered insights without a 12-month implementation. We were live in 3 weeks.",
    name: "Marcus Williams",
    title: "VP of Engineering",
    company: "Cascade Ventures",
    revenue: "Series C · $180M raised",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    logo: "CV",
  },
  {
    quote: "The ROI was immediate. Within 30 days of deploying Nexus, our operations team identified $2.1M in process inefficiencies that we immediately eliminated. It paid for three years of subscription in the first month.",
    name: "Sarah Okafor",
    title: "CEO & Co-Founder",
    company: "Velocity Commerce",
    revenue: "4.2x ROI in 90 days",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    logo: "VC",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { isDark } = useTheme()

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "var(--background)" }}>

      {/* Massive background quote mark */}
      <div
        className="absolute top-10 left-10 text-[20rem] font-bold leading-none select-none pointer-events-none"
        style={{
          color: "var(--primary)",
          opacity: 0.03,
          fontFamily: "var(--font-display)",
        }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
              Customer Stories
            </span>
          </div>
          <h2
            className="text-6xl md:text-8xl font-bold leading-none"
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

        {/* Main testimonial */}
        <div className="grid lg:grid-cols-5 gap-12 items-center">

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
                  className="text-2xl md:text-3xl font-medium leading-relaxed mb-10"
                  style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover"
                    style={{ border: "2px solid var(--primary)" }}
                  />
                  <div>
                    <p className="font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                      {testimonials[current].title} · {testimonials[current].company}
                    </p>
                  </div>
                  <div
                    className="ml-auto px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: isDark ? "var(--muted)" : "var(--secondary)",
                      color: "var(--primary)",
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {testimonials[current].revenue}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
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

          {/* Company cards — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                onClick={() => setCurrent(i)}
                className="w-full p-5 rounded-2xl text-left transition-all"
                style={{
                  background: i === current
                    ? isDark ? "rgba(255,255,255,0.06)" : "var(--secondary)"
                    : "transparent",
                  border: `1px solid ${i === current ? "var(--primary)" : "var(--border)"}`,
                  backdropFilter: i === current ? "blur(10px)" : "none",
                  boxShadow: i === current ? `0 0 30px var(--glow)` : "none",
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                    style={{
                      background: i === current ? "var(--primary)" : "var(--muted)",
                      color: i === current ? "var(--primary-foreground)" : "var(--muted-foreground)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {t.logo}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
                      {t.company}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                      {t.revenue}
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
  )
}