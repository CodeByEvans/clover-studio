import { Types } from "mongoose";
import { Product } from "../../lib/db/models/Product";
import { Review } from "../../lib/db/models/Review";
import {
  reviewInputSchema,
  reviewOutputSchema,
} from "../../lib/schemas/reviewSchema";
import { ReviewData } from "@/lib/types/Review.type";

export const getReviews = async () => {
  const reviews = await Review.find({ approved: true });
  return reviews;
};

export const createReview = async (data: ReviewData, ip: string) => {
  const validatedInput = reviewInputSchema.parse(data);
  const product = await Product.findById(validatedInput.productId);
  if (!product) {
    throw new Error("Product not found");
  }
  const reviewData = {
    ...validatedInput,
    productId: new Types.ObjectId(data.productId),
    ip,
  };
  const review = await Review.create(reviewData);
  const safeOutput = reviewOutputSchema.parse({
    ...review.toObject(),
    id: review._id.toString(),
    productId: review.productId.toString(),
  });
  return safeOutput;
};

export const approveReview = async (reviewId: string) => {
  const review = await Review.findById(reviewId);
  if (!review) {
    throw new Error("Review not found");
  }

  if (!review.approved) {
    review.approved = true;
    await review.save();
  }

  await Product.findByIdAndUpdate(review.productId, { $inc: { reviews: 1 } });

  return review;
};
