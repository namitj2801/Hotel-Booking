/**
 * This file defines the routes for user authentication, such as registration and login.
 */

import express from "express";
import {
  registerController,
  loginController,
} from "../controller/user.controller.js";
import { requireSignIn, isAdmin } from "../middlewares/Auth.middleware.js";

// Create a new router instance from Express
const app = express.Router();

// Route for user registration.
app.post("/register", registerController);

// Route for user login.
app.post("/login", loginController);

//Protected routes for user
app.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
app.get("/is-admin", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default app;
