import React from "react";
import AboutVid from "../../assets/video/About-smtw.mp4";

const Hero = () => {
  return (
    <div className="about-hero">
      <video
        autoPlay
        loop
        controls={false}
        className="position-absolute w-100 h-100"
      >
        <source src={AboutVid} type="video/mp4" />
      </video>
      <div className="d-flex align-items-center w-100 h-100 position-absolute">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12 ">
              <div className="text-center">
                <h1 className="white-text">We're reshaping the clothing industry</h1>
                <p>
                  We’re all about making good, quality custom clothing to be
                  worn and loved over time. We’re passionate about changing the
                  way you look at clothing and changing the way they’re made. We
                  want nothing more than for you to join us. It’s time to start
                  wearing clothes that fit, for real.
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
