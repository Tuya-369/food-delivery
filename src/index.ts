import express, { Request, Response } from "express";
import { connectDb, db } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import chalk from "chalk";
import foodRouter from "./router/food";

const port = 3000;
const app = express();
app.use(express.json());

app.use("/foodCategory", foodCategoryRouter);

app.use("foodRouter", foodRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello from food deliver");
});

app.listen(port, async () => {
  await connectDb();
  console.log(
    chalk
      .rgb(255, 136, 0)
      .bold.underline(`Example app listening on port http://localhost:${port}`)
  );
});
