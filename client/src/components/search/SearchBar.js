import React from "react";
import "./search.css";

const Search = props => {
  const { showSearchBar, count, searchContactList } = props;
  return (
    <div className={`search-contacts ${showSearchBar ? "display" : ""}`}>
      <input
        onChange={searchContactList}
        type="text"
        placeholder={`${count} contacts`}
      />
    </div>
  );
};

export default Search;
