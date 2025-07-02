import cors from "cors";

import express, { Request, Response } from "express";
import { connectDb, db } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import chalk from "chalk";
import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";
import foodOrderRouter from "./router/foodOrder.router";

const port = 3001;
const app = express();
app.use(express.json());
app.use(cors())
app.use("/food-category", foodCategoryRouter);

app.use("/food", foodRouter);

app.use("/user", userRouter);

app.use("/food-order", foodOrderRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(
    chalk
      .rgb(255, 136, 0)
      .bold.underline(`Example app listening on port http://localhost:${port}`)
  );
});
