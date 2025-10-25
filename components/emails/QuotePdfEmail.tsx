import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components"

interface QuotePdfEmailProps {
  clientInfo: any
  quotation: any
  companyName: string
}

function getServiceLabel(serviceType: string): string {
  switch (serviceType) {
    case "annual-bookkeeping-audit":
      return "Annual Bookkeeping and Audit"
    case "monthly-bookkeeping":
      return "Monthly Bookkeeping"
    case "quarterly-audit":
      return "Quarterly Audit"
    default:
      return "Not specified"
  }
}

export default function QuotePdfEmail({ clientInfo, quotation, companyName }: QuotePdfEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your PND50 Accounting Services Quote for {companyName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Your Accounting Services Quote</Heading>

          <Text style={text}>Dear {companyName} Team,</Text>

          <Text style={text}>
            Thank you for your interest in PND50 Accounting Services. We've prepared a detailed quotation based on your
            business requirements.
          </Text>

          <Section style={section}>
            <Text style={sectionTitle}>Quote Summary:</Text>
            {quotation.totalMonthly > 0 && (
              <Text style={text}>
                • {clientInfo.serviceType === "annual-bookkeeping-audit" ? "Annual" : "Monthly"} Service Fee: ฿
                {quotation.totalMonthly.toLocaleString()}
                {clientInfo.serviceType !== "annual-bookkeeping-audit" ? "/month" : ""}
              </Text>
            )}
            {quotation.annualAuditFee > 0 && (
              <Text style={text}>• Annual Audit Fee: ฿{quotation.annualAuditFee.toLocaleString()}</Text>
            )}
            <Text style={text}>
              •{" "}
              <strong>
                {quotation.totalMonthly < 1 ? "Total Annual Fee" : "Total Annual Investment"}: ฿
                {quotation.totalMonthly < 1
                  ? quotation.totalAnnual.toLocaleString()
                  : (
                      (clientInfo.serviceType === "annual-bookkeeping-audit"
                        ? quotation.totalMonthly
                        : quotation.totalMonthly * 12) + quotation.annualAuditFee
                    ).toLocaleString()}
              </strong>
            </Text>
          </Section>

          <Text style={text}>
            This quotation includes all the services discussed and is valid for 30 days. Below is the detailed breakdown
            of your quote:
          </Text>

          <Section style={section}>
            <Text style={sectionTitle}>Service Details:</Text>
            <Text style={text}>• Service Type: {getServiceLabel(clientInfo.serviceType)}</Text>
            <Text style={text}>• Business Type: {clientInfo.businessType || "Not specified"}</Text>
            <Text style={text}>• Monthly Transactions: {clientInfo.monthlyTransactions || "N/A"}</Text>
            <Text style={text}>• Annual Revenue: {clientInfo.annualRevenue || "N/A"}</Text>
            <Text style={text}>• VAT Registered: {clientInfo.hasVAT ? "Yes" : "No"}</Text>
            <Text style={text}>• Social Fund: {clientInfo.hasSocialFund ? "Yes" : "No"}</Text>
            <Text style={text}>• Employee Count: {clientInfo.employeeCount || "Not specified"}</Text>
            <Text style={text}>• Rush Processing: {clientInfo.needsRushProcessing ? "Yes (+30%)" : "No"}</Text>
          </Section>

          <Text style={text}>
            To proceed with our services or if you have any questions, please don't hesitate to contact us:
          </Text>

          <Text style={text}>
            Email: info@pnd50.com
            <br />
            We look forward to serving your accounting needs.
          </Text>

          <Text style={text}>
            Best regards,
            <br />
            The PND50 Accounting Team
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
}

const section = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e9ecef",
  borderRadius: "8px",
  margin: "24px 0",
  padding: "20px",
}

const sectionTitle = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
}
