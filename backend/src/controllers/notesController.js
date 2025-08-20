import Note from "../models/Note.js";
export async function getAllNotes(req, res) {
  // display a note
  try {
    const notes = await Note.find(); // it gives every single note
    res.status(200).json(notes);
  } catch (error) {
    //server failed
    console.error("Error in getallnotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  // create a note
 try{
  const{title,content}=req.body
  const newNote = new Note({title,content})
  await newNote.save()
  res.status(201).json({ message: "Note created" });
 }catch(error){
  console.error("Error in createNote controller", error);
  res.status(500).json({ message: "Internal server error" });  
 }
}

export async function updateNote(req, res) {
  // update a note
  res.status(200).json({ message: "Note updated" });
}

export async function deleteNote(req, res) {
  // delete a note
  res.status(200).json({ message: "Note deleted" });
}
