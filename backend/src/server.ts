import mongoose from "mongoose";
import { config } from "./config/config";
import app from "./app";

if (!config.DB_URI) {
  throw new Error("DB_URI is not defined in the environment variables");
}

mongoose
  .connect(config.DB_URI)
  .then(() => {
    console.log("DB connected");

    app.listen(config.PORT, () =>
      console.log(`Server running on port ${config.PORT}`)
    );
  })
  .catch((err) => console.error("DB connection error:", err));
