import { model, models, Schema } from "mongoose";

const ReviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    approved: {
      type: Boolean,
      default: false, // lo puedes revisar manualmente
    },
    ip: {
      type: String,
    },
  },
  { timestamps: true }
);

ReviewSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.ip; // ocultas IP en respuesta pública
  },
});

export const Review = models.Review || model("Review", ReviewSchema);
