"use client"

import { Zap, Twitter, Linkedin, Github, Youtube } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { siteConfig } from "@/config/site"

const links = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Security", "Privacy"],
  Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR", "SOC 2"],
}

const socialIcons: Record<string, React.ElementType> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
}

export function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className="border-t"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-6 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
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
                {siteConfig.name.toUpperCase()}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              {siteConfig.tagline}. Trusted by {siteConfig.stats[0].value.toLocaleString()}+ companies worldwide.
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social)
                .filter(([, url]) => url)
                .map(([platform, url]) => {
                  const Icon = socialIcons[platform]
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      className="p-2 rounded-lg transition-all hover:opacity-70"
                      style={{ border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : null
                })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
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
          <p
            className="text-xs"
            style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
          >
            © {new Date().getFullYear()} {siteConfig.name} AI, Inc. All rights reserved.
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
            <p
              className="text-xs"
              style={{ color: "var(--muted-foreground)", fontFamily: "var(--font-sans)" }}
            >
              Template by{" "}
              <a
                href="https://readysetgosites.com"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "var(--primary)" }}
              >
                ReadySetGoSites
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}