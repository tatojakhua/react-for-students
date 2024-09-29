import React, { useState } from "react";

const CounterWrapper = (OriginalComponent) => {
  return function Wrapper() {
    const [counter, setCounter] = useState(0);
    const handleCounterChange = () => {
      setCounter(counter + 1);
    };

    return (
      <OriginalComponent
        handleCounterChange={handleCounterChange}
        counter={counter}
      />
    );
  };
};

export default CounterWrapper;
