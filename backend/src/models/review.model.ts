import mongoose, { Schema, Document } from "mongoose";

interface IReview extends Document {
  userId: Schema.Types.ObjectId;
  courseId: Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

export const ReviewModel = mongoose.model<IReview>("Review", reviewSchema);
