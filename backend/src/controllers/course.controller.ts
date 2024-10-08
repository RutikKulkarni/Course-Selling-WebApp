import { Request, Response } from "express";
import { CourseModel } from "../models/course.model";

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await CourseModel.find({});
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: "Error fetching courses" });
  }
};

export const searchCourses = async (req: Request, res: Response) => {
  const { title, minPrice, maxPrice, rating, category } = req.query;
  let filter: any = {};

  if (title) filter.title = { $regex: title, $options: "i" };
  if (minPrice && maxPrice)
    filter.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
  if (rating) filter.rating = { $gte: Number(rating) };
  if (category) filter.category = category;

  try {
    const courses = await CourseModel.find(filter);
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: "Error fetching courses" });
  }
};
