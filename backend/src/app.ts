import express from "express";
import adminRoutes from "./routes/admin.routes";
import courseRoutes from "./routes/course.routes";
import userRoutes from "./routes/user.routes";
import reviewRoutes from "./routes/review.routes";
import wishlistRoutes from "./routes/wishlist.routes";

const app = express();

app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/courses", courseRoutes);
app.use("/user", userRoutes);
app.use("/reviews", reviewRoutes);
app.use("/wishlist", wishlistRoutes);

export default app;
