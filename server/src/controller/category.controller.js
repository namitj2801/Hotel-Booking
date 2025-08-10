import slugify from "slugify";
import { ApiError } from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";
import slug from "slugify";
import { Post } from "../models/post.model.js";

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

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    return res
      .status(200)
      .json(
        new ApiResponse(200, categories, "Categories retrieved successfully")
      );
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while fetching categories");
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.body;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    return res.status(200).send({
      message: "Category updated successfully",
      category,
      success: true,
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Update category failed");
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    return res.status(200).send({
      message: "Category deleted successfully",
      category,
      success: true,
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while deleting category");
  }
};

export const singleCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    const post = await Post.find({ category }).populate("category");
    return res.status(200).send({
      success: true,
      message: "Single category fetched",
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(404, "Category not found");
  }
};
