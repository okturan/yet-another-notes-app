import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (noteText, noteColor) => {
    if (noteText.trim() !== "") {
      setNotes([...notes, { text: noteText, isCompleted: false, color: noteColor }]);
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleToggleComplete = (index) => {
    const updatedNotes = notes.map((note, i) => (i === index ? { ...note, isCompleted: !note.isCompleted } : note));
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-xl mt-8 mx-auto p-6 border border-gray-300 rounded-lg text-center">
      <h1 className="text-2xl text-slate-600 font-bold mb-6">Yet Another Notes App</h1>
      <NoteInput handleAddNote={handleAddNote} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteList
        notes={filteredNotes}
        handleDeleteNote={(index) =>
          handleDeleteNote(notes.findIndex((note) => note.text === filteredNotes[index].text))
        }
        handleToggleComplete={(index) => {
          const noteIndex = notes.findIndex((note) => note.text === filteredNotes[index].text);
          if (noteIndex !== -1) {
            handleToggleComplete(noteIndex);
          }
        }}
      />
    </div>
  );
}

export default App;
