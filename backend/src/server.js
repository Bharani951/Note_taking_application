import express from "express";
import notesRoutes from "./routes/notesRoutes.js"; // Importing the notes routes
// const express = require("express"); // using CommonJS syntax
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

const port = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//middleware- before sending the response we need to send the request to the body
app.use(express.json()); // this middleware parses incoming JSON requests and puts the parsed data in req.body
// to send the message of what we are going to do with the API in the postman
// custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method}& Req URL is ${req.url}`);
//   next();
// });

app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

// first connect to the DB first and then start connecting to the port
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port:", port);
  });
});
