import express from "express";
import { createUser } from "../controller/user/post-user";
import { getUser } from "../controller/user/get-user";
import { getUserById } from "../controller/user/get-user-by-id";
import { deleteUserById } from "../controller/user/delete-user";
import { updateUser } from "../controller/user/update-user";

const userRouter = express.Router();

userRouter.post("/", createUser);

userRouter.get("/", getUser);

userRouter.get("/:userId", getUserById);

userRouter.delete("/:userId", deleteUserById);

userRouter.put("/:userId", updateUser);

export default userRouter;
