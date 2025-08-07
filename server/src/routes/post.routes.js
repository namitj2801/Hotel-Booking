import express from "express";
import {
  createPostController,
  getPostController,
} from "../controller/Post.controller.js";

const postRoutes = express.Router();

postRoutes.post("/create-post", createPostController);
postRoutes.post("/get-post/:slug", getPostController);

export default postRoutes;
