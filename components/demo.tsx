"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ArrowRight, Building2, Users, BarChart3 } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

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
      alert("Something went wrong. Please email us at hello@nexus.ai")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle = {
    background: isDark ? "rgba(255,255,255,0.04)" : "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    outline: "none",
    backdropFilter: "blur(10px)",
    transition: "border-color 0.2s",
  }

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "8px",
    color: "var(--muted-foreground)",
    fontFamily: "var(--font-sans)",
  }

  return (
    <section
      id="demo"
      className="py-32 relative overflow-hidden"
      style={{ background: isDark ? "var(--secondary)" : "var(--muted)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          opacity: 0.06,
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Value props */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}>
                Request a Demo
              </span>
            </div>

            <h2
              className="text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              See Nexus
              <br />
              <span style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                in action.
              </span>
            </h2>

            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Book a personalized 30-minute demo with one of our intelligence specialists.
              We&apos;ll show you exactly how Nexus would work with your data and your team.
            </p>

            {/* What to expect */}
            <div className="space-y-5">
              {[
                { icon: BarChart3, title: "Live data demo", sub: "We connect to a sample of your actual data — no fake screenshots" },
                { icon: Building2, title: "Tailored to your industry", sub: "Restaurant, SaaS, e-commerce, or enterprise — we know your challenges" },
                { icon: Users, title: "Meet your success team", sub: "The people who will onboard you and be with you every step of the way" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0"
                    style={{ background: "var(--primary)", boxShadow: `0 0 20px var(--glow)` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <div>
                    <p className="font-bold mb-0.5" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                boxShadow: `0 0 80px var(--glow)`,
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="h-1.5 w-full"
                style={{ background: `linear-gradient(90deg, var(--primary), var(--accent))` }}
              />

              <div
                className="p-8 md:p-10"
                style={{ background: isDark ? "rgba(255,255,255,0.02)" : "var(--card)" }}
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "var(--primary)", boxShadow: `0 0 40px var(--glow)` }}
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
                      Your account manager will reach out within 2 business hours to schedule your personalized demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Full Name <span style={{ color: "var(--primary)" }}>*</span></label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Alex Johnson" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Work Email <span style={{ color: "var(--primary)" }}>*</span></label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="alex@company.com" style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Company Name <span style={{ color: "var(--primary)" }}>*</span></label>
                      <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Acme Corporation" style={inputStyle} />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label style={labelStyle}>Your Role <span style={{ color: "var(--primary)" }}>*</span></label>
                        <select required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}>
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
                        <label style={labelStyle}>Team Size <span style={{ color: "var(--primary)" }}>*</span></label>
                        <select required value={formData.teamSize} onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })} style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}>
                          <option value="">Select size</option>
                          <option value="1-10">1–10 people</option>
                          <option value="11-50">11–50 people</option>
                          <option value="51-200">51–200 people</option>
                          <option value="201-1000">201–1,000 people</option>
                          <option value="1000+">1,000+ people</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Primary Use Case</label>
                      <textarea
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        placeholder="Tell us what you're trying to solve — we'll tailor the demo to your specific challenges..."
                        rows={3}
                        style={{ ...inputStyle, resize: "none" as const }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontFamily: "var(--font-sans)",
                        boxShadow: `0 0 30px var(--glow)`,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          Book My Demo
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
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
  )
}