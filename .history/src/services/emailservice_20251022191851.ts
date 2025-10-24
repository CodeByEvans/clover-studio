import axios from "axios";

export const sendWelcomeDiscountEmail = async (email: string) => {
  if (!email || !email.includes("@")) {
    throw new Error("Email inválido");
  }

  try {
    const response = await axios.post("/api/send-welcome-discount-email", {
      email,
    });
    return response.data;
  } catch (err: any) {
    console.error("Error al enviar el correo:", err);
    throw new Error(err.response?.data?.error || "Error al enviar el correo");
  }
};
