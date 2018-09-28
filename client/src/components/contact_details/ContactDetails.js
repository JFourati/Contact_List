import React, { Component } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import Header from "./header/Header";
import Mobile from "./mobile/Mobile";
import Email from "./email/Email";
import "./details.css";

class ContactDetails extends Component {
  state = {
    isLoading: true,
    contact: {}
  };

  getContact = id => {
    axios
      .get(`/api/contacts/${id}`)
      .then(res => res.data)
      .then(contact =>
        this.setState({ isLoading: false, contact }, () =>
          console.log("Contact details fetched")
        )
      )
      .catch(err => console.log(err));
  };

  deleteContact = () => {
    axios
      .delete(`/api/contacts/${this.props.match.params.contactId}`)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const id = this.props.match.params.contactId;
    this.getContact(id);
  }

  render() {
    const { isLoading, contact } = this.state;
    const { name, email, mobile, _id } = contact;
    return (
      <div className={`wrapper ${isLoading ? "isloading" : ""}`}>
        <div>
          {name && <Header name={name} id={_id} remove={this.deleteContact} />}
          {mobile && <Mobile mobile={mobile} />}
          {email && <Email email={email} />}
        </div>
        <Loader />
      </div>
    );
  }
}

export default ContactDetails;
