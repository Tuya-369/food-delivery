import express from "express";
import { createOrder } from "../controller/foodOrder/post-order";
import { getOrder } from "../controller/foodOrder/get-order";
import { getOrderById } from "../controller/foodOrder/get-order-by-id";
import { deleteOrder } from "../controller/foodOrder/delete-order";
import { updateOrder } from "../controller/foodOrder/update-order";

const foodOrderRouter = express.Router();

foodOrderRouter.post("/createOrder", createOrder);

foodOrderRouter.get("/", getOrder);

foodOrderRouter.get("/:orderId", getOrderById);

foodOrderRouter.delete("/:orderId", deleteOrder);

foodOrderRouter.put("/:orderId", updateOrder);

export default foodOrderRouter;
