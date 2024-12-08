import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  const filters = ["All", "React", "Node.js", "Express", "SQL"];

  return (
    <div className="filter grow">
      {filters.map((category) => (
        <button
          key={category}
          className={filter === category ? "active" : ""}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;