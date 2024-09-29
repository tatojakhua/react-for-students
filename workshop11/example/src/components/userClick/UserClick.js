import React, { useState } from "react";

const UserClick = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};

export default UserClick;
