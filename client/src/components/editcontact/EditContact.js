import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./editcontact.css";

class EditContact extends Component {
  state = {
    id: "",
    name: "",
    mobile: "",
    email: ""
  };

  getContactDetails = id => {
    axios
      .get(`/api/contacts/${id}`)
      .then(res => res.data)
      .then(contact =>
        this.setState(
          {
            id: contact._id,
            name: contact.name,
            mobile: contact.mobile,
            email: contact.email
          },
          () => console.log("Contact details fetched")
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  editContact = details => {
    axios
      .request({
        method: "put",
        url: `/api/contacts/${this.state.id}`,
        data: details
      })
      .then(res => {
        this.props.history.push(`/contact/${res.data._id}`);
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    let details = {
      name: this.refs.name.value,
      mobile: this.refs.mobile.value,
      email: this.refs.email.value
    };
    e.preventDefault();
    this.editContact(details);
  };

  componentDidMount() {
    const id = this.props.match.params.contactId;
    this.getContactDetails(id);
  }

  render() {
    const { name, mobile, email } = this.state;
    return (
      <div className="new">
        <Link to="/">
          <ion-icon name="arrow-round-back" />
        </Link>
        <div className="contact-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              ref="name"
              placeholder="Contact name..."
              id="name"
              value={name}
              onChange={this.handleInputChange}
            />
            <input
              type="tel"
              name="mobile"
              ref="mobile"
              placeholder="Mobile number..."
              id="mobile"
              value={mobile}
              onChange={this.handleInputChange}
            />
            <input
              type="email"
              name="email"
              ref="email"
              placeholder="Contact email..."
              id="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="Save changes" id="add" />
          </form>
        </div>
      </div>
    );
  }
}

export default EditContact;
