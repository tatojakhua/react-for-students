import React from "react";
import CounterWrapper from "../HOC/CounterWrapper";

const Counter = ({ counter, handleCounterChange, name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h1>Counter Component</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={handleCounterChange}>Increment</button>
        </div>
    );
};

export default CounterWrapper(Counter);
