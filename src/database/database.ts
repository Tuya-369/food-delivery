import { Db } from "mongodb";
import "dotenv/config";
import mongoose from "mongoose";
import chalk from "chalk";

export let db: Db;

export const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI!)
      .then(() => console.log(chalk.magenta("database connected")));
  } catch (error) {
    return error;
  }
};
