// MongoDB configuration

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
    });
    console.log("Connected to MongoDB 😎");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectMongoDB;