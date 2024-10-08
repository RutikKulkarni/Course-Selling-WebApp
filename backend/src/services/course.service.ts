import { CourseModel } from "../models/course.model";

export const getPopularCourses = async () => {
  return await CourseModel.find().sort({ rating: -1 }).limit(5);
};
