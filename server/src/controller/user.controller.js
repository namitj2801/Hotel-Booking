/**
 * This file contains the controller functions for user authentication.
 */

import userModel from "../models/user.model.js";
import { asyncHandler } from "../../utils/AsyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import JWT from "jsonwebtoken";

const registerController = asyncHandler(async (req, res) => {
  // Destructure name, email, and password from the request body
  const { name, email, password } = req.body;

  // Validate all required fields
  if ([name, email, password].some((field) => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  // Create a new user
  const user = await userModel.create({
    name,
    email,
    password,
  });

  // Find the created user again to select fields and ensure it was created
  const createdUser = await userModel.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const loginController = asyncHandler(async (req, res) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;

  // Validate all required fields
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }
  // Check if email exists
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  // Check if password is correct
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // Generate a new token
  // Look here from chai and code
  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  // Find the logged-in user and exclude the password from the result
  // const loggedInUser = await userModel.findById(user._id).select("-password");

  // return res
  //   .status(200)
  //   .json(new ApiResponse(200, loggedInUser, "User logged in successfully"));

  res.status(200).send({
    success: true,
    message: "Logged in successfully",
    token,
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
      id: user._id,
    },
  });
});

export { registerController, loginController };
