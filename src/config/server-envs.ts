// src/config/server-envs.ts
import { z } from "zod";

const envsSchema = z.object({
  RESEND_API_KEY: z.string(),
  EMAIL_FROM: z.string().email(),
});

const parsed = envsSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(`Server config validation error: ${parsed.error.message}`);
}

export const serverEnvs = {
  resendApiKey: parsed.data.RESEND_API_KEY,
  emailFrom: parsed.data.EMAIL_FROM,
};
