import Users from "./components/Users";

import "./App.css";
import DesignPatternsUsers from "./designPatterns/users/DesignPatternsUsers";
import Counter1 from "./designPatterns/counters/Counter1";
import Counter2 from "./designPatterns/counters/Counter2";
import { useState } from "react";
import Modal from "./components/modal/Modal";
function App() {
  const [showModal, toggleModal] = useState(false);
  return (
    <div className="App">
      <h1 className="App__headline">Users application</h1>
      {/* <Users /> */}
      {/* <DesignPatternsUsers /> */}
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}

      <button onClick={() => toggleModal(true)}>Show Modal</button>
      {showModal && (
        <Modal>
          <div>
            <h1>Hi Modal</h1>
            <button onClick={() => toggleModal((prev) => !prev)}>
              Close modal
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
