import express from "express";
import { createCategoryController } from "../controller/category.controller.js";

const router = express.Router();

router.post("/create-category", createCategoryController);

export default router;
