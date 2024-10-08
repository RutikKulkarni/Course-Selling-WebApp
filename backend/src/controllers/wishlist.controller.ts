import { Request, Response } from "express";
import { WishlistModel } from "../models/wishlist.model";

export const addToWishlist = async (req: Request, res: Response) => {
  const { courseId } = req.body;
  const userId = req.userId;

  try {
    const wishlist = await WishlistModel.findOneAndUpdate(
      { userId },
      { $addToSet: { courses: courseId } },
      { new: true, upsert: true }
    );
    res.json({ message: "Course added to wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ error: "Error adding to wishlist" });
  }
};

export const getWishlist = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const wishlist = await WishlistModel.findOne({ userId }).populate(
      "courses"
    );
    res.json({ wishlist });
  } catch (error) {
    res.status(500).json({ error: "Error fetching wishlist" });
  }
};
