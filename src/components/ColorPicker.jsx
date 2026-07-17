function ColorPicker({ colorOptions, selectedColor, setSelectedColor }) {
  return (
    <div className="flex gap-2 items-center">
      {colorOptions.map((color) => (
        <button
          key={color}
          type="button"
          aria-label={`Select ${color} note color`}
          aria-pressed={selectedColor === color}
          onClick={() => setSelectedColor(color)}
          style={{
            backgroundColor: color,
            width: 24,
            height: 24,
            borderRadius: "50%",
            border: selectedColor === color ? "2px solid black" : "2px solid transparent",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
