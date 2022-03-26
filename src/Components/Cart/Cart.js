import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { name, img } = props.cart;

  return (
    <div className="cart">
      <table>
        <tr>
          <td>
            <img src={img} className="table__image" alt="" />
          </td>
          <td>{name}</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
