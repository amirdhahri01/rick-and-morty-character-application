import React, { useState } from "react";

const SearchBar = ({setQuery}) => {
    const [text , setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        setQuery(text);
    }
  return (
    <section className="search-bar">
      <form action="">
        <input
          className="form-control"
          type="text"
          placeholder="Search Characters"
          name="search"
          id="search"
          value={text}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default SearchBar;
