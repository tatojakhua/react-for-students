import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Order from "./components/Order";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-confirmed" element={<Order />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId/:userName" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
