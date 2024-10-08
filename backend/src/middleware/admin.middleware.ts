import { Request, Response, NextFunction } from "express";
import { verifyAdminToken } from "../utils/jwt.utils";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(403).json({ error: "No token provided" });

  try {
    const decoded = verifyAdminToken(token);
    if (decoded.role !== "admin")
      return res.status(403).json({ error: "Not authorized" });
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
