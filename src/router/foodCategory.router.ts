import express from "express";
import { createFoodCategory } from "../controller/foodCategory/post-category";
import { getFoodCategory } from "../controller/foodCategory/get-category";
import { getDeletedCategory } from "../controller/foodCategory/delete-category";
import { updateCategory } from "../controller/foodCategory/update-category";
import { getFoodCategoryById } from "../controller/foodCategory/get-category-by-id";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.get("/:id", getFoodCategoryById);

foodCategoryRouter.delete("/:foodCategoryId", getDeletedCategory);

foodCategoryRouter.put("/:foodCategoryId", updateCategory);

export default foodCategoryRouter;
