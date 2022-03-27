import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const { name, img, price, brand } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <div>
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h4 className="text-danger" id="product__name">
            {name}
          </h4>
          <br />
          <h6>Price:{price}</h6>
          <p className="card-text">Brand:{brand}</p>
          <button
            type="button"
            className="btn btn-primary mt-4 ms-4"
            id="cart__button"
            onClick={() => handleAddToCart(props.product)}
          >
            Add to Cart{" "}
            <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
