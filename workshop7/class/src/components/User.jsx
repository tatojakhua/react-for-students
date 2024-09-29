import React from "react";
// import "./css/user.scss";

const User = ({ info }) => {
  return (
    <div className="user__wrapper">
      <h1>{`${info.name.first} ${info.name.last}`}</h1>
      <img
        className="user__wrapper__img"
        alt="user "
        src={info.picture.medium}
      />
      <p>
        <b>Email:</b> {info.email}
      </p>
      <p>
        <b>Phone:</b> {info.phone}
      </p>
    </div>
  );
};

export default User;
