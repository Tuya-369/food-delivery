import express, { Request, Response } from "express";
import { connectDb, db } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";

const port = 3000;
const app = express();
app.use(express.json());

app.use("/foodCategory", foodCategoryRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello from food deliver");
});

app.listen(port, async () => {
  await connectDb();
  console.log("database connected");
  console.log(`Example app listening on port http://localhost:${port}`);
});
