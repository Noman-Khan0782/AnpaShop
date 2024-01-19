import React, { useState } from "react";
import "./Navebar.css";
import logo from "../Assets/Ecommerce.png";
import cart from "../Assets/cart.png";
import { FaShopify } from "react-icons/fa6";
import { IoMdMan } from "react-icons/io";
import { IoWoman } from "react-icons/io5";
import { BiChild } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Navebar = () => {
  const [menu, setMenu] = useState("Shop");
  return (
    <div className="navebar">
      <div className="nave-logo">
        <img className="logo" src={logo} alt="" />
        <p>ApnaShop</p>
      </div>
      <ul className="nave-menu">
        <li
          onClick={() => {
            setMenu("Shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
            <FaShopify />
          </Link>

          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
            <IoMdMan />
          </Link>
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
            <IoWoman />
          </Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
            <BiChild />
          </Link>

          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nave-login">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button className="login">Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img className="cart" src={cart} alt="" />
        </Link>
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};
