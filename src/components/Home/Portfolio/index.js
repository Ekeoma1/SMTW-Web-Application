import React from "react";
import Img1 from "../../../assets/images/home/testi.jpg";
import Img2 from "../../../assets/images/home/testi2.jpg";
import Img3 from "../../../assets/images/home/testi3.jpg";
import Img4 from "../../../assets/images/home/testi4.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <header className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <h2 className="pri-color text-center">
              We Specialize In Making People Feel Great about how they look
            </h2>
          </div>
        </header>

        <div className="row justify-content-center align-items-center mt-4 gap-lg-0 gap-3">
          <div className="col-md">
            <div className="text-center">
              <img className="portfolio-img" width="260" height="450" src={Img1} alt="" />
            </div>
          </div>
          <div className="col-md">
            <div className="text-center">
              <img className="portfolio-img" width="260" height="520" src={Img3} alt="" />
            </div>
          </div>
          <div className="col-md">
            <div className="text-center">
              <img className="portfolio-img" width="260" height="570" src={Img2} alt="" />
            </div>
          </div>
          <div className="col-md">
            <div className="text-center">
              <img className="portfolio-img" width="260" height="470" src={Img4} alt="" />
            </div>
          </div>
        </div>

        <Link to="/register" className="btn-wrapper mx-auto mt-5 text-black text-center d-flex align-items-center justify-content-center">
          Get Started
          <div className="black-border-btn"></div>
          <div className="red-border-btn"></div>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
