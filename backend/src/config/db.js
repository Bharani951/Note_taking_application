import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    //connect our database successfully
    //secret environment variable
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};
