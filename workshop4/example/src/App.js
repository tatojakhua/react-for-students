/* eslint-disable no-unused-vars */
import React from "react";
import "./styles.css";
import Form from "./component/Form";
// import Modal from "./component/Modal";

// AGENDA

// eslint

// useState
// bunch of setState functions, why it's not working.
// useState callback function.
// Disable button -  input example.
// how to use useState when the value is an array.
// pass state into the props
// what is lazy initialization and why it's matter.
// ---------------------------------------------------

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

function App() {
  // const [modal, toggleModal] = useState(false);

  let counter = 0;
  return (
    <div className="App">
      <h1 id="Headline">{counter}</h1>
      <button
        onClick={() => {
          counter++;
          document.getElementById("Headline").textContent = counter;
        }}
      >
        Increment
      </button>
      {/* {modal && (
        <Modal>
          <div>
            <h1>Hi Modal</h1>
            <button onClick={() => toggleModal((prev) => !prev)}>
              Close modal
            </button>
          </div>
        </Modal>
      )} */}
      <Form />
    </div>
  );
}

export default App;
