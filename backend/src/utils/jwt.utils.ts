import jwt from "jsonwebtoken";
import { config } from "../config/config";

export const generateUserToken = (id: string) => {
  return jwt.sign({ id, role: "user" }, config.USER_JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const generateAdminToken = (id: string) => {
  return jwt.sign({ id, role: "admin" }, config.ADMIN_JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const verifyUserToken = (token: string) => {
  return jwt.verify(token, config.USER_JWT_SECRET);
};

export const verifyAdminToken = (token: string) => {
  return jwt.verify(token, config.ADMIN_JWT_SECRET);
};
