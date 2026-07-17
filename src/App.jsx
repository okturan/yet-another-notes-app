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
  const completedCount = notes.filter((note) => note.isCompleted).length;

  return (
    <main className="min-h-screen px-4 py-8 text-slate-900 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-2xl shadow-slate-300/40 backdrop-blur">
        <header className="grid gap-8 border-b border-slate-200/80 bg-slate-950 px-6 py-8 text-white sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-amber-300">Local-first workspace</p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">Notes, without the noise.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Capture an idea, color-code it, and find it again. Everything stays in this browser.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-2" aria-label="Note statistics">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <dt className="text-xs text-slate-400">All</dt>
              <dd className="mt-1 text-2xl font-bold">{notes.length}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <dt className="text-xs text-slate-400">Done</dt>
              <dd className="mt-1 text-2xl font-bold">{completedCount}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <dt className="text-xs text-slate-400">Visible</dt>
              <dd className="mt-1 text-2xl font-bold">{filteredNotes.length}</dd>
            </div>
          </dl>
        </header>

        <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[0.9fr_1.4fr] lg:py-10">
          <section aria-labelledby="capture-heading">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Capture</p>
              <h2 id="capture-heading" className="mt-2 text-2xl font-bold tracking-tight">What is worth remembering?</h2>
              <NoteInput handleAddNote={handleAddNote} />
              <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500" role="status">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Saved locally in this browser
              </p>
            </div>
          </section>

          <section aria-labelledby="collection-heading">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Collection</p>
                <h2 id="collection-heading" className="mt-2 text-2xl font-bold tracking-tight">Your notes</h2>
              </div>
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                visibleCount={filteredNotes.length}
                totalCount={notes.length}
              />
            </div>
            <NoteList
              notes={filteredNotes}
              hasSearchQuery={Boolean(searchQuery.trim())}
              handleDeleteNote={(id) => setNotes((currentNotes) => deleteNote(currentNotes, id))}
              handleToggleComplete={(id) => setNotes((currentNotes) => toggleNote(currentNotes, id))}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
