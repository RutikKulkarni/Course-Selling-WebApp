import { UserModel } from "../models/user.model";
import { generateUserToken, generateAdminToken } from "../utils/jwt.utils";

export const authenticateUser = async (
  email: string,
  password: string,
  role: "user" | "admin"
) => {
  const user = await UserModel.findOne({ email, role });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid credentials");
  }

  const token =
    role === "admin"
      ? generateAdminToken(user._id)
      : generateUserToken(user._id);
  return { token };
};
