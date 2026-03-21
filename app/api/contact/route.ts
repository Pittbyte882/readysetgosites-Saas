import { NextResponse } from "next/server"

// ─────────────────────────────────────────────
// BUYER SETUP INSTRUCTIONS
// Add these to your .env.local file:
//
// RESEND_API_KEY=re_xxxxxxxxxxxx
//   → Get this from resend.com/api-keys
//
// NOTIFY_EMAIL=you@yourdomain.com
//   → Where contact form submissions get sent
//
// FROM_EMAIL=hello@yourdomain.com
//   → Must be a verified domain in Resend
//   → Go to resend.com/domains to verify yours
// ─────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, company, subject, message } = data

    // ── Email to site owner ──
    const ownerEmailText = `
NEW CONTACT MESSAGE
===================

FROM
Name:     ${name}
Email:    ${email}
Company:  ${company || "Not provided"}

SUBJECT
${subject}

MESSAGE
${message}

===================
Sent from your website contact form.
    `

    // ── Confirmation to sender ──
    const senderEmailText = `
Hi ${name},

Thanks for reaching out! We've received your message
and will get back to you within 24 hours.

YOUR MESSAGE
------------
Subject: ${subject}

${message}

Best,
The Nexus Team
    `

    const [ownerRes, senderRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `Nexus <${process.env.FROM_EMAIL}>`,
          to: process.env.NOTIFY_EMAIL,
          subject: `New message from ${name} — ${subject}`,
          text: ownerEmailText,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `Nexus <${process.env.FROM_EMAIL}>`,
          reply_to: process.env.NOTIFY_EMAIL,
          to: email,
          subject: `We received your message — Nexus`,
          text: senderEmailText,
        }),
      }),
    ])

    if (!ownerRes.ok || !senderRes.ok) {
      throw new Error("Email sending failed")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
