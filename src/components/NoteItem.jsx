function NoteItem({ note, position, handleDeleteNote, handleToggleComplete }) {
  return (
    <li
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/70">
      <span className="absolute inset-y-0 left-0 w-2" style={{ backgroundColor: note.color }} aria-hidden="true" />
      <div className="flex items-start gap-4 pl-2">
        <button
          type="button"
          aria-pressed={note.isCompleted}
          aria-label={`${note.isCompleted ? "Mark incomplete" : "Mark complete"} note ${position}: ${note.text}`}
          onClick={() => handleToggleComplete(note.id)}
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 ${
            note.isCompleted ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-transparent hover:border-slate-600"
          }`}>
          ✓
        </button>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span>Note {position}</span>
            {note.isCompleted && <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Completed</span>}
          </div>
          <p className={`whitespace-pre-wrap break-words text-base leading-7 ${note.isCompleted ? "text-slate-400 line-through" : "text-slate-800"}`}>
            {note.text}
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-label={`Delete note ${position}: ${note.text}`}
        onClick={() => handleDeleteNote(note.id)}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-slate-400 opacity-70 transition hover:bg-rose-50 hover:text-rose-600 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-500">
        &times;
      </button>
    </li>
  );
}

export default NoteItem;
