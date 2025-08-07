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
      //   category,
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
      //   !category ||
      !images ||
      !guest ||
      !price ||
      !nearArea ||
      !facilities ||
      !isAvailable
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
      //   category,
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
