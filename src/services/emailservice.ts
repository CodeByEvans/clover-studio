import axios from "axios";

export const sendWelcomeEmail = async (email: string) => {
  if (!email || !email.includes("@")) {
    throw new Error("Email inválido");
  }

  try {
    const response = await axios.post("/api/send-welcome-email", {
      email,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al enviar el correo:", err.response?.data);
      throw new Error(err.response?.data?.error || "Error al enviar el correo");
    } else {
      console.error("Error inesperado:", err);
      throw new Error("Error inesperado al enviar el correo");
    }
  }
};
