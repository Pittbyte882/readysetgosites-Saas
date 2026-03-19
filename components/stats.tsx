"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

const stats = [
  { value: 48000, suffix: "+", label: "Active Companies", prefix: "" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", prefix: "" },
  { value: 2.4, suffix: "B", label: "Events Processed Daily", prefix: "" },
  { value: 180, suffix: "+", label: "Countries Served", prefix: "" },
]

function Counter({ value, suffix, prefix, duration = 2 }: { value: number; suffix: string; prefix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, (duration * 1000) / steps)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  const display = value < 10
    ? count.toFixed(1)
    : Math.round(count).toLocaleString()

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export function Stats() {
  const { isDark } = useTheme()

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: isDark ? "var(--secondary)" : "var(--muted)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter {...stat} />
              </p>
              <p
                className="text-sm font-medium uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}