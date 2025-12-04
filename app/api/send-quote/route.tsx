import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Company email to receive all quote requests
const COMPANY_EMAIL = "info@pnd50.com"

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  try {
    const { contactInfo, selectedServices, totalPrice } = await request.json()

    console.log("[v0] Received quote request:", { contactInfo, selectedServices, totalPrice })

    // Format services list for email
    const servicesHtml = selectedServices
      .map(
        (service: { name: string; price: number; quantity?: number }) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">${service.name}${service.quantity ? ` (${service.quantity} employees)` : ""}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; text-align: right; color: #4f46e5; font-weight: bold;">฿${service.price.toLocaleString()}/month</td>
        </tr>
      `,
      )
      .join("")

    // Email template for company (internal notification)
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Quote Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">PND50 Pricing Calculator</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
            <h2 style="color: #4f46e5; margin-top: 0;">Client Information</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name / Company:</strong> ${contactInfo.name}</p>
              <p><strong>Email:</strong> ${contactInfo.email}</p>
              <p><strong>Phone:</strong> ${contactInfo.phone || "Not provided"}</p>
            </div>

            <h2 style="color: #4f46e5;">Selected Services</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <thead>
                <tr style="background: #f8f9fa;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #4f46e5;">Service</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #4f46e5;">Price</th>
                </tr>
              </thead>
              <tbody>
                ${servicesHtml}
              </tbody>
            </table>

            <div style="background: #4f46e5; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">Total Estimated Price</h3>
              <div style="font-size: 32px; font-weight: bold;">฿${totalPrice.toLocaleString()}/month</div>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Year 1 Total: ฿${(totalPrice * 12).toLocaleString()}</p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} PND50. All rights reserved.</p>
          </div>
        </body>
      </html>
    `

    console.log("[v0] Sending email to company:", COMPANY_EMAIL)
    const companyResult = await resend.emails.send({
      from: "PND50 Quote System <onboarding@resend.dev>",
      to: COMPANY_EMAIL,
      subject: `New Quote Request from ${contactInfo.name}`,
      html: companyEmailHtml,
    })
    console.log("[v0] Company email sent:", companyResult)

    return NextResponse.json({ success: true, companyResult })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("[v0] Error sending quote emails:", error)
    return NextResponse.json({ error: "Failed to send quote emails", details: errorMessage }, { status: 500 })
  }
}
