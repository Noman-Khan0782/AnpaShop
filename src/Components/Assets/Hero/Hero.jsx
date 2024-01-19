import React from "react";
import "./Hero.css";
import handicon from "../handicon.png";
import girl from "../girl.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={girl} alt="" />
        <h2>ApnaShop</h2>
      </div>
      <div className="hero-right">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <h1 className="arr"><FaArrowRightLong /></h1>
            <img src={handicon} alt="" />
          </div>
          <p>Collection</p>
          <p>For EveryOne</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <h1 className="arrow"><FaLongArrowAltRight /></h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
