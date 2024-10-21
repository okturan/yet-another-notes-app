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

  return (
    <div className="mb-4">
      <textarea
        rows={7}
        type="text"
        className="border p-2 w-full mb-2"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Write a new note..."
      />
      <div className="flex justify-between">
        <ColorPicker colorOptions={colorOptions} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNoteAddition}>
          Add
        </button>
      </div>
    </div>
  );
}

export default NoteInput;
