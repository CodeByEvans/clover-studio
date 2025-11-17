import * as joi from "joi";

interface EnvVars {
  MONGO_URI: string;
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: string;
}

const envsSchema = joi
  .object({
    MONGO_URI: joi.string().required(),
    RESEND_API_KEY: joi.string().required(),
    EMAIL_FROM: joi.string().email().required(),
    NEXT_PUBLIC_SUPABASE_URL: joi.string().required(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  mongoUri: envVars.MONGO_URI,
  resendApiKey: envVars.RESEND_API_KEY,
  emailFrom: envVars.EMAIL_FROM,
  supabaseUrl: envVars.NEXT_PUBLIC_SUPABASE_URL,
  supabaseKey: envVars.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};
