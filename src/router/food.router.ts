import express from "express";
import { createFood } from "../controller/food/post-food";
import { getFood } from "../controller/food/get-food";
import { getFoodById } from "../controller/food/get-food-by-id";
import { updateFood } from "../controller/food/update-food";
import { getDeletedFood } from "../controller/food/delete-food";

const foodRouter = express.Router();

foodRouter.post("/", createFood);

foodRouter.get("/:foodId", getFoodById);

foodRouter.put("/:foodId", updateFood);

foodRouter.delete("/:foodId", getDeletedFood);

foodRouter.get("/", getFood);

export default foodRouter;
