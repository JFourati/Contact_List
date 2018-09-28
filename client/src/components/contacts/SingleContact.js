import React from "react";
import { Link } from "react-router-dom";

const SingleContact = props => {
  const contact = props.contact;
  return (
    <Link to={`/contact/${contact._id}`}>
      <div className="contact">
        <ion-icon name="contact" />
        <span>{contact.name}</span>
      </div>
    </Link>
  );
};

export default SingleContact;
