import React, { memo } from "react";

const Counter2 = ({ onclick }) => {
  console.log("Counter2 component");
  return (
    <div>
      <h1>Counter2</h1>
      <button onClick={onclick}>increment</button>
    </div>
  );
};

export default memo(Counter2);
