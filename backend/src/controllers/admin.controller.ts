import { Request, Response } from "express";
import { CourseModel } from "../models/course.model";

export const createCourse = async (req: Request, res: Response) => {
  const { title, description, price, category } = req.body;

  try {
    const course = await CourseModel.create({
      title,
      description,
      price,
      category,
    });
    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ error: "Failed to create course" });
  }
};
