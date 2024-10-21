function NoteItem({ note, index, handleDeleteNote, handleToggleComplete }) {
  return (
    <li
      className={`relative flex justify-between items-center my-2 p-3 border-b border-gray-200 ${
        note.isCompleted ? "line-through text-gray-500" : ""
      }`}
      style={{ backgroundColor: note.color }}>
      <span onClick={() => handleToggleComplete(index)} className="cursor-pointer">
        {note.text}
      </span>
      <button
        onClick={() => handleDeleteNote(index)}
        className="absolute -top-2 right-0 p-1 text-white text-xl mix-blend-exclusion hover:font-bold hover:text-2xl focus:outline-none">
        &times;
      </button>
    </li>
  );
}

export default NoteItem;
