/**
 * This file defines the routes for user authentication, such as registration and login.
 */

import express from "express";
import {
  registerController,
  loginController,
} from "../controller/user.controller.js";

// Create a new router instance from Express
const app = express.Router();

// Route for user registration.
app.post("/register", registerController);

// Route for user login.
app.post("/login", loginController);

export default app;
