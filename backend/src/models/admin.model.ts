import mongoose, { Schema, Document } from "mongoose";

interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
}

const adminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const AdminModel = mongoose.model<IAdmin>("Admin", adminSchema);
