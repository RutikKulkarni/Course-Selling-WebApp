import mongoose, { Schema, Document } from "mongoose";

interface IWishlist extends Document {
  userId: Schema.Types.ObjectId;
  courses: Schema.Types.ObjectId[];
}

const wishlistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export const WishlistModel = mongoose.model<IWishlist>(
  "Wishlist",
  wishlistSchema
);
