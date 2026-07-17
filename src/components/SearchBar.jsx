function SearchBar({ searchQuery, setSearchQuery, visibleCount, totalCount }) {
  return (
    <div className="w-full sm:max-w-xs">
      <label htmlFor="note-search" className="sr-only">Search notes</label>
      <div className="relative">
        <input
          id="note-search"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-4 pr-20 text-sm outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 hover:text-slate-900">
            Clear
          </button>
        )}
      </div>
      <p className="mt-2 text-right text-xs text-slate-500" aria-live="polite">
        Showing {visibleCount} of {totalCount}
      </p>
    </div>
  );
}

export default SearchBar;
