import mongoose from "mongoose";
//step1- create a schema
//2 - model based of the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // mongo db will automatically give the created and update data fields

const Note = mongoose.model("Note", noteSchema);

export default Note;
