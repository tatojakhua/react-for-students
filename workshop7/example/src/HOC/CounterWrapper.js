import React, { useState } from "react";

const CounterWrapper = (OriginalComponent) => {
    return function Wrapper(prop) {
        const [counter, setCounter] = useState(0);

        const handleCounter = () => {
            setCounter(counter + 1);
        };
        return (
            <OriginalComponent
                {...prop}
                counter={counter}
                handleCounterChange={handleCounter}
            />
        );
    };
};

export default CounterWrapper;
