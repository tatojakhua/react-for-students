import React from "react";
import CounterWrapper from "../HOC/CounterWrapper";

const Counter1 = ({ counter, handleCounterChange }) => {
  return (
    <div>
      <h1> Counter1 {counter} </h1>
      <button onClick={handleCounterChange}>increment</button>
    </div>
  );
};

export default CounterWrapper(Counter1);
