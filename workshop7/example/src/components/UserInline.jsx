import React from "react";

function UserInline({ info }) {
  return (
    <div>
      <h1>{`${info.name.first} ${info.name.last}`}</h1>
      <img alt="user " src={info.picture.medium} />
      <p>
        <b>Email:</b> {info.email}
      </p>
      <p>
        <b>Phone:</b> {info.phone}
      </p>
    </div>
  );
}

export default UserInline;
