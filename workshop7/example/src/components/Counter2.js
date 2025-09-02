import React from "react";
import CounterWrapper from "../HOC/CounterWrapper";

const Counter2 = ({ counter, handleCounterChange }) => {
    return (
        <div>
            <h1>Counter 2 Component</h1>
            <h3>counter: {counter}</h3>
            <button onClick={handleCounterChange}>Increment</button>
        </div>
    );
};

export default CounterWrapper(Counter2);
