import { z } from "zod";

export const tagInputSchema = z.object({
  name: z.string().min(1),
});

export type TagInputSchemaType = z.infer<typeof tagInputSchema>;

export const tagOutputSchema = tagInputSchema.extend({
  slug: z.string(),
  isActive: z.boolean().default(true),
});

export const tagUpdateSchema = tagInputSchema.partial();
