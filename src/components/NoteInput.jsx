import { useState } from "react";
import ColorPicker from "./ColorPicker";

function NoteInput({ handleAddNote }) {
  const [newNote, setNewNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("WhiteSmoke");

  const colorOptions = ["WhiteSmoke", "Salmon", "MediumSeaGreen", "CornflowerBlue", "GoldenRod"];

  const handleNoteAddition = () => {
    handleAddNote(newNote, selectedColor);
    setNewNote("");
  };

  const handleKeyDown = (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault();
      handleNoteAddition();
    }
  };

  return (
    <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-inner shadow-slate-100 sm:p-5">
      <label htmlFor="new-note" className="sr-only">New note text</label>
      <textarea
        id="new-note"
        rows={7}
        className="min-h-44 w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 text-base leading-7 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-200"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Write a new note..."
      />
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ColorPicker colorOptions={colorOptions} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <button
          type="button"
          disabled={!newNote.trim()}
          className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
          onClick={handleNoteAddition}>
          Add note
        </button>
      </div>
      <p className="mt-4 text-xs text-slate-500">Tip: press Ctrl/⌘ + Enter to save.</p>
    </div>
  );
}

export default NoteInput;
