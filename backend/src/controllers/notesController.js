import Note from "../models/Note.js";
export async function getAllNotes(_, res) {
  // display a note
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // it gives every single note (newest one first)- new to old
    res.status(200).json(notes);
  } catch (error) {
    //server failed
    console.error("Error in getallnotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  // create a note
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // gives the new node with the updated fields
    );
    if (!updateNote) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(updateNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  // delete a note
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
