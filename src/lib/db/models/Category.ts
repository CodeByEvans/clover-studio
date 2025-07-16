// src/models/Category.ts
// Model for the Category collection

import { model, models, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true },
    textColor: { type: String, required: true },
    type: {
      type: String,
      enum: ["sober", "colorful", "general"],
      default: "general",
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

CategorySchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export const Category = models.Category || model("Category", CategorySchema);
