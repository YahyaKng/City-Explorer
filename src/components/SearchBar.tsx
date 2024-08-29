import React, { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter city name..."
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
