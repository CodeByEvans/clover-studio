// src/models/Tag.ts
// Model for the Tag collection

import { model, models, Schema } from "mongoose";

const TagSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

TagSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export const Tag = models.Tag || model("Tag", TagSchema);
