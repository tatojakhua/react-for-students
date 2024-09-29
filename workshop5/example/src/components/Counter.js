import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log("Counter component");
  useEffect(() => {
    console.log("Counter useEffect");
    document.title = counter;
  }, [counter]);

  return (
    <div>
      {console.log("Counter component JSX")}
      <h1>Counter component</h1>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
