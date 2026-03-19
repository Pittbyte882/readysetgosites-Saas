"use client"

import { Zap, Twitter, Linkedin, Github, Youtube } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const links = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Security", "Privacy"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR", "SOC 2"],
}

export function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className="border-t"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--primary)", boxShadow: `0 0 20px var(--glow)` }}
              >
                <Zap className="w-4 h-4" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <span
                className="text-xl font-bold"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
              >
                NEXUS
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              The intelligence layer for modern business. Trusted by 48,000+ companies worldwide.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-lg transition-all hover:opacity-70"
                  style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-opacity hover:opacity-70"
                      style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
            © 2026 Nexus AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: isDark ? "rgba(52,211,153,0.1)" : "rgba(5,150,105,0.1)",
                color: "#34d399",
                border: "1px solid rgba(52,211,153,0.2)",
                fontFamily: "var(--font-sans)",
              }}
            >
              ● All systems operational
            </span>
            <p className="text-xs" style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}>
              Template by{" "}
              <a href="https://readysetgosites.com" className="hover:opacity-70 transition-opacity" style={{ color: "var(--primary)" }}>
                ReadySetGoSites
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}