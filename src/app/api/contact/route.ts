import { serverEnvs } from "@/config/server-envs";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(serverEnvs.resendApiKey);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, phone } = await req.json();

    await resend.emails.send({
      from: "info@cloverstudio.es",
      to: "info@cloverstudio.es",
      replyTo: email,
      subject: `[Contacto Clover] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Error enviando el mensaje" },
      { status: 500 }
    );
  }
}
