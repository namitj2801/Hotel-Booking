import express from "express";
import {
  createCategoryController,
  getAllCategory,
  updateCategoryController,
  deleteCategory,
  singleCategory,
} from "../controller/category.controller.js";

import { isAdmin, requireSignIn } from "../middlewares/Auth.middleware.js";

const router = express.Router();

router.get("/get-category", getAllCategory);
router.post(
  "/create-category",
  // requireSignIn,
  // isAdmin,
  createCategoryController
);
router.put(
  "/update-category/:id",
  // requireSignIn,
  // isAdmin,
  updateCategoryController
);
router.delete(
  "/delete-categrory/:id",
  // requireSignIn, isAdmin,
  deleteCategory
);
router.get("/single-category/:slug", singleCategory);

export default router;
