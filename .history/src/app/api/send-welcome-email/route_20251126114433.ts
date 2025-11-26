import { NextResponse } from "next/server";
import { Resend } from "resend";
import { serverEnvs } from "@/config/server-envs";
import WelcomeEmail from "../../../../emails/WelcomeEmail";

const resend = new Resend(serverEnvs.resendApiKey);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    await resend.emails.send({
      from: serverEnvs.emailFrom!,
      to: email,
      subject: "Bienvenido a Clover Studio",
      react: WelcomeEmail({}), // 💥 Aquí usamos el componente React
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
