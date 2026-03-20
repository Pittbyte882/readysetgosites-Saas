"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, BarChart3, Building2, Users } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

const iconMap: Record<string, React.ElementType> = { BarChart3, Building2, Users }

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

export function Demo() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: "", email: "", company: "",
    role: "", teamSize: "", useCase: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed")
      setIsSubmitted(true)
    } catch {
      alert(`Something went wrong. Please email us at ${siteConfig.email}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    background: isDark ? "rgba(255,255,255,0.04)" : "var(--secondary)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    width: "100%",
    padding: "16px 20px",
    borderRadius: "12px",
    outline: "none",
    transition: "border-color 0.2s",
  }

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "10px",
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-sans)",
  }

  return (
    <>
      <SectionDivider />
      <section
        id="demo"
        className="relative overflow-hidden"
        style={{
          minHeight: "100vh",
          background: isDark ? "#0d0820" : "var(--muted)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8rem 0",
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
            opacity: 0.05,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* Left — value props */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
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
                  Request a Demo
                </span>
              </div>

              <h2
                className="text-5xl md:text-6xl font-bold leading-none mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
              >
                {siteConfig.demo.title}
              </h2>

              <p
                className="text-lg leading-relaxed mb-14"
                style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
              >
                {siteConfig.demo.subtitle}
              </p>

              <div className="space-y-10">
                {siteConfig.demo.valueProps.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <div key={item.title} className="flex items-start gap-6">
                      <div
                        className="p-3 rounded-xl flex-shrink-0"
                        style={{
                          background: "var(--primary)",
                          boxShadow: `0 0 20px var(--glow)`,
                        }}
                      >
                        {Icon && <Icon className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />}
                      </div>
                      <div>
                        <p
                          className="font-bold text-lg mb-1"
                          style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                        >
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: `0 0 80px var(--glow)`,
                  background: isDark ? "rgba(255,255,255,0.02)" : "var(--card)",
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, var(--primary), var(--accent))`,
                  }}
                />

                <div className="p-10 md:p-12">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{
                          background: "var(--primary)",
                          boxShadow: `0 0 40px var(--glow)`,
                        }}
                      >
                        <Check className="w-10 h-10" style={{ color: "var(--primary-foreground)" }} />
                      </div>
                      <h3
                        className="text-3xl font-bold mb-3"
                        style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
                      >
                        Demo Requested!
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        Thank you, <strong style={{ color: "var(--foreground)" }}>{formData.name}</strong>.
                        Your account manager will reach out within 2 business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* Row 1 — Name + Email */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label style={labelStyle}>
                            Full Name <span style={{ color: "var(--primary)" }}>*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Alex Johnson"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>
                            Work Email <span style={{ color: "var(--primary)" }}>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@company.com"
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      {/* Row 2 — Company full width */}
                      <div>
                        <label style={labelStyle}>
                          Company Name <span style={{ color: "var(--primary)" }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corporation"
                          style={inputStyle}
                        />
                      </div>

                      {/* Row 3 — Role + Team size */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label style={labelStyle}>
                            Your Role <span style={{ color: "var(--primary)" }}>*</span>
                          </label>
                          <select
                            required
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                          >
                            <option value="">Select role</option>
                            <option value="ceo">CEO / Founder</option>
                            <option value="cto">CTO / VP Engineering</option>
                            <option value="coo">COO / Operations</option>
                            <option value="product">Product Manager</option>
                            <option value="data">Data / Analytics</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>
                            Team Size <span style={{ color: "var(--primary)" }}>*</span>
                          </label>
                          <select
                            required
                            value={formData.teamSize}
                            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                            style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                          >
                            <option value="">Select size</option>
                            <option value="1-10">1–10 people</option>
                            <option value="11-50">11–50 people</option>
                            <option value="51-200">51–200 people</option>
                            <option value="201-1000">201–1,000 people</option>
                            <option value="1000+">1,000+ people</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4 — Use case full width */}
                      <div>
                        <label style={labelStyle}>Primary Use Case</label>
                        <textarea
                          value={formData.useCase}
                          onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                          placeholder="Tell us what you're trying to solve — we'll tailor the demo to your specific challenges and show you exactly how Nexus fits into your workflow..."
                          rows={5}
                          style={{ ...inputStyle, resize: "none" as const }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
                        style={{
                          background: "var(--primary)",
                          color: "var(--primary-foreground)",
                          fontFamily: "var(--font-sans)",
                          boxShadow: `0 0 30px var(--glow)`,
                          letterSpacing: "0.06em",
                          fontSize: "15px",
                        }}
                      >
                        {isSubmitting ? "Submitting..." : (
                          <>
                            Book My Demo
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p
                        className="text-center text-xs"
                        style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                      >
                        We respond within 2 business hours · No spam ever
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}