import React from "react";
import hero from "../../assets/images/category/tailor-store-header.webp";

const Hero = () => {
  return (
    <div>
      <div className="row align-items-center gap-lg-0 gap-3 m-0">
        <div className="col-lg-6 p-0">
          <img src={hero} className="object-fit-cover" alt="hot" />
        </div>
        <div className="col-lg-6">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col">
                <h2>Men's dress shirts</h2>
                <p>
                  Get inspired by our selection of pre-designed dress shirts,
                  all with your unique fit to them. Grab them as they are or
                  customize to your needs using our design tool. Discover the
                  superior quality in a Made to Measure dress shirt easy, fast
                  and customized to your wishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
