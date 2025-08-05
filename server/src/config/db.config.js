/**
 * This file handles the connection to the MongoDB database using Mongoose.
 */

import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

/**
 * Asynchronously connects to the MongoDB database.
 * It uses the MONGODB_URI from the environment variables.
 * Logs a success message on a successful connection or an error message on failure.
 * Exits the process if the connection fails.
 */
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  try {
    // Attempt to connect to the database
    const connectionInstance = await mongoose.connect(`${uri}`);
    console.log(
      `MongoDB has been connected  DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    // Log the error and exit the process if the connection fails
    console.log("Error to connect to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
