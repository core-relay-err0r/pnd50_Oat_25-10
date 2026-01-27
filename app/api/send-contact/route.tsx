import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, telephone, whatsappId, companyName, businessType, serviceType } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailContent = `
      <h2>New Contact Information Received</h2>
      <p><strong>Email:</strong> ${email}</p>
      ${telephone ? `<p><strong>Telephone:</strong> ${telephone}</p>` : ""}
      ${whatsappId ? `<p><strong>WhatsApp ID:</strong> ${whatsappId}</p>` : ""}
      ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ""}
      ${businessType ? `<p><strong>Business Type:</strong> ${businessType}</p>` : ""}
      ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}
    `

    await resend.emails.send({
      from: "Contact Form <noreply@yourdomain.com>",
      to: ["info@pnd50.com"],
      subject: "New Contact Information Received",
      html: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
