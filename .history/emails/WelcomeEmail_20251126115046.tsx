import * as React from "react";
import { Html } from "@react-email/html";

export default function WelcomeEmail({ name }: { name?: string }) {
  return (
    <Html>
      <body
        style={{
          backgroundColor: "#faf9f7",
          fontFamily: "'Inter', Arial, sans-serif",
          margin: 0,
          padding: 0,
          color: "#222",
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ padding: "0" }}
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="600"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid #e6e6e6",
                  padding: "40px 40px 30px",
                  textAlign: "center",
                }}
              >
                {/* Logo */}
                <tr>
                  <td>
                    <img
                      src="https://res.cloudinary.com/dri0yoxgm/image/upload/v1764153225/logo_jkxlkn.png"
                      width="120"
                      height="200"
                      alt="Clover Studio"
                      style={{ display: "block", margin: "0 auto" }}
                    />
                  </td>
                </tr>

                {/* Título */}
                <tr>
                  <td>
                    <h1
                      style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        color: "#309551",
                        margin: "0 0 20px",
                      }}
                    >
                      ¡Bienvenido a Clover Studio!
                    </h1>
                  </td>
                </tr>

                {/* Texto principal */}
                <tr>
                  <td>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.7",
                        color: "#555",
                        margin: "0 0 24px",
                      }}
                    >
                      {name ? `Hola ${name}, ` : "Hola,"}
                      gracias por unirte a nuestra comunidad de velas y aromas
                      hechos a mano. 🌿 Para darte la bienvenida, te regalamos
                      un{" "}
                      <strong style={{ color: "#309551" }}>
                        15% de descuento
                      </strong>{" "}
                      en tu primera compra.
                    </p>
                  </td>
                </tr>

                {/* Cupón */}
                <tr>
                  <td>
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: "#309551",
                        color: "#fff",
                        fontSize: "18px",
                        letterSpacing: "2px",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "12px 24px",
                        marginBottom: "28px",
                      }}
                    >
                      CLOVER15
                    </div>
                  </td>
                </tr>

                {/* CTA */}
                <tr>
                  <td>
                    <a
                      href="https://cloverstudio.es"
                      style={{
                        display: "inline-block",
                        backgroundColor: "#fff",
                        color: "#309551",
                        border: "2px solid #309551",
                        fontWeight: 600,
                        padding: "12px 28px",
                        borderRadius: "30px",
                        textDecoration: "none",
                        transition: "background-color 0.2s",
                      }}
                    >
                      Ir a la tienda
                    </a>
                  </td>
                </tr>

                {/* Pie */}
                <tr>
                  <td style={{ paddingTop: "36px" }}>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#999",
                        margin: 0,
                        lineHeight: "1.6",
                      }}
                    >
                      © {new Date().getFullYear()} Clover Studio Hecho con amor
                      y cera natural.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </Html>
  );
}
