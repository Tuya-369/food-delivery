import express from "express";
import { createUser } from "../controller/user/post-user";

const userRouter = express.Router();

userRouter.post("/", createUser);

export default userRouter;
