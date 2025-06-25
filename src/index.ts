import express, { Request, Response } from "express";
import { connectDb } from "./database/database";

const port = 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello from food deliver");
});

app.listen(port, async () => {
  await connectDb();
  console.log("database connected");
  console.log(`Example app listening on port http://localhost:${port}`);
});
