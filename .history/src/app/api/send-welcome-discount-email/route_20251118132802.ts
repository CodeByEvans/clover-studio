import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeDiscountEmail from "../../../../emails/WelcomeDiscountEmail";
import { envs } from "@/config/envs";

const resend = new Resend(envs.resendApiKey);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    await resend.emails.send({
      from: envs.emailFrom!,
      to: email,
      subject: "Bienvenido a Clover Studio",
      react: WelcomeDiscountEmail({}), // 💥 Aquí usamos el componente React
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
