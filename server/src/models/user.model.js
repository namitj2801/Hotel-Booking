/**
 * This file defines the Mongoose schema and model for a User.
 */

import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Define the schema for the User model
const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

/**
 * Mongoose pre-save hook to hash the user's password before saving it to the database.
 * This middleware runs only if the password field has been modified.
 */
userModel.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/**
 * Method to compare a candidate password with the user's stored hashed password.
 * @param {string} password - The password to compare.
 * @returns {Promise<boolean>} - A promise that resolves to true if the passwords match, otherwise false.
 */
userModel.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Create and export the User model
export default mongoose.model("User", userModel);
