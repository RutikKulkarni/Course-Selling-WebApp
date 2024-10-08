import { Request, Response } from "express";
import { UserModel } from "../models/user.model";

export const updateUserProfile = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const userId = req.userId;

  try {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );
    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile" });
  }
};

export const getPurchaseHistory = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId).populate("purchases");
    res.json({ purchases: user?.purchases });
  } catch (error) {
    res.status(500).json({ error: "Error fetching purchase history" });
  }
};
