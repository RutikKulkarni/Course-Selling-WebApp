import { Router } from "express";
import {
  updateUserProfile,
  getPurchaseHistory,
} from "../controllers/user.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.put("/profile", userMiddleware, updateUserProfile);
router.get("/purchase-history", userMiddleware, getPurchaseHistory);

export default router;
