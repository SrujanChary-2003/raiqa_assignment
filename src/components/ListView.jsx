import React from "react";

function ListView({ numbers, ascending, toggleSort, resetList }) {
  const sortedNumbers = [...numbers].sort((a, b) =>
    ascending ? a - b : b - a
  );

  return (
    <div className="card">
      <div className="list-header">
        <h4>Numbers List</h4>
        <div>
          <button className="reset-btn" onClick={resetList}>
            Reset
          </button>
          <button className="sort-btn" onClick={toggleSort}>
            Sort {ascending ? "↓" : "↑"}
          </button>
        </div>
      </div>

      {numbers.length === 0 ? (
        <p>No numbers added yet</p>
      ) : (
        <ul>
          {sortedNumbers.map((num, index) => (
            <li key={index}>
              {num} <span>#{index + 1}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="total">Total numbers: {numbers.length}</div>
    </div>
  );
}

export default ListView;
