import { Router } from "express";
import { getCourses, searchCourses } from "../controllers/course.controller";

const router = Router();

router.get("/courses", getCourses);
router.get("/search", searchCourses);

export default router;
