import { z } from "zod";

export const categoryInputSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  color: z.enum(["sober", "colorful", "general"]),
});

export type CategoryInputSchemaType = z.infer<typeof categoryInputSchema>;

export const categoryOutputSchema = categoryInputSchema.extend({
  slug: z.string(),
  isActive: z.boolean().default(true),
});

export const categoryUpdateSchema = categoryInputSchema.partial();
