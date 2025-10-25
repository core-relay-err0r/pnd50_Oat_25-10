import { Html, Body, Head, Heading, Container, Text, Section, Hr, Preview } from "@react-email/components"

interface NewConsultationEmailProps {
  name: string
  email: string
  phone?: string
}

export default function NewConsultationEmail({
  name = "Alex Doe",
  email = "alex.doe@example.com",
  phone = "+1-555-123-4567",
}: NewConsultationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Consultation Request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Consultation Request</Heading>
          <Text style={paragraph}>You have received a new consultation request. See the details below:</Text>
          <Section style={infoSection}>
            <Text style={infoLabel}>Name:</Text>
            <Text style={infoValue}>{name}</Text>
          </Section>
          <Section style={infoSection}>
            <Text style={infoLabel}>Email:</Text>
            <Text style={infoValue}>{email}</Text>
          </Section>
          {phone && (
            <Section style={infoSection}>
              <Text style={infoLabel}>Phone:</Text>
              <Text style={infoValue}>{phone}</Text>
            </Section>
          )}
          <Hr style={hr} />
          <Text style={footer}>PND50 Website</Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #eaeaea",
  borderRadius: "4px",
}

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  padding: "0 40px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
  padding: "0 40px",
}

const infoSection = {
  padding: "0 40px",
}

const infoLabel = {
  fontSize: "14px",
  color: "#5e5e5e",
  marginBottom: "2px",
}

const infoValue = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
  marginTop: "0",
}

const hr = {
  borderColor: "#eaeaea",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  padding: "0 40px",
}
