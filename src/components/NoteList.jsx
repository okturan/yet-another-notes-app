import NoteItem from "./NoteItem";

function NoteList({ notes, handleDeleteNote, handleToggleComplete }) {
  return (
    <ul className="list-none p-0 mt-8">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          handleDeleteNote={handleDeleteNote}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
      {notes.length === 0 && <li className="text-slate-500">No notes match your search.</li>}
    </ul>
  );
}

export default NoteList;
