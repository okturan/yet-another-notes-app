import NoteItem from "./NoteItem";

function NoteList({ notes, hasSearchQuery, handleDeleteNote, handleToggleComplete }) {
  return (
    <ul className="mt-6 grid list-none gap-3 p-0" aria-live="polite">
      {notes.map((note, index) => (
        <NoteItem
          key={note.id}
          note={note}
          position={index + 1}
          handleDeleteNote={handleDeleteNote}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
      {notes.length === 0 && (
        <li className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <p className="text-lg font-bold text-slate-700">{hasSearchQuery ? "No matching notes" : "Your next idea starts here"}</p>
          <p className="mt-2 text-sm text-slate-500">
            {hasSearchQuery ? "Try a broader search or clear the filter." : "Write a note and choose a color to build your collection."}
          </p>
        </li>
      )}
    </ul>
  );
}

export default NoteList;
