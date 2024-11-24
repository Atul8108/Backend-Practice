import { config } from "./config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
   await mongoose.connect(config.MONGODB_URI as string)
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("====================================");
    console.log("Faild to connect to Mongo", error);
    console.log("====================================");
    process.exit(1);
  }
};

export default connectDB;
