export  function getAllNotes(req, res) {
  // display a note
  res.status(200).send("you got 10 notes");
};

export  function createNote(req, res) {
  // create a note
  res.status(201).send("Note created");
};

export  function updateNote(req, res) {
    // update a note
  res.status(200).json({ message: "Note updated" });
};

export  function deleteNote(req, res) {
    // delete a note
  res.status(200).json({ message: "Note deleted" });
};
