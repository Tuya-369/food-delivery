import { Db, MongoClient } from "mongodb";
import "dotenv/config"

export let db: Db;

export const connectDb = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI!);
    await client.connect();
    db = client.db("food-delivery");
    return client;
  } catch (error) {
    return error;
  }
};
