import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./addcontact.css";

class AddContact extends Component {
  handleSubmit = e => {
    let details = {
      name: this.refs.name.value,
      mobile: this.refs.mobile.value,
      email: this.refs.email.value
    };
    this.addContact(details);
    e.preventDefault();
  };

  addContact = details => {
    axios
      .request({
        method: "post",
        url: "/api/contacts",
        data: details
      })
      .then(res => {
        this.props.history.push(`/contact/${res.data._id}`);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="new">
        <Link to="/">
          <ion-icon name="arrow-round-back" />
        </Link>
        <div className="contact-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              ref="name"
              placeholder="Contact name..."
              autoComplete="off"
              id="name"
            />
            <input
              type="tel"
              ref="mobile"
              placeholder="Mobile number..."
              id="mobile"
            />
            <input
              type="email"
              ref="email"
              placeholder="Contact email..."
              id="email"
            />
            <input type="submit" value="Add contact" id="add" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
