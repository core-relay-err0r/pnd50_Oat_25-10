import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  try {
    const { clientInfo, quotation, userEmail } = await request.json()

    console.log("[v0] Received data:", { clientInfo, quotation, userEmail })

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Your Accounting Services Quote</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <!-- Updated header styling and branding -->
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">PND50 Accounting Services</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your Professional Accounting Quote</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
            <!-- Enhanced company information section -->
            <h2 style="color: #4f46e5; margin-top: 0;">Quote Details for ${clientInfo.companyName || "Your Company"}</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Company Information</h3>
              <p><strong>Company:</strong> ${clientInfo.companyName || "N/A"}</p>
              <p><strong>Email:</strong> ${clientInfo.email || "N/A"}</p>
              <p><strong>Phone:</strong> ${clientInfo.phone || "N/A"}</p>
              <p><strong>Business Type:</strong> ${clientInfo.businessType || "N/A"}</p>
              <p><strong>Service Type:</strong> ${clientInfo.serviceType || "N/A"}</p>
              <p><strong>Monthly Transactions:</strong> ${clientInfo.monthlyTransactions || "N/A"}</p>
              <p><strong>Annual Revenue:</strong> ${clientInfo.annualRevenue || "N/A"}</p>
              ${clientInfo.employeeCount ? `<p><strong>Employee Count:</strong> ${clientInfo.employeeCount}</p>` : ""}
              <p><strong>VAT Registration:</strong> ${clientInfo.hasVAT ? "Yes" : "No"}</p>
              <p><strong>Social Fund:</strong> ${clientInfo.hasSocialFund ? "Yes" : "No"}</p>
              <p><strong>Rush Processing:</strong> ${clientInfo.needsRushProcessing ? "Yes" : "No"}</p>
            </div>

            <!-- Improved service breakdown styling -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Service Breakdown</h3>
              <div style="border-bottom: 1px solid #e0e0e0; padding: 10px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span><strong>Monthly Accounting Fee</strong></span>
                  <span style="color: #4f46e5; font-weight: bold;">฿${quotation.monthlyAccountingFee?.toLocaleString() || "0"}</span>
                </div>
              </div>
              <div style="border-bottom: 1px solid #e0e0e0; padding: 10px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span><strong>Annual Audit Fee</strong></span>
                  <span style="color: #4f46e5; font-weight: bold;">฿${quotation.annualAuditFee?.toLocaleString() || "0"}</span>
                </div>
              </div>
              ${
                quotation.rushFee > 0
                  ? `
              <div style="border-bottom: 1px solid #e0e0e0; padding: 10px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span><strong>Rush Processing Fee</strong></span>
                  <span style="color: #4f46e5; font-weight: bold;">฿${quotation.rushFee?.toLocaleString() || "0"}</span>
                </div>
              </div>
              `
                  : ""
              }
            </div>

            <!-- Updated total investment section with new colors -->
            <div style="background: #4f46e5; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0;">${quotation.totalMonthly < 1 ? "Total Annual Fee" : "Total Monthly Investment"}</h3>
              <div style="font-size: 32px; font-weight: bold;">฿${quotation.totalMonthly < 1 ? quotation.totalAnnual?.toLocaleString() || "0" : quotation.totalMonthly?.toLocaleString() || "0"}</div>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">${quotation.totalMonthly < 1 ? "Annual Service Fee" : "Monthly Service Fee"}</p>
            </div>

            <!-- Enhanced next steps section -->
            <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Next Steps</h3>
              <ol style="margin: 0; padding-left: 20px;">
                <li>Review the services and pricing above</li>
                <li>We will get back to you within 1 business day.</li>
              </ol>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666;">Or contact us for more information.</p>
              <p style="margin: 10px 0;">
                <strong>Email:</strong> info@pnd50.com<br>
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© 2024 PND50 Accounting Services. All rights reserved.</p>
            <p>This quote is valid for 30 days from the date of issue.</p>
          </div>
        </body>
      </html>
    `

    console.log("[v0] Sending email to:", userEmail)
    console.log("[v0] Using sender:", "PND50 Accounting <onboarding@resend.dev>")

    const result = await resend.emails.send({
      from: "PND50 Accounting <onboarding@resend.dev>",
      to: "info@pnd50.com",
      subject: `Your Accounting Services Quote - ${clientInfo.companyName || "Company"}`,
      html: htmlContent,
    })

    console.log("[v0] Email sent successfully:", result)
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("[v0] Error sending quote email:", error)
    return NextResponse.json({ error: "Failed to send quote email", details: error.message }, { status: 500 })
  }
}
