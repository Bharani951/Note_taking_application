import express from "express";
// const express = require("express"); // using CommonJS syntax
const app = express();
//method express
app.get("/api/notes", (req, res) => {
  res.send("you got 5 notes");
});
app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
