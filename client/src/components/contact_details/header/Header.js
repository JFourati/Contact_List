import React from "react";
import { Link } from "react-router-dom";

const Header = (props, match) => {
  const { name, id, remove } = props;
  return (
    <div className="header">
      <Link to="/" className="back">
        <ion-icon name="arrow-round-back" />
      </Link>
      <div onClick={remove} className="delete">
        <ion-icon name="trash" />
      </div>
      <div className="edit">
        <Link to={`/contact/edit/${id}`}>
          <ion-icon name="create" />
        </Link>
      </div>
      <div className="name">
        <ion-icon name="contact" />
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Header;
