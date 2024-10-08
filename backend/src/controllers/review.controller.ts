import { Request, Response } from "express";
import { ReviewModel } from "../models/review.model";

export const createReview = async (req: Request, res: Response) => {
  const { courseId, rating, comment } = req.body;
  const userId = req.userId;

  try {
    const newReview = await ReviewModel.create({
      userId,
      courseId,
      rating,
      comment,
    });
    res.json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    res.status(500).json({ error: "Error adding review" });
  }
};

export const getCourseReviews = async (req: Request, res: Response) => {
  const { courseId } = req.params;

  try {
    const reviews = await ReviewModel.find({ courseId });
    res.json({ reviews });
  } catch (error) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};
