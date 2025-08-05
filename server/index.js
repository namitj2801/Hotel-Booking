// Import necessary packages
import express from "express";
import cors from "cors";
// import mongoose from "mongoose"
import dotenv from "dotenv";
import morgan from "morgan";

// Import local modules
import connectDB from "./src/config/db.config.js";
import authRoutes from "./src/routes/user.routes.js";

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

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Welcome");
});

//Routes
app.use("/api/auth", authRoutes);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
