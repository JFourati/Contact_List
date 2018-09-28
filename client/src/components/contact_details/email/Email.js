import React from "react";

const Email = props => {
  const email = props.email;
  return (
    <div className="email">
      <ion-icon name="mail" />
      <p>{email}</p>
    </div>
  );
};

export default Email;
