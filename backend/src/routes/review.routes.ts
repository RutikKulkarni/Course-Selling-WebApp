import { Router } from "express";
import {
  createReview,
  getCourseReviews,
} from "../controllers/review.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.post("/course/:courseId/review", userMiddleware, createReview);
router.get("/course/:courseId/reviews", getCourseReviews);

export default router;
