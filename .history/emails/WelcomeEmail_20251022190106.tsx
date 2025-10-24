import * as React from "react";
import { Html } from "@react-email/html";

export default function WelcomeDiscountEmail({ name }: { name?: string }) {
  return (
    <Html>
      <div
        style={{
          fontFamily: "sans-serif",
          backgroundColor: "#fffaf3",
          padding: "24px",
          borderRadius: "12px",
          maxWidth: "600px",
          margin: "0 auto",
          border: "1px solid #f5e3d3",
        }}
      >
        <h1 style={{ color: "#ae0006" }}>¡Bienvenido a Clover Studio!</h1>
        <p style={{ fontSize: "16px", color: "#444" }}>
          {name ? `Hola ${name}, ` : ""}gracias por unirte a nuestra comunidad.
        </p>
        <p style={{ fontSize: "16px", color: "#444" }}>
          Aquí tienes tu <strong>15% de descuento</strong> para tu primera
          compra:
        </p>
        <div
          style={{
            backgroundColor: "#ae0006",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            letterSpacing: "1px",
            margin: "16px 0",
          }}
        >
          CLOVER15
        </div>
        <p style={{ fontSize: "15px", color: "#555" }}>
          Úsalo al finalizar tu compra en{" "}
          <a href="https://cloverstudio.es" style={{ color: "#ae0006" }}>
            cloverstudio.es
          </a>{" "}
          y disfruta del aroma de los pequeños detalles.
        </p>
        <p style={{ fontSize: "14px", color: "#999", marginTop: "24px" }}>
          Gracias por confiar en la magia artesanal de Clover Studio 💚
        </p>
      </div>
    </Html>
  );
}
