import * as joi from "joi";

interface EnvVars {
  MONGO_URI: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

const envsSchema = joi
  .object({
    MONGO_URI: joi.string().required(),
    CLOUDINARY_CLOUD_NAME: joi.string().required(),
    CLOUDINARY_API_KEY: joi.string().required(),
    CLOUDINARY_API_SECRET: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  mongoUri: envVars.MONGO_URI,
  cloudinaryCloudName: envVars.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: envVars.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: envVars.CLOUDINARY_API_SECRET,
};
