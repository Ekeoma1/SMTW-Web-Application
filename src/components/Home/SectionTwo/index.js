import React from "react";
import Lottie from "react-lottie";
import tailorPant from "../../../assets/lottie/tailor-pant.json";



const SectionTwo = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: tailorPant,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        },
    };
  return (
    <section>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="s2-lottie-file">
            <Lottie height={400} options={defaultOptions} />
            </div>
          </div>
          <div className="col-lg-5 text-lg-start text-center">
            <h2 className="pri-color">No More Wrong fitting</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Semper viverra nam libero justo laoreet sit amet cursus sit.
                Phasellus faucibus scelerisque eleifend donec pretium.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Semper viverra nam libero justo laoreet sit amet cursus sit.
                Phasellus faucibus scelerisque eleifend donec pretium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
