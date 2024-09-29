import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counter";

const Counter = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter.counter}</h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
