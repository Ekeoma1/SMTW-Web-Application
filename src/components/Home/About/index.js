import React from "react";

const About = () => {
  return (
    <section className="bg-white text-lg-start text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="pri-color">What We Do</h2>
            <div className="about-content">
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
          <div className="col-lg-7">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <div className="box shadow-sm"></div>
              <div className="box shadow-sm"></div>
              <div className="box shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
