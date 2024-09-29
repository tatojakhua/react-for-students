import React from "react";
import CounterWrapper from "../HOC/CounterWrapper";

const Counter2 = ({ counter, handleCounterChange }) => {
  return (
    <div>
      <h1> Counter2 {counter} </h1>
      <button onClick={handleCounterChange}>increment</button>
    </div>
  );
};

export default CounterWrapper(Counter2);
