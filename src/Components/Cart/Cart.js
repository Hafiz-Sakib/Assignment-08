import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h1>
        Order Summery{" "}
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="text-success"
        ></FontAwesomeIcon>
      </h1>
      <p>Selectd Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
