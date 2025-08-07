import mongoose from "mongoose";
// import { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hotelLocation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  images: {
    type: [String],
    required: true,
    validate: [arrayLimit, "You must provide at least 3 images"],
  },
  isAvailable: {
    type: Boolean,
    default: true,
    required: true,
  },
  guest: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 100,
    max: 10000,
  },
  nearArea: {
    type: [String],
    required: true,
  },
  facilities: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

function arrayLimit(val) {
  return val.length >= 3;
}
export const Post = mongoose.model("Post", postSchema);
