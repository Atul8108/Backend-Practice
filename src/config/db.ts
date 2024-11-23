import { config } from "./config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
      console.log("====================================");
      console.log("Failed to connect to MongoDB", err);
      console.log("====================================");
    });

    await mongoose.connect(config.MONGODB_url as string);
  } catch (error) {
    console.log("====================================");
    console.log("Faild to connect to Mongo", error);
    console.log("====================================");
    process.exit(1);
  }
};

export default connectDB;
