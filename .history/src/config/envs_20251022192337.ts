import * as joi from "joi";

interface EnvVars {
  MONGO_URI: string;
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
}

const envsSchema = joi
  .object({
    MONGO_URI: joi.string().required(),
    RESEND_API_KEY: joi.string().required(),
    EMAIL_FROM: joi.string().email().required(),
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
};
