import { Db, MongoClient } from "mongodb";
import "dotenv/config";
import mongoose from "mongoose";

export let db: Db;

export const connectDb = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI!)
      .then(() => console.log("database connected"));
  } catch (error) {
    return error;
  }
};
