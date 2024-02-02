// FilterSection.js
import React from "react";

function FilterSection({ categories, handleFilterChange }) {
  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header">{"選擇地區或等級"}</header>
      <ul className="filters-category">
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                onChange={handleFilterChange}
                type="checkbox"
                value={category}
                className="checkbox-wrapper-57"
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FilterSection;
