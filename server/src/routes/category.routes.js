import express from "express";
import {
  createCategoryController,
  getAllCategory,
} from "../controller/category.controller.js";

const router = express.Router();

router.post("/create-category", createCategoryController);
router.get("/get-category", getAllCategory);

export default router;
