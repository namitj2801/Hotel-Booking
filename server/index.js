// Import necessary packages
import express from "express";
import cors from "cors";
// import mongoose from "mongoose"
import dotenv from "dotenv";
import morgan from "morgan";

// Import local modules
import connectDB from "./src/config/db.config.js";
import fileUpload from "express-fileupload";

import authRoutes from "./src/routes/user.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import categoryRoutes from "./src/routes/category.routes.js";

// Load environment variables from .env file
dotenv.config();

// Establish connection to the database
connectDB();

// Initialize the Express application
const app = express();

// --- Middleware ---
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Welcome");
});

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
