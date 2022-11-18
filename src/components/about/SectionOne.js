import React from "react";
import Img1 from "../../assets/images/about/rect.png";
import Img2 from "../../assets/images/about/rect2.png";

const SectionOne = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 row align-items-center gap-lg-0 gap-">
          <div className="col order-1">
            <img className="img-fluid" src={Img1} alt="" />
          </div>
          <div className="col order-2">
            <div className="text-black">
              <h2>Clothing made for you</h2>
              <p>
                Say goodbye to mass-produced clothing and hello to clothing made
                by you, for you. We make sure you feel as good as you look
                wearing custom-tailored clothing true to your unique fit and
                style. Don’t let your clothing decide who you are; decide it for
                yourself.
              </p>
            </div>
          </div>

          <div className="col order-lg-3 order-4">
            <div className="text-black">
              <h2>A smarter choice</h2>
              <p>
                We’re far from an ordinary clothing company. We only produce by
                order and keep no inventory, resulting in less waste and
                excessive production. We take pride in fully owning and
                operating our facilities, ensuring responsible and fair
                production.
              </p>
            </div>
          </div>
          <div className="col order-lg-4 order-3">
            <div className="text-center">
              <img className="img-fluid" src={Img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
