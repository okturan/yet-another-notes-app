import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import { createNote, deleteNote, filterNotes, loadNotes, toggleNote } from "./notes";

function App() {
  const [notes, setNotes] = useState(() => loadNotes(localStorage.getItem("notes")));
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (noteText, noteColor) => {
    const note = createNote(noteText, noteColor);
    if (note) setNotes((currentNotes) => [...currentNotes, note]);
  };

  const filteredNotes = filterNotes(notes, searchQuery);

  return (
    <div className="max-w-xl mt-8 mx-auto p-6 border border-gray-300 rounded-lg text-center">
      <h1 className="text-2xl text-slate-600 font-bold mb-6">Yet Another Notes App</h1>
      <NoteInput handleAddNote={handleAddNote} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteList
        notes={filteredNotes}
        handleDeleteNote={(id) => setNotes((currentNotes) => deleteNote(currentNotes, id))}
        handleToggleComplete={(id) => setNotes((currentNotes) => toggleNote(currentNotes, id))}
      />
    </div>
  );
}

export default App;
