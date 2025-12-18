import { z } from "zod";

const envsSchema = z.object({

  RESEND_API_KEY: z.string(),
  EMAIL_FROM: z.string().email(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string(),
    NEXT_PUBLIC_API_URL: z.string().url(),
});

const parsed = envsSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(`Config validation error: ${parsed.error.message}`);
}

export const envs = {

  resendApiKey: parsed.data.RESEND_API_KEY,
  emailFrom: parsed.data.EMAIL_FROM,
  supabaseUrl: parsed.data.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: parsed.data.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    apiUrl: parsed.data.NEXT_PUBLIC_API_URL,
