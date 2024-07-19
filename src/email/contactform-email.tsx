import React from "react";

// React
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>Mensagem nova em seu portfólio</Preview>
    <Tailwind>
      <Body className="bg-stone-200 text-black">
        <Container>
          <Section className="bg-white border borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              Nova mensagem em seu Form de contato</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>E-mail de quem enviou: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
}
