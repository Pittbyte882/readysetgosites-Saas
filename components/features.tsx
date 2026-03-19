"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, BarChart3, Globe, Workflow } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Our neural engine analyzes millions of data points in real-time, surfacing insights your team would take weeks to uncover manually.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Instant Automation",
    description: "Build powerful automation workflows without writing code. Connect your tools, define triggers, and let Nexus handle the repetitive work.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified, GDPR compliant, and built with zero-trust architecture. Your data is always protected and private.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Watch your business metrics update live. From sales funnels to operational efficiency — every number you need, when you need it.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deployed across 28 regions worldwide with 99.9% uptime SLA. Your platform stays fast and reliable no matter where your team is.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    icon: Workflow,
    title: "Seamless Integrations",
    description: "Connect with 500+ tools your team already uses. Salesforce, Slack, HubSpot, Stripe, and hundreds more — all unified in one platform.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
]

export function Features() {
  const { isDark } = useTheme()

  return (
    <section id="features" className="py-32" style={{ background: "var(--background)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
              Platform Capabilities
            </span>
          </div>
          <div className="max-w-4xl">
            <h2
              className="text-6xl md:text-8xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Everything your
              <br />
              <span style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                team needs.
              </span>
            </h2>
            <p
              className="text-xl max-w-2xl"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Built for modern teams who demand intelligence, speed, and reliability from their core platform.
            </p>
          </div>
        </motion.div>

        {/* Features — split screen editorial layout */}
        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Image */}
              <div
                className="relative h-64 md:h-80 overflow-hidden md:[direction:ltr]"
                style={{ background: "var(--card)" }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-60 transition-all duration-700 hover:opacity-80 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, var(--primary) 0%, transparent 100%)`,
                    opacity: 0.3,
                  }}
                />
                <div
                  className="absolute top-6 left-6 p-3 rounded-xl"
                  style={{
                    background: "var(--primary)",
                    boxShadow: `0 0 30px var(--glow)`,
                  }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                </div>
              </div>

              {/* Content */}
              <div
                className="flex flex-col justify-center p-10 md:p-14 md:[direction:ltr]"
                style={{ background: isDark ? "var(--card)" : "var(--secondary)" }}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                >
                  {feature.description}
                </p>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                  style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}