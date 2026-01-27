import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Company email to receive all quote requests
const COMPANY_EMAIL = "info@pnd50.com"

interface ServiceOption {
  id: string
  name: string
  price: number
}

interface SelectedService {
  name: string
  category: string
  type: string
  basePrice: number
  quantity?: number
  selectedOptions: ServiceOption[]
  optionsPrice: number
  totalPrice: number
}

interface PriceBreakdown {
  oneTime: number
  monthly: number
  annual: number
  periodTotal: number
}

interface QuoteRequest {
  contactInfo: {
    name: string
    email: string
    phone?: string
  }
  selectedServices: SelectedService[]
  priceBreakdown: PriceBreakdown
  totalPrice: number
}

const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`

const EMPLOYEE_BASED_SERVICES = ["Payroll Management", "Social Security Registration"]

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  try {
    const { contactInfo, selectedServices, priceBreakdown, totalPrice }: QuoteRequest = await request.json()

    // Format services list for email with full details
    const servicesHtml = selectedServices
      .map((service) => {
        const optionsHtml =
          service.selectedOptions.length > 0
            ? `<div style="font-size: 12px; color: #666; margin-top: 4px; padding-left: 12px;">
              ${service.selectedOptions.map((opt) => `+ ${opt.name}: ${formatPrice(opt.price)}`).join("<br/>")}
            </div>`
            : ""

        const showEmployeeCount = service.quantity && EMPLOYEE_BASED_SERVICES.includes(service.name)

        return `
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
              <strong>${service.name}</strong>
              ${showEmployeeCount ? ` <span style="color: #666;">(${service.quantity} employees)</span>` : ""}
              <br/>
              <span style="font-size: 12px; color: #888;">Category: ${service.category} | Type: ${service.type}</span>
              ${optionsHtml}
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; text-align: right; vertical-align: top;">
              <span style="color: #4f46e5; font-weight: bold;">${formatPrice(service.totalPrice)}</span>
              ${service.type === "Monthly" ? '<br/><span style="font-size: 11px; color: #888;">/month</span>' : ""}
              ${service.type === "Annual" ? '<br/><span style="font-size: 11px; color: #888;">/year</span>' : ""}
            </td>
          </tr>
        `
      })
      .join("")

    const clientServicesHtml = selectedServices
      .map((service) => {
        const showEmployeeCount = service.quantity && EMPLOYEE_BASED_SERVICES.includes(service.name)
        return `
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb;">
            ${service.name}
            ${showEmployeeCount ? ` <span style="color: #6b7280;">(${service.quantity} employees)</span>` : ""}
          </td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; text-align: right; color: #0284c7; font-weight: 600;">
            ${formatPrice(service.totalPrice)}${service.type === "Monthly" ? "/mo" : service.type === "Annual" ? "/yr" : ""}
          </td>
        </tr>
      `
      })
      .join("")

    // Email template for company (internal notification)
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Quote Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">PND50 Schedule Consultation</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px;">
            <h2 style="color: #4f46e5; margin-top: 0; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">Client Information</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 4px 0;"><strong>Name / Company:</strong></td>
                  <td style="padding: 4px 0;">${contactInfo.name}</td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>Email:</strong></td>
                  <td style="padding: 4px 0;"><a href="mailto:${contactInfo.email}" style="color: #4f46e5;">${contactInfo.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;"><strong>Phone:</strong></td>
                  <td style="padding: 4px 0;">${contactInfo.phone || "Not provided"}</td>
                </tr>
              </table>
            </div>

            <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">Selected Services</h2>
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

            <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 8px;">Price Breakdown</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 8px 0;">One-Time Fees:</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${formatPrice(priceBreakdown.oneTime)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">Monthly Fees (× 12 months):</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${formatPrice(priceBreakdown.monthly)} × 12 = ${formatPrice(priceBreakdown.monthly * 12)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">Annual Fees:</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: bold;">${formatPrice(priceBreakdown.annual)}</td>
                </tr>
              </table>
            </div>

            <div style="background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color: white; padding: 24px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">Year 1 Total</h3>
              <div style="font-size: 36px; font-weight: bold;">${formatPrice(totalPrice)}</div>
            </div>

            <div style="background: #fffbeb; border: 1px solid #fcd34d; padding: 16px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Action Required:</strong> Please follow up with this client within 24 hours.
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; color: #666; font-size: 12px;">
            <p>© ${new Date().getFullYear()} PND50. All rights reserved.</p>
            <p>This is an automated notification from the PND50 website.</p>
          </div>
        </body>
      </html>
    `

    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You for Your Inquiry - PND50</title>
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 26px; font-weight: 600;">Thank You, ${contactInfo.name.split(" ")[0]}!</h1>
            <p style="margin: 12px 0 0 0; font-size: 15px; opacity: 0.9;">We've received your consultation request</p>
          </div>
          
          <div style="background: white; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="margin: 0 0 24px 0; color: #4b5563;">
              Thank you for your interest in PND50's accounting and tax services. Our team will review your request and contact you within <strong>24 hours</strong>.
            </p>

            <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 24px 0;">
              <h3 style="margin: 0 0 12px 0; color: #0284c7; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Your Selected Services</h3>
              <table style="width: 100%; border-collapse: collapse;">
                ${clientServicesHtml}
              </table>
            </div>

            <!-- Added price breakdown section for client email -->
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
              <h3 style="margin: 0 0 16px 0; color: #1f2937; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Price Breakdown</h3>
              <table style="width: 100%; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">One-Time Fees</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #1f2937;">${formatPrice(priceBreakdown.oneTime)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">Monthly Fees (×12 months)</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #1f2937;">${formatPrice(priceBreakdown.monthly)} × 12 = ${formatPrice(priceBreakdown.monthly * 12)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;">Annual Fees</td>
                  <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #1f2937;">${formatPrice(priceBreakdown.annual)}</td>
                </tr>
              </table>
            </div>

            <div style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); padding: 20px; border-radius: 8px; margin: 24px 0; text-align: center;">
              <p style="margin: 0 0 4px 0; color: rgba(255,255,255,0.8); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Estimated Year 1 Total</p>
              <p style="margin: 0; font-size: 32px; font-weight: 700; color: white;">${formatPrice(totalPrice)}</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: rgba(255,255,255,0.7);">*Final pricing will be confirmed during consultation</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 28px 0;" />

            <h3 style="margin: 0 0 16px 0; color: #1f2937; font-size: 16px;">What Happens Next?</h3>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top; width: 24px;">
                  <div style="width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">1</div>
                </td>
                <td style="padding: 8px 0; color: #4b5563;">Our team reviews your requirements</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top;">
                  <div style="width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">2</div>
                </td>
                <td style="padding: 8px 0; color: #4b5563;">We'll contact you within 24 hours to schedule a consultation</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px 8px 0; vertical-align: top;">
                  <div style="width: 24px; height: 24px; background: #0284c7; color: white; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 600;">3</div>
                </td>
                <td style="padding: 8px 0; color: #4b5563;">Receive your customized quote and service plan</td>
              </tr>
            </table>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 28px 0;" />

            <div style="text-align: center;">
              <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;">Have questions? Contact us anytime</p>
              <a href="mailto:info@pnd50.com" style="color: #0284c7; text-decoration: none; font-weight: 600;">info@pnd50.com</a>
              <span style="color: #cbd5e1; margin: 0 8px;">|</span>
              <a href="https://www.pnd50.com" style="color: #0284c7; text-decoration: none; font-weight: 600;">www.pnd50.com</a>
            </div>
          </div>

          <div style="text-align: center; padding: 24px 20px; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">© ${new Date().getFullYear()} PND50 Co., Ltd. All rights reserved.</p>
            <p style="margin: 8px 0 0 0;">Your trusted partner for accounting and tax services in Thailand</p>
          </div>
        </body>
      </html>
    `

    const [companyResult, clientResult] = await Promise.all([
      // Email 1: Admin notification to info@pnd50.com
      resend.emails.send({
        from: "PND50 Quote System <noreply@pnd50.com>",
        to: COMPANY_EMAIL,
        subject: `New Quote Request: ${formatPrice(totalPrice)} (Year 1) - ${contactInfo.name}`,
        html: companyEmailHtml,
      }),
      // Email 2: Client confirmation to their email
      resend.emails.send({
        from: "PND50 <noreply@pnd50.com>",
        to: contactInfo.email,
        subject: `Thank You for Your Inquiry - PND50`,
        html: clientEmailHtml,
      }),
    ])

    return NextResponse.json({ success: true, companyResult, clientResult })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Error sending quote emails:", error)
    return NextResponse.json({ error: "Failed to send quote emails", details: errorMessage }, { status: 500 })
  }
}
