import mongoose, { Schema, Document } from "mongoose";

interface IPurchase extends Document {
  userId: Schema.Types.ObjectId;
  courseId: Schema.Types.ObjectId;
  purchasedAt: Date;
}

const purchaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  purchasedAt: { type: Date, default: Date.now },
});

export const PurchaseModel = mongoose.model<IPurchase>(
  "Purchase",
  purchaseSchema
);
