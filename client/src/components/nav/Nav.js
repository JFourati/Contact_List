import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import SearchBar from "../search/SearchBar";

const Header = props => {
  const { showSearchBar, toggleSearchBar, count, searchContactList } = props;
  return (
    <div className="nav-wrapper">
      <header>
        <h3>Contacts</h3>
        <div className="icons">
          <div className="add">
            <Link to="/addcontact">
              <ion-icon name="add" />
            </Link>
          </div>
          <div onClick={toggleSearchBar} className="search">
            <ion-icon name="search" />
          </div>
        </div>
      </header>
      <SearchBar
        showSearchBar={showSearchBar}
        count={count}
        searchContactList={searchContactList}
      />
    </div>
  );
};

export default Header;
