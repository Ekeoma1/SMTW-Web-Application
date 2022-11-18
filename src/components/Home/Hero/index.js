import React from "react";
import manHome from "../../../assets/images/home/man-home.jpg";
import womanHome from "../../../assets/images/home/woman-home.jpg";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="home-hero">
      <div
        style={{ backgroundImage: `url(${manHome})` }}
        className="hero-bg"
      ></div>
      <div
        style={{ backgroundImage: `url(${womanHome})` }}
        className="hero-bg"
      ></div>
      <div className="hero-overlay d-flex align-items-center">
        <div className="container">
          <div className="hero-content text-capitalize">
          <h1 className="white-text" >get corporate wears specially made for you from the comfort of your device </h1>
          <div className="mt-3">
            <Link
              to="/register"
              className="mx-auto btn-wrapper white-text text-center d-flex align-items-center justify-content-center "
            >
              Get started
              <div className="white-border-btn"></div>
              <div className="red-border-btn"></div>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
