import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logOutAction } from "../../context/auth/actions";

const Home = () => {
  const { dispatch } = useAuthContext();
  return (
    <div>
      Home page
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
      >
        log out
      </button>
    </div>
  );
};

export default Home;
