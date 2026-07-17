const DEFAULT_COLOR = "WhiteSmoke";

export function createNoteId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
}

export function createNote(text, color = DEFAULT_COLOR, idFactory = createNoteId) {
  const trimmedText = text.trim();
  if (!trimmedText) return null;
  return { id: idFactory(), text: trimmedText, isCompleted: false, color };
}

export function loadNotes(value, idFactory = createNoteId) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    const seenIds = new Set();
    return parsed
      .filter((note) => note && typeof note.text === "string" && note.text.trim())
      .map((note) => {
        let id = typeof note.id === "string" && note.id && !seenIds.has(note.id) ? note.id : idFactory();
        let fallbackSequence = 1;
        while (seenIds.has(id)) {
          id = `migrated-${seenIds.size + fallbackSequence}`;
          fallbackSequence += 1;
        }
        seenIds.add(id);
        return {
          id,
          text: note.text.trim(),
          isCompleted: Boolean(note.isCompleted),
          color: typeof note.color === "string" && note.color ? note.color : DEFAULT_COLOR,
        };
      });
  } catch {
    return [];
  }
}

export function filterNotes(notes, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return notes.filter((note) => note.text.toLocaleLowerCase().includes(normalizedQuery));
}

export function toggleNote(notes, id) {
  return notes.map((note) => (note.id === id ? { ...note, isCompleted: !note.isCompleted } : note));
}

export function deleteNote(notes, id) {
  return notes.filter((note) => note.id !== id);
}
