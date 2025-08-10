import express from "express";
import { contributePostController } from "../controller/contribute.controller";

const app = express();

app.post("/contribute-post", contributePostController);

export default app;
