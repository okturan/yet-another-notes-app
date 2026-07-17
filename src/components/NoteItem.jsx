function NoteItem({ note, handleDeleteNote, handleToggleComplete }) {
  return (
    <li
      className={`relative flex justify-between items-center my-2 p-3 border-b border-gray-200 ${
        note.isCompleted ? "line-through text-gray-500" : ""
      }`}
      style={{ backgroundColor: note.color }}>
      <button
        type="button"
        aria-pressed={note.isCompleted}
        aria-label={`${note.isCompleted ? "Mark incomplete" : "Mark complete"}: ${note.text}`}
        onClick={() => handleToggleComplete(note.id)}
        className="cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-700">
        {note.text}
      </button>
      <button
        type="button"
        aria-label={`Delete note: ${note.text}`}
        onClick={() => handleDeleteNote(note.id)}
        className="absolute -top-2 right-0 p-1 text-white text-xl mix-blend-exclusion hover:font-bold hover:text-2xl focus:outline-none">
        &times;
      </button>
    </li>
  );
}

export default NoteItem;
