import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop__container  row">
      <div className=" row product__container col col-lg-8">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="cart__container col col-lg-4">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
