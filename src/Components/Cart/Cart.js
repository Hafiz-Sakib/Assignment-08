import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";
import { faCircleCheck, faCut } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ carts, ChooseRandom, RemoveAll, RemoveSingle }) => {
  return (
    <div className="cart">
      <h1>
        Order Summery{" "}
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          className="text-primary"
        ></FontAwesomeIcon>
      </h1>
      <br />
      <h4> Selected Items: {carts.length}</h4>
      <br />
      <table>
        {carts.map((cart) => {
          return (
            <tr key={cart.id}>
              <td>
                <img src={cart.img} className="table__image" alt="" />
              </td>
              <td>{cart.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger ms-4"
                  onClick={() => RemoveSingle(cart.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
              </td>
            </tr>
          );
        })}
      </table>

      <div className="buttons">
        <button
          type="button"
          className="btn btn-success mt-4 ms-4"
          onClick={() => ChooseRandom(carts)}
        >
          Choose One For Me <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button
          type="button"
          className="btn btn-danger mt-4 ms-4"
          onClick={() => RemoveAll()}
        >
          Remove Cart <FontAwesomeIcon icon={faCut}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Cart;
