import express from "express";
import notesRoutes from "./routes/notesRoutes.js"; // Importing the notes routes
// const express = require("express"); // using CommonJS syntax
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT || 5001;
connectDB();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("we just got the new req");
  next();
});

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
