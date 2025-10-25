"use server"

import { z } from "zod"
import { Resend } from "resend"
import NewConsultationEmail from "@/components/emails/NewConsultationEmail"
import ConfirmationEmail from "@/components/emails/ConfirmationEmail"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const scheduleSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
})

const quotePdfSchema = z.object({
  clientInfo: z.object({
    companyName: z.string().min(1),
    businessType: z.string().optional(),
    serviceType: z.string().min(1),
    monthlyTransactions: z.string().optional(),
    annualRevenue: z.string().optional(),
    hasVAT: z.boolean(),
    hasSocialFund: z.boolean(),
    employeeCount: z.string().optional(),
    needsRushProcessing: z.boolean(),
  }),
  quotation: z.object({
    monthlyAccountingFee: z.number(),
    annualAuditFee: z.number(),
    rushFee: z.number(),
    totalMonthly: z.number(),
    totalAnnual: z.number(),
  }),
  userEmail: z.string().email(),
})

export type FormState = {
  message: string
  status: "success" | "error"
  errors?: Record<string, string[]>
}

export async function scheduleConsultation(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!resend) {
    console.error("Resend is not configured. RESEND_API_KEY is missing.")
    return {
      message: "Email service is not configured correctly. Please contact support.",
      status: "error",
    }
  }

  const validatedFields = scheduleSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  })

  if (!validatedFields.success) {
    return {
      message: "Please fix the errors below.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, phone } = validatedFields.data

  try {
    // NOTE: In Resend's sandbox mode, you can only send emails TO your verified email address.
    // The 'from' address must be 'onboarding@resend.dev' until you verify a domain.
    const teamEmail = "info@pnd50.com" // <-- IMPORTANT: Replace with your actual team email address

    // Send notification email to your team
    await resend.emails.send({
      from: "PND50 Website <info@pnd50.com>",
      to: teamEmail,
      subject: "New Consultation Request",
      react: NewConsultationEmail({ name, email, phone }),
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: "PND50 <info@pnd50.com>",
      to: email,
      subject: "Consultation Request Received",
      react: ConfirmationEmail({ name }),
    })

    return {
      message: "Thank you! Your consultation has been scheduled successfully.",
      status: "success",
    }
  } catch (e) {
    console.error(e)
    // Handle specific Resend sandbox error
    if (e instanceof Error && e.message.includes("you can only send email to your own email address")) {
      return {
        message:
          "Email service is in sandbox mode. Emails can only be sent to the verified address used for your Resend account.",
        status: "error",
      }
    }
    return {
      message: "An unexpected error occurred while sending the email. Please try again.",
      status: "error",
    }
  }
}

export async function generateAndSendQuotePdf(prevState: FormState, formData: FormData): Promise<FormState> {
  if (!resend) {
    console.error("Resend is not configured. RESEND_API_KEY is missing.")
    return {
      message: "Email service is not configured correctly. Please contact support.",
      status: "error",
    }
  }

  try {
    const data = JSON.parse(formData.get("data") as string)
    const validatedFields = quotePdfSchema.safeParse(data)

    if (!validatedFields.success) {
      return {
        message: "Invalid quote data provided.",
        status: "error",
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    const { clientInfo, quotation, userEmail } = validatedFields.data

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Your PND50 Accounting Services Quote</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc; margin: 0; padding: 20px;">
          <div style="background-color: #ffffff; margin: 0 auto; padding: 40px; max-width: 600px; border-radius: 8px;">
            <h1 style="color: #333; font-size: 24px; font-weight: bold; text-align: center; margin-bottom: 30px;">
              Your Accounting Services Quote
            </h1>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              Dear ${clientInfo.companyName} Team,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              Thank you for your interest in PND50 Accounting Services. We've prepared a detailed quotation based on your business requirements.
            </p>
            
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; margin: 24px 0; padding: 20px;">
              <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 16px 0;">Quote Summary:</h3>
              
              ${
                quotation.totalMonthly > 0
                  ? `
                <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                  • ${clientInfo.serviceType === "annual-bookkeeping-audit" ? "Annual" : "Monthly"} Service Fee: ฿${quotation.totalMonthly.toLocaleString()}${clientInfo.serviceType !== "annual-bookkeeping-audit" ? "/month" : ""}
                </p>
              `
                  : ""
              }
              
              ${
                quotation.annualAuditFee > 0
                  ? `
                <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                  • Annual Audit Fee: ฿${quotation.annualAuditFee.toLocaleString()}
                </p>
              `
                  : ""
              }
              
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • <strong>${quotation.totalMonthly < 1 ? "Total Annual Fee" : "Total Annual Investment"}: ฿${((clientInfo.serviceType === "annual-bookkeeping-audit" ? quotation.totalMonthly : quotation.totalMonthly * 12) + quotation.annualAuditFee).toLocaleString()}</strong>
              </p>
              
              ${
                clientInfo.needsRushProcessing
                  ? `
                <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                  • Rush Processing Fee: ฿${quotation.rushFee.toLocaleString()}
                </p>
              `
                  : ""
              }
            </div>
            
            <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; margin: 24px 0; padding: 20px;">
              <h3 style="color: #333; font-size: 18px; font-weight: bold; margin: 0 0 16px 0;">Service Details:</h3>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • Business Type: ${clientInfo.businessType || "Not specified"}
              </p>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • Service Type: ${clientInfo.serviceType}
              </p>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • Monthly Transactions: ${clientInfo.monthlyTransactions || "Not specified"}
              </p>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • Annual Revenue: ${clientInfo.annualRevenue || "Not specified"}
              </p>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • VAT Registration: ${clientInfo.hasVAT ? "Yes" : "No"}
              </p>
              <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                • Social Security Fund: ${clientInfo.hasSocialFund ? "Yes" : "No"}
              </p>
              ${
                clientInfo.employeeCount
                  ? `
                <p style="color: #333; font-size: 16px; line-height: 26px; margin: 8px 0;">
                  • Employee Count: ${clientInfo.employeeCount}
                </p>
              `
                  : ""
              }
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              This quotation includes all the services discussed and is valid for 30 days.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              To proceed with our services or if you have any questions, please don't hesitate to contact us:
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              Email: info@pnd50.com<br>
              We look forward to serving your accounting needs.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 26px; margin: 16px 0;">
              Best regards,<br>
              The PND50 Accounting Team
            </p>
          </div>
        </body>
      </html>
    `

    // Send quote email using HTML template
    await resend.emails.send({
      from: "PND50 Accounting <onboarding@resend.dev>",
      to: userEmail,
      subject: `Your Accounting Services Quote - ${clientInfo.companyName}`,
      html: emailHtml,
    })

    return {
      message: "Quote has been sent to your email successfully!",
      status: "success",
    }
  } catch (e) {
    console.error("Error generating quote PDF:", e)
    return {
      message: "An unexpected error occurred while sending the quote. Please try again.",
      status: "error",
    }
  }
}
