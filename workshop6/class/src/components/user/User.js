import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const User = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div className="user__wrapper">
      <h1>name: {info.name}</h1>
      <h1>email: {info.email}</h1>
      <button
        onClick={() => {
          navigate(`/user/${info.id}`);
        }}
      >
        Detail Page
      </button>
    </div>
  );
};

export default User;
