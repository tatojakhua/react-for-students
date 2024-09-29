import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import { useEffect } from "react";

function App() {
  console.log("App components function");
  useEffect(() => {
    console.log("App useEffect");
  }, []);
  return (
    <div className="App">
      {console.log("App components BODY")}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
