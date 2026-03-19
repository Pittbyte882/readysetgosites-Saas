import { NextResponse } from "next/server"
import { siteConfig } from "@/config/site"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, role, teamSize, useCase } = data

    const ownerEmail = `
NEW DEMO REQUEST — ${siteConfig.name}
======================================

CONTACT
Name:       ${name}
Email:      ${email}
Company:    ${company}
Role:       ${role}
Team Size:  ${teamSize}

USE CASE
${useCase || "Not provided"}

======================================
Respond within 2 business hours.
    `

    const prospectEmail = `
Hi ${name},

Thank you for requesting a demo of ${siteConfig.name}!

We've received your request and your dedicated account manager
will reach out within 2 business hours to schedule your
personalized 30-minute demo.

YOUR REQUEST SUMMARY
---------------------
Company:   ${company}
Role:      ${role}
Team Size: ${teamSize}
${useCase ? `\nUse Case:\n${useCase}` : ""}

In the meantime, feel free to explore our documentation
at docs.nexus.ai or start your free trial at app.nexus.ai.

Looking forward to showing you what Nexus can do.

The ${siteConfig.name} Team
    `

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: `${siteConfig.name} <${siteConfig.fromEmail}>`,
          to: siteConfig.notifyEmail,
          subject: `Demo Request — ${name} at ${company} (${teamSize})`,
          text: ownerEmail,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({
          from: `${siteConfig.name} <${siteConfig.fromEmail}>`,
          to: email,
          subject: `Your ${siteConfig.name} demo is confirmed — we'll be in touch shortly`,
          text: prospectEmail,
        }),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Demo request error:", error)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
