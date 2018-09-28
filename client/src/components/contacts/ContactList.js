import React, { Component } from "react";
import axios from "axios";
import Nav from "../nav/Nav";
import Loader from "../loader/Loader";
import SingleContact from "./SingleContact";
import "./contacts.css";

// Search helper function
function search(searchTerm) {
  return function(contact) {
    const name = contact.name.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  };
}

class ContactList extends Component {
  state = {
    isLoading: true,
    showSearchBar: false,
    searchTerm: "",
    contacts: []
  };

  fetchContacts = () => {
    axios
      .get("/api/contacts")
      .then(res =>
        res.data.map(contact => ({
          name: `${contact.name}`,
          _id: `${contact._id}`
        }))
      )
      .then(contacts =>
        this.setState({ contacts, isLoading: false }, () =>
          console.log("Contacts fetched")
        )
      )
      .catch(err => console.log(err));
  };

  toggleSearchBar = () => {
    this.setState(prevState => ({
      showSearchBar: !prevState.showSearchBar
    }));
  };

  searchContactList = e => {
    this.setState({ searchTerm: e.target.value });
  };

  componentDidMount() {
    this.fetchContacts();
  }

  render() {
    const { showSearchBar, contacts, isLoading, searchTerm } = this.state;
    const { toggleSearchBar, searchContactList } = this;
    // sort contacts array alphabetically
    const sorted = contacts.sort(
      (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    );
    // Get number of contacts
    const count = contacts.length;
    return (
      <div className={`content ${isLoading ? "isloading" : ""} `}>
        <Nav
          showSearchBar={showSearchBar}
          toggleSearchBar={toggleSearchBar}
          searchContactList={searchContactList}
          count={count}
        />
        <div className="contacts">
          {contacts.length > 0 &&
            sorted
              .filter(search(searchTerm))
              .map(contact => (
                <SingleContact key={contact._id} contact={contact} />
              ))}
        </div>
        <Loader />
      </div>
    );
  }
}

export default ContactList;
