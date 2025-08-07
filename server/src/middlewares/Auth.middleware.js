import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import ApiError from "../../utils/ApiError.js";

//Protect route based on token
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(req.header.authorization, process.env.JWT_SECRET);
    req.User = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//Admin middleware

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.User._id).select("role");
    if (user.role !== "admin") {
      throw new ApiError(401, "unauthorized");
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
