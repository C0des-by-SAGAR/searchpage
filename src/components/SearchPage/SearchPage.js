import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
// import "../styles/styles.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [data] = useState([
    { id: 1, title: "React Basics", category: "React" },
    { id: 2, title: "Node.js Guide", category: "Node.js" },
    { id: 3, title: "Express.js Tutorial", category: "Express" },
    { id: 4, title: "SQL Optimization Tips", category: "SQL" },
  ]);

  const handleSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredResults = data.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query);
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="search-page">
      <SearchBox query={query} onSearch={handleSearch} />
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <Results results={filteredResults} />
    </div>
  );
};

export default SearchPage;