import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  purchases: Schema.Types.ObjectId[];
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchases: [{ type: Schema.Types.ObjectId, ref: "Purchase" }],
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
