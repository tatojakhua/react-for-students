import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import User from "./components/User";

// useEffect

// useEffect and API calls

// useEffect
// what is useEffect
// component mount unmount update
// dependency array
// const depCompare = (oldDep, newDeps) => {
//   return (
//     oldDep.length === newDeps.length &&
//     oldDep.every((item, i) => item === newDeps[i])
//   );
// };

// useEffect return function cleanup function

// useEffect and fetch data from API

const App = () => {
  const [showCounter, setShowCounter] = useState(true);
  console.log("App component");
  useEffect(() => {
    console.log("App useEffect");
  }, []);

  return (
    <div>
      {console.log("App JSX")}
      <h1>App</h1>
      {showCounter && <Counter />}
      <button onClick={() => setShowCounter((prev) => !prev)}>
        hide counter
      </button>

      <User />
    </div>
  );
};

export default App;
