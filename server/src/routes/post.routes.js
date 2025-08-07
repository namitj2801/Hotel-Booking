import express from "express";
import { createPostController } from "../controller/Post.controller.js";

const postRoutes = express.Router();

postRoutes.post("/create-post", createPostController);

export default postRoutes;
