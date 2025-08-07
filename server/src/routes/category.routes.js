import express from "express";
import { createCategoryController } from "../controller/category.controller.js";

const app = express();

app.post("/create-category", createCategoryController);

export default app;
