import z from "zod";

export const reviewInputSchema = z.object({
  name: z.string().min(1),
  rating: z.number().min(0).max(5),
  comment: z.string().min(1),
  productId: z.string().min(1),
});

export type ReviewInputType = z.infer<typeof reviewInputSchema>;

export const reviewOutputSchema = reviewInputSchema.extend({
  id: z.string(),
  approved: z.boolean().default(false), // lo puedes revisar manualmente
});

export type ReviewOutputType = z.infer<typeof reviewOutputSchema>;
