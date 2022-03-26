import React from "react";

const Product = (props) => {
  const { name, brand, price, img } = props.product;
  console.log(name);
  return (
    <div className="col col-sm-1 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h4 className="text-danger">{name}</h4>
          <h6>Price:{price}</h6>
          <p className="card-text">Brand:{brand}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
