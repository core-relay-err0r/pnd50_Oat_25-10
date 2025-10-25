import { Html, Body, Head, Heading, Container, Text, Hr, Preview, Link } from "@react-email/components"

interface ConfirmationEmailProps {
  name: string
}

export default function ConfirmationEmail({ name = "Alex Doe" }: ConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your Consultation Request has been received!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Thank You, {name}!</Heading>
          <Text style={paragraph}>
            We have successfully received your request for a consultation. Our team will review your information and get
            back to you within one business day.
          </Text>
          <Text style={paragraph}>
            In the meantime, feel free to browse our services or visit our website for more information.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            <Link href="https://pnd50.com" style={link}>
              PND50
            </Link>
            , a Burakorn Partners Group company.
          </Text>
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

const link = {
  color: "#067df7",
  textDecoration: "none",
}
