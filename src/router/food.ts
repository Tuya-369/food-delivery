import express from "express";
import { createFood } from "../controller/food/post-food";

const foodRouter = express.Router();

foodRouter.put("/", createFood);

export default foodRouter;
