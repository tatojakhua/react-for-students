import React, { useState } from "react";
import "./App.css";
// import Composition from "./components/Composition";
import Modal from "./components/Modal";
// import Hello from "./components/Hello";
// import RenderProp from "./components/RenderProp";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";

function App() {
    const name = "John";
    const [isModalOpen, setisModalOpen] = useState(false);
    const openModalHandler = () => {
        setisModalOpen(!isModalOpen);
    };
    return (
        <div className="App">
            <h1>App</h1>
            {/* <Counter name={5} />
            <Counter2 /> */}
            {/* <Hello /> */}
            {/* <RenderProp
                render={(surname) => {
                    return (
                        <div>
                            <h1>Hello from App Component</h1>
                            <h3>
                                {name} {surname}
                            </h3>
                        </div>
                    );
                }}
            /> */}
            {/* 
            <Composition>
                <h1>Hello from App</h1>
            </Composition> */}
            <button onClick={openModalHandler}>open modal</button>
            {isModalOpen && (
                <Modal>
                    <div>
                        <h1>Hello from App</h1>
                        <button onClick={openModalHandler}>close modal</button>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default App;
