import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img1 from "../../assets/images/about/testi.jpg";

const Testimonial = () => {
  const responsive = {
    screen: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="bg-white">
      <div className="container">
        <Carousel responsive={responsive}>
          <div className="testimonial-wrapper">
            <div>
              <h3 className="text-center white-text">What people are saying about us</h3>
              <div className="border-line"></div>
              <div className="row justify-content-center align-items-center mt-lg-0 mt-4">
                <div className="col-lg-3">
                  <div className="text-center">
                    <div
                      style={{ backgroundImage: `url(${Img1})` }}
                      className="testimonial-img mx-auto"
                    ></div>
                    <div className="client-name mt-2">Edward Checker</div>
                    <div>Banker</div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div class="client-testimony text-lg-start text-center">
                    Dummy Text patient engagement app and web portal allow you
                    to access information instantaneously (no tedeous form, long
                    calls, or administrative hassle) and securely
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-wrapper bg-success"></div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
