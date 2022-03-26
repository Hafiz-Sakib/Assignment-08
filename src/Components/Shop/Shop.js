import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakeDb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop__container">
      <div className="product__container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          ></Product>
        ))}
      </div>
      <div className="cart__container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
