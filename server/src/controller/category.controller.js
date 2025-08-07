import { ApiError } from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";
import slug from "slugify";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new ApiError(400, "Name is required");
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }
    const newCategory = await Category({
      name,
      slug: slug(name),
    }).save();
    return res
      .status(200)
      .json(new ApiResponse(200, newCategory, "Category created successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while creating category");
  }
};
