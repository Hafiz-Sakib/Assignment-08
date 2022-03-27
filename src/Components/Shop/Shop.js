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
    if (cart.indexOf(product) === -1) {
      if (cart.length < 4) {
        const newCart = [...cart, product];
        setCart(newCart);
      } else {
        alert("Maximum 4 Product Can be Selected 🙁!");
      }
    } else {
      alert("You Have Already Selected This Product 🤗!");
    }
  };

  const saveCart = [];

  const ChooseRandom = (cart) => {
    console.log(cart);
    const genarateNumber = Math.floor(Math.random() * cart.length);
    saveCart.push(cart[genarateNumber]);
    setCart(saveCart);
  };

  const RemoveAll = () => {
    setCart([]);
  };

  const RemoveSingle = (id) => {
    const RemoveItem = cart.filter((item) => item.id !== id);
    setCart(RemoveItem);
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
        <Cart
          key={cart.id}
          carts={cart}
          ChooseRandom={ChooseRandom}
          RemoveAll={RemoveAll}
          RemoveSingle={RemoveSingle}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
