import { Router } from "express";
import { createCourse } from "../controllers/admin.controller";
import { adminMiddleware } from "../middleware/admin.middleware";

const router = Router();

router.post("/create-course", adminMiddleware, createCourse);

export default router;
