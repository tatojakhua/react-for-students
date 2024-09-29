import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home page
      <button
        onClick={() => {
          navigate("order-confirmed");
        }}
      >
        Place order
      </button>
      <button>
        {" "}
        <Link to={"/users/?filter=true"}> filtered Users</Link>
      </button>
    </div>
  );
};

export default Home;
