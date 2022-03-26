import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navigation__bar">
      <h1 className="text-white animate__animated animate__bounceInLeft">
        Camera Mart
      </h1>

      <div>
        <a href="/home">Home</a>

        <a href="/order">Order</a>

        <a href="/cart">Cart</a>

        <a href="/about us">About us</a>
      </div>
    </nav>
  );
};

export default Header;
