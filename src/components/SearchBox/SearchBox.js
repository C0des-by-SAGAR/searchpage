import React from "react";

const SearchBox = ({ query, onSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search blogs..."
        value={query}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;