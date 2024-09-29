import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page not FOUND :(</h1>
      <button
        onClick={() => {
          navigate(-1, { state: "cant find" });
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
