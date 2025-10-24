import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Img,
} from "@react-email/components";

export default function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#FEFCF9",
          fontFamily: "sans-serif",
          color: "#333",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "480px",
            margin: "0 auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <Section style={{ textAlign: "center" }}>
            <Img
              src="https://tusitio.com/logo.png"
              width="100"
              height="100"
              alt="Clover Studio"
              style={{ margin: "0 auto 20px" }}
            />
            <Heading
              as="h1"
              style={{
                color: "#ae0006",
                fontSize: "26px",
                marginBottom: "12px",
              }}
            >
              🌿 ¡Bienvenido a Clover Studio!
            </Heading>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Nos alegra que te unas a nuestra comunidad de amantes de lo
              artesanal. A partir de ahora, serás el primero en conocer nuestros
              nuevos productos, descuentos y consejos para llenar tu hogar de
              calidez y aroma.
            </Text>
            <Text
              style={{
                marginTop: "20px",
                color: "#246B3D",
                fontWeight: "bold",
              }}
            >
              ¡Gracias por confiar en nosotros!
            </Text>
            <Text
              style={{ fontSize: "14px", marginTop: "30px", color: "#777" }}
            >
              Equipo de Clover Studio 💚
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
