import React from "react";
import "./SearchBar.css";

export function SearchBar({ value, setValue, setMovie, searchMovie }) {
  function handleMovie(e) {
    setMovie(e.target.textContent);
  }

  return (
    <div className="search-bar">
      <form>
        <img
          onClick={(e) => handleMovie(e)}
          src="/public/assets/icon-search.svg"
          alt="search"
        />
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            searchMovie();
          }}
          type="text"
          placeholder="Search for movies or TV series"
        />
      </form>
    </div>
  );
}
