import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";
import { getFoodCategory } from "../controller/foodCategory/get-food-category";
import { getDeletedCategory } from "../controller/foodCategory/delete-category";
import { updateCategory } from "../controller/foodCategory/update-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);

foodCategoryRouter.get("/", getFoodCategory);

foodCategoryRouter.delete("/:id", getDeletedCategory);

foodCategoryRouter.put("/:id", updateCategory);

export default foodCategoryRouter;
