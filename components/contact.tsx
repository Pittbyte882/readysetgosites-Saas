"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check, Mail, MessageSquare } from "lucide-react"
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

export function Contact() {
  const { isDark } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
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

  const contactCards = [
    {
      icon: Mail,
      label: "Email Us",
      value: siteConfig.email,
      sub: "We reply within 24 hours",
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MessageSquare,
      label: "Live Chat",
      value: "Start a conversation",
      sub: "Available Mon–Fri 9AM–6PM",
      href: "#",
    },
  ]

  return (
    <>
      <SectionDivider />
      <section
        id="contact"
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
        {/* Glow */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
            opacity: 0.05,
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "var(--primary)", fontFamily: "var(--font-sans)" }}
              >
                Get in Touch
              </span>
              <div className="h-px w-12" style={{ background: "var(--primary)" }} />
            </div>
            <h2
              className="text-5xl md:text-7xl font-bold leading-none mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
            >
              Let&apos;s start a
              <br />
              <span style={{
                background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                conversation.
              </span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Have a question about pricing, features, or anything else?
              Our team is ready to answer.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            {contactCards.map((card) => (
              <motion.a
                key={card.label}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl transition-all hover:opacity-80"
                style={{
                  background: isDark ? "rgba(255,255,255,0.03)" : "var(--secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="p-2.5 rounded-xl flex-shrink-0"
                  style={{
                    background: "var(--primary)",
                    boxShadow: `0 0 20px var(--glow)`,
                  }}
                >
                  <card.icon className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {card.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                  >
                    {card.sub}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                background: isDark ? "rgba(255,255,255,0.02)" : "var(--card)",
                boxShadow: `0 0 60px var(--glow)`,
              }}
            >
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
                      Message Sent!
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      Thank you, <strong style={{ color: "var(--foreground)" }}>{formData.name}</strong>.
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Row 1 — Name + Email */}
                    <div className="grid md:grid-cols-2 gap-6">
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

                    {/* Row 2 — Company + Subject */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label style={labelStyle}>Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corporation"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>
                          Subject <span style={{ color: "var(--primary)" }}>*</span>
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          style={{ ...inputStyle, appearance: "none" as const, cursor: "pointer" }}
                        >
                          <option value="">Select a topic</option>
                          <option value="pricing">Pricing & Plans</option>
                          <option value="features">Features & Capabilities</option>
                          <option value="enterprise">Enterprise Sales</option>
                          <option value="technical">Technical Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3 — Message full width */}
                    <div>
                      <label style={labelStyle}>
                        Message <span style={{ color: "var(--primary)" }}>*</span>
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        style={{ ...inputStyle, resize: "none" as const }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50"
                      style={{
                        background: "var(--primary)",
                        color: "var(--primary-foreground)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        letterSpacing: "0.06em",
                        boxShadow: `0 0 30px var(--glow)`,
                      }}
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p
                      className="text-center text-xs"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      We respond to all enquiries within 24 hours · Your information is kept private
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}