import React from "react";

const Mobile = props => {
  const mobile = props.mobile;
  return (
    <div className="mobile">
      <ion-icon name="call" />
      <p>{mobile}</p>
      <ion-icon name="chatboxes" />
    </div>
  );
};

export default Mobile;
