// src/User.js
import React from 'react';

const User = ({ user }) => {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;


