function ColorPicker({ colorOptions, selectedColor, setSelectedColor }) {
  return (
    <fieldset>
      <legend className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Note color</legend>
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            key={color}
            type="button"
            aria-label={`Select ${color} note color`}
            aria-pressed={selectedColor === color}
            onClick={() => setSelectedColor(color)}
            className="h-8 w-8 rounded-full border-2 border-white shadow-sm outline outline-1 outline-slate-300 transition hover:scale-110 focus-visible:ring-4 focus-visible:ring-slate-300 aria-pressed:outline-2 aria-pressed:outline-slate-900"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default ColorPicker;
