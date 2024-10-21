function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    );
  }
  
  export default SearchBar;
  