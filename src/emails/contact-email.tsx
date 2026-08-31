import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/locales";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
  locale: Locale;
};

export default function ContactEmail({
  name,
  email,
  message,
  locale,
}: Readonly<ContactEmailProps>) {
  const dict = getDictionary(locale).email;

  return (
    <Html>
      <Head />
      <Preview>{dict.preview.replace("{name}", name)}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>{dict.heading}</Heading>
          <Section style={section}>
            <Text style={label}>{dict.fromLabel}</Text>
            <Text style={value}>
              {name} ({email})
            </Text>
          </Section>
          <Hr style={hr} />
          <Section style={section}>
            <Text style={label}>{dict.messageLabel}</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap" }}>
              {message}
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>{dict.footerNote}</Text>
        </Container>
      </Body>
    </Html>
  );
}

ContactEmail.PreviewProps = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Hey, I'd love to work with you on a project.",
  locale: "en",
} satisfies ContactEmailProps;

const main = {
  backgroundColor: "#f2ead9",
  fontFamily: "'JetBrains Mono', 'Courier New', monospace",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "2px solid #2b2620",
  borderRadius: "0px",
  margin: "0 auto",
  padding: "32px",
  maxWidth: "480px",
};

const heading = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#2b2620",
  margin: "0 0 24px",
};

const section = {
  margin: "0 0 8px",
};

const label = {
  fontSize: "11px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  color: "#c0392b",
  margin: "0 0 4px",
};

const value = {
  fontSize: "14px",
  color: "#2b2620",
  margin: "0",
  lineHeight: "1.6",
};

const hr = {
  borderColor: "#2b2620",
  opacity: 0.15,
  margin: "16px 0",
};

const footer = {
  fontSize: "11px",
  color: "#5c5346",
  margin: "16px 0 0",
};
