"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const { isDark } = useTheme()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden !py-0">

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="animate-mesh absolute w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            top: "-15%",
            left: "20%",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          className="animate-mesh absolute w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
            bottom: "10%",
            right: "10%",
            filter: "blur(60px)",
            animationDelay: "2s",
          }}
        />
        <motion.div
          className="animate-mesh absolute w-[350px] h-[350px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            top: "60%",
            left: "5%",
            filter: "blur(80px)",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full pt-40 pb-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 glass"
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--primary)" }} />
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            ✦ {siteConfig.badge}
          </span>
        </motion.div>

        {/* Headline — tightened from original */}
        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="font-bold mb-8"
  style={{
    fontFamily: "var(--font-display)",
    color: "var(--foreground)",
    fontSize: "clamp(2.8rem, 5vw, 3rem)",
    lineHeight: "1.05",
    letterSpacing: "-0.02em",
  }}
>
  The Intelligence{" "}
  <br />
  <span
    style={{
      background: `linear-gradient(135deg, var(--primary), var(--accent))`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    Layer
  </span>
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
        >
          {siteConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <a
            href="#demo"
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "var(--font-sans)",
              boxShadow: `0 0 40px var(--glow)`,
            }}
          >
            Start for Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-80 glass"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "var(--primary)" }}
            >
              <Play className="w-3 h-3 ml-0.5" style={{ color: "var(--primary-foreground)" }} />
            </div>
            Watch Demo
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative w-full max-w-4xl"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--border)",
              boxShadow: `0 0 100px var(--glow), 0 40px 80px rgba(0,0,0,0.4)`,
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div
                className="flex-1 mx-4 h-6 rounded-md flex items-center px-3"
                style={{ background: "var(--muted)" }}
              >
                <span
                  className="text-xs"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  app.nexus.ai/dashboard
                </span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6" style={{ background: "var(--background)" }}>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Revenue", value: "$2.4M", change: "+18.2%" },
                  { label: "Active Users", value: "48,291", change: "+12.1%" },
                  { label: "Conversion", value: "3.8%", change: "+0.4%" },
                  { label: "Churn Rate", value: "1.2%", change: "-0.3%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                  >
                    <p
                      className="text-xs mb-1"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="text-xl font-bold mb-1"
                      style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: stat.change.startsWith("+") ? "#34d399" : "#f87171",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="h-36 rounded-xl flex items-end gap-2 px-4 pb-4"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: i === 11
                        ? `linear-gradient(to top, var(--primary), var(--accent))`
                        : "var(--muted)",
                      opacity: i === 11 ? 1 : 0.4 + i * 0.04,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, var(--primary) 0%, transparent 70%)`,
              filter: "blur(40px)",
              opacity: 0.25,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}