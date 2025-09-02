import React from "react";
import { createPortal } from "react-dom";
import "./style.css";

const Modal = ({ children }) => {
    return createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("modal")
    );
};

export default Modal;
