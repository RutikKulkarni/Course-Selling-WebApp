import { Router } from "express";
import { addToWishlist, getWishlist } from "../controllers/wishlist.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.post("/wishlist", userMiddleware, addToWishlist);
router.get("/wishlist", userMiddleware, getWishlist);

export default router;
