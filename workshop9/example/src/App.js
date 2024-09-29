import { useState, useMemo } from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Counter2 from "./components/counter2/Counter2";
import Posts from "./components/posts/Posts";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const names = ["John", "Giorgi", "jane"];

  const calculateLongestWord = useCallback(() => {
    console.log("calculateLongestWord func");
    let longest = "";

    names.forEach((name) => {
      if (name.length > longest.length) {
        longest = name;
      }
    });
    return longest;
  }, []);

  const memorized = useMemo(calculateLongestWord, [calculateLongestWord]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    setCount2((prev) => prev + 1);
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      {/* <Counter /> */}
      {/* <Posts /> */}
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <Counter2 onclick={increment} />
      <div>{memorized}</div>
    </div>
  );
}

export default App;
