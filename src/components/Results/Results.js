import React from "react";

const Results = ({ results }) => {
  return (
    <div className="results">
      {results.length > 0 ? (
        results.map((item) => (
          <div key={item.id} className="result-item grow">
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Results;