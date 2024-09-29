import React from "react";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      Order Confirmed ! ! !
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Order;
