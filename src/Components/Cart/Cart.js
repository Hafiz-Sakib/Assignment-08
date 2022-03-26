import React from "react";
import "./Cart.css";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
  console.log(props);
  const { id, name, img } = props.cart;

  return (
    <div className="cart">
      <h1>
        Order Summery{" "}
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="text-danger"
        ></FontAwesomeIcon>
      </h1>
      <p>Selectd Items: {props.length}</p>
      <p>{img}</p>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
};

export default Cart;
