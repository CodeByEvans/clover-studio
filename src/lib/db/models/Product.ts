// src/models/Product.ts
// Model for the Product collection

import { model, models, Schema } from "mongoose";

const ProductImageSchema = new Schema({
  thumbnail: { type: String, required: true },
  medium: { type: String, required: true },
  large: { type: String, required: true },
});

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [ProductImageSchema], default: [] },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    type: {
      type: String,
      enum: ["sober", "colorful", "general"],
      default: "general",
    },
    badge: {
      type: String,
      enum: ["Nuevo", "Oferta", "Exclusivo", "Personalizable", "Gift-ready"],
      optional: true,
    },
    originalPrice: {
      type: Number,
      optional: true,
    },
    features: {
      type: [String],
      optional: true,
    },
  },
  { timestamps: true }
);

ProductSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export const Product = models.Product || model("Product", ProductSchema);
