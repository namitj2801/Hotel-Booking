// import { uploadImagesToCloudinary } from "../utils/cloudinary.js";
import cloudinary from "../config/Cloudinary.config.js";

export const createPostController = async (req, res) => {
  try {
    const {
      title,
      hotelLocation,
      description,
      category,
      images,
      isAvailable,
      guests,
      price,
      nearArea,
      facilities,
    } = req.body;
    const files = req.files?.images;
    if (
      !title ||
      !hotelLocation ||
      !description ||
      !category ||
      !images ||
      !guests ||
      !price ||
      !nearArea ||
      !facilities ||
      !isAvailable
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!fies || files.length < 3) {
      return res
        .status(400)
        .json({ message: "At least 3 images are required" });
    }

    // Upload images to cloud storage (e.g., Cloudinary)
    // const uploadedImages = await uploadImagesToCloudinary(files);
    const uploadedImages = await Promise.all(
      files.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "posts",
        });
        return result.secure_url;
      })
    );

    // Create a new post with the provided data
    const post = new Post({
      title,
      hotelLocation,
      description,
      category,
      images: uploadedImages,
      isAvailable,
      guest: guests,
      price,
      nearArea,
      facilities,
      slug: title.toLowerCase().replace(/ /g, "-"),
    });
    await post.save();

    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
