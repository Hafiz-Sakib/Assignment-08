import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, brand, price, img } = props.product;
  const { handleAddToCart } = props;
  console.log(name);
  return (
    <div className="col col-sm-1 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h4 className="text-danger">{name}</h4>
          <h6>Price:{price}</h6>
          <p className="card-text">Brand:{brand}</p>
          <button
            type="button"
            class="btn btn-primary mt-4 ms-4"
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

export default Product;
