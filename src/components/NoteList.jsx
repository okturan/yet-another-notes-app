import NoteItem from "./NoteItem";

function NoteList({ notes, handleDeleteNote, handleToggleComplete }) {
  return (
    <ul className="list-none p-0 mt-8">
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          index={index}
          handleDeleteNote={handleDeleteNote}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </ul>
  );
}

export default NoteList;
