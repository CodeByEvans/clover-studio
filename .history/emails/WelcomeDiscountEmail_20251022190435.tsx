import * as React from "react";
import { Html } from "@react-email/html";

export default function WelcomeDiscountEmail({ name }: { name?: string }) {
  return (
    <Html>
      <body
        style={{
          backgroundColor: "#fdfaf6",
          fontFamily:
            "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
          margin: 0,
          padding: 0,
          color: "#333",
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: "#fdfaf6", padding: "40px 0" }}
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
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >
                {/* Encabezado con logo */}
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: "32px 20px",
                    }}
                  >
                    <img
                      src="https://cloverstudio.es/logo.svg"
                      width="80"
                      height="80"
                      alt="Clover Studio"
                      style={{ marginBottom: "12px" }}
                    />
                    <h1
                      style={{
                        color: "white",
                        fontSize: "28px",
                        fontWeight: "700",
                        margin: 0,
                      }}
                    >
                      ¡Bienvenido a Clover Studio!
                    </h1>
                  </td>
                </tr>

                {/* Contenido */}
                <tr>
                  <td style={{ padding: "40px 50px", textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "17px",
                        color: "#555",
                        lineHeight: "1.7",
                        margin: "0 0 24px",
                      }}
                    >
                      {name ? `Hola ${name}, ` : "Hola,"}
                      gracias por unirte a nuestro mundo de aromas y detalles
                      artesanales. 🌿
                    </p>

                    <p
                      style={{
                        fontSize: "17px",
                        color: "#555",
                        lineHeight: "1.7",
                        marginBottom: "28px",
                      }}
                    >
                      Como agradecimiento, aquí tienes un{" "}
                      <strong style={{ color: "#ae0006" }}>
                        15% de descuento
                      </strong>{" "}
                      para tu primera compra.
                    </p>

                    {/* Cupón */}
                    <div
                      style={{
                        display: "inline-block",
                        background:
                          "linear-gradient(135deg, #ae0006, #8B1E3F, #D97706)",
                        color: "#fff",
                        fontSize: "22px",
                        fontWeight: "bold",
                        letterSpacing: "2px",
                        padding: "14px 28px",
                        borderRadius: "50px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        marginBottom: "32px",
                      }}
                    >
                      CLOVER15
                    </div>

                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666",
                        marginBottom: "32px",
                      }}
                    >
                      Úsalo al finalizar tu compra en{" "}
                      <a
                        href="https://cloverstudio.es"
                        style={{
                          color: "#ae0006",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        cloverstudio.es
                      </a>{" "}
                      y deja que tu hogar respire calidez y elegancia.
                    </p>

                    {/* Botón */}
                    <a
                      href="https://cloverstudio.es"
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #ae0006, #8B1E3F)",
                        color: "#fff",
                        textDecoration: "none",
                        fontWeight: "600",
                        padding: "14px 36px",
                        borderRadius: "30px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        transition: "opacity 0.2s ease-in-out",
                      }}
                    >
                      Ir a la tienda 🌸
                    </a>
                  </td>
                </tr>

                {/* Pie */}
                <tr>
                  <td
                    align="center"
                    style={{
                      backgroundColor: "#fdf3e4",
                      padding: "20px 0",
                      fontSize: "14px",
                      color: "#7a6c5c",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      © {new Date().getFullYear()} Clover Studio · Hecho con
                      amor y cera
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
