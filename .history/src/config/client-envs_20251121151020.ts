// src/config/client-envs.ts
import { z } from "zod";

const envsSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string(),
});

const parsed = envsSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(`Client config validation error: ${parsed.error.message}`);
}

export const clientEnvs = {
  apiUrl: parsed.data.NEXT_PUBLIC_API_URL,
  supabaseUrl: parsed.data.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: parsed.data.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};
