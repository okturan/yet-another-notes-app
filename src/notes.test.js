import assert from "node:assert/strict";
import test from "node:test";
import { createNote, deleteNote, filterNotes, loadNotes, toggleNote } from "./notes.js";

test("legacy notes receive stable IDs and malformed storage recovers safely", () => {
  let sequence = 0;
  const migrated = loadNotes(
    JSON.stringify([{ text: "Legacy", isCompleted: true, color: "Salmon" }]),
    () => `note-${++sequence}`,
  );

  assert.deepEqual(migrated, [{ id: "note-1", text: "Legacy", isCompleted: true, color: "Salmon" }]);
  assert.deepEqual(loadNotes("{not json"), []);
  assert.deepEqual(loadNotes(JSON.stringify({ text: "not an array" })), []);
});

test("duplicate stored IDs are repaired so actions stay independently addressable", () => {
  const repaired = loadNotes(
    JSON.stringify([
      { id: "shared", text: "First duplicate", color: "Salmon" },
      { id: "shared", text: "Second duplicate", color: "CornflowerBlue" },
    ]),
    () => "replacement",
  );

  assert.deepEqual(repaired.map(({ id }) => id), ["shared", "replacement"]);
  assert.deepEqual(toggleNote(repaired, "replacement").map(({ isCompleted }) => isCompleted), [false, true]);
});

test("duplicate note text does not confuse filtered toggle or delete actions", () => {
  const notes = [
    { id: "first", text: "Same note", isCompleted: false, color: "Salmon" },
    { id: "second", text: "Same note", isCompleted: false, color: "GoldenRod" },
  ];
  const selected = filterNotes(notes, "same")[1];
  const toggled = toggleNote(notes, selected.id);

  assert.equal(toggled[0].isCompleted, false);
  assert.equal(toggled[1].isCompleted, true);
  assert.deepEqual(deleteNote(toggled, selected.id).map(({ id }) => id), ["first"]);
});

test("new notes trim input and reject blank content", () => {
  assert.deepEqual(createNote("  Ship it  ", "CornflowerBlue", () => "new"), {
    id: "new",
    text: "Ship it",
    isCompleted: false,
    color: "CornflowerBlue",
  });
  assert.equal(createNote("   "), null);
});
