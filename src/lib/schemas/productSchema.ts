import { z } from "zod";

export const productInputSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.preprocess(
    (val) => (typeof val === "string" ? Number(val) : val),
    z.number().min(0, "Price must be greater than 0")
  ),
  category: z.string().min(1),

  type: z.enum(["sober", "colorful", "general"]).optional().default("general"),
  badge: z
    .enum(["Nuevo", "Oferta", "Exclusivo", "Personalizable", "Gift-ready"])
    .optional(),
  originalPrice: z.number().positive().optional(),
  features: z.array(z.string()).optional(),
});

export type ProductInputSchemaType = z.infer<typeof productInputSchema>;

export const imageVersionSchema = z.object({
  thumbnail: z.string().url(),
  medium: z.string().url(),
  large: z.string().url(),
});

export type ImageVersionSchemaType = z.infer<typeof imageVersionSchema>;

export const productOutputSchema = productInputSchema.extend({
  slug: z.string().min(1),
  images: z.array(imageVersionSchema),
  rating: z.number().min(0).max(5).default(0),
  reviews: z.number().min(0).default(0),
  isActive: z.boolean().default(true),
});

export type ProductOutputSchemaType = z.infer<typeof productOutputSchema>;

export const productUpdateSchema = productInputSchema.partial();
