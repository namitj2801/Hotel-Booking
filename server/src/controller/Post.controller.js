// import { uploadImagesToCloudinary } from "../utils/cloudinary.js";
// import cloudinary from "../config/Cloudinary.config.js";
import { ApiError } from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { Post } from "../models/post.model.js";
import slug from "slugify";

export const createPostController = async (req, res) => {
  try {
    const {
      title,
      hotelLocation,
      description,
      category,
      images,
      isAvailable,
      guest,
      price,
      nearArea,
      facilities,
    } = req.body;

    if (
      !title ||
      !hotelLocation ||
      !description ||
      !category ||
      !images ||
      !guest ||
      price == null ||
      !nearArea ||
      !facilities
      // !isAvailable
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // The client is sending an array of URLs directly.
    // If you were handling file uploads, you would need a middleware like 'multer'
    // to populate req.files, and the client would need to send 'multipart/form-data'.
    if (!Array.isArray(images) || images.length < 3) {
      return res
        .status(400)
        .json({ message: "At least 3 images are required" });
    }

    // Create a new post with the provided data
    const post = new Post({
      title,
      hotelLocation,
      description,
      category,
      images: images,
      isAvailable,
      guest: guest,
      price,
      // Ensure nearArea is an array, even if a string is passed
      nearArea: Array.isArray(nearArea)
        ? nearArea
        : nearArea.split(",").map((s) => s.trim()),
      facilities: Array.isArray(facilities)
        ? facilities
        : facilities.split(",").map((s) => s.trim()),
      slug: slug(title.toLowerCase().replace(/ /g, "-")),
    });
    await post.save();

    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getPostController = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug })
      .select("-images")
      .populate("category");
    return res
      .status(200)
      .json(new ApiResponse(200, post, "Post fetched succesfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, `Error while getting post: ${error.message}`);
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "All posts fetched succesfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while getting all the posts");
  }
};

export const updatePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      hotelLocation,
      description,
      facilities,
      nearArea,
      category,
      guest,
      isAvailable,
      price,
    } = req.body;
    const files = req.files?.images;
    const post = await Post.findById(id);
    if (!post) {
      throw new ApiError(404, "Post not found");
    }
    //validate the fields
    if (
      !hotelLocation &&
      !files &&
      !description &&
      !category &&
      !guest &&
      !price &&
      !nearArea &&
      !facilities &&
      !isAvailable === undefinedf
    ) {
      throw new ApiError(400, "Please provide fields to update");
    }

    //handle image update
    // Not writing right now
    // DO it later

    const updatePost = await Post.findByIdAndUpdate(id, {
      ...(title && { title }),
      ...(hotelLocation && { hotelLocation }),
      ...(description && { description }),
      ...(facilities && { facilities }),
      ...(nearArea && { nearArea }),
      ...(category && { category }),
      ...(guest && { guest }),
      ...(isAvailable !== undefined && { isAvailable }),
      ...(price && { price }),
      ...(title && { slug: slug(title, { lower: true }) }),
    });
    await updatePost.save();
    return res
      .status(200)
      .json(new ApiResponse(200, updatePost, "Post updated succesfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while updating post");
  }
};

export const deletePostController = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params._id);
    return res
      .status(200)
      .json(new ApiResponse(200, "Post deleted succesfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while deleting post");
  }
};
