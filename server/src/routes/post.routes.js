import express from "express";
import {
  createPostController,
  getPostController,
  getAllPostsController,
  updatePostController,
  deletePostController,
} from "../controller/Post.controller.js";

const postRoutes = express.Router();

postRoutes.post("/create-post", createPostController);
postRoutes.get("/get-post/:slug", getPostController);
postRoutes.get("/get-all-posts", getAllPostsController);
postRoutes.put("/update-post/:id", updatePostController);
postRoutes.delete("/delete-post/:id", deletePostController);

export default postRoutes;
