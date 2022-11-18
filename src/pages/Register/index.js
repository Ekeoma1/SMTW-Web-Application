import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Lottie from 'react-lottie'
import sweingThred from '../../assets/lottie/funny-sewing-thread.json'

const Register = () => {
  const defaultOptions ={
    loop: true,
    autoplay: true,
    animationData: sweingThred,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  const [value, setValue] = useState();
  return (
    <div className="form-page-wrapper d-flex justify-content-between">
      <div className="w-100 bg-white form-page-side-b">
        <div className="form-page-side-b-border">
          <form className="login-form mx-auto">
            <header className="text-center">
              <h2>Register</h2>
            </header>

            <div className="my-4">
              <input
                className="login-input-box"
                type="email"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </div>

            <div className="mb-4">
              <input
                className="login-input-box"
                type="password"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center">
              Register
              <div className="black-border-btn"></div>
              <div className="red-border-btn"></div>
            </button>

            <div className="text-center my-2">
              <span>already have an account?</span>{" "}
              <Link className="pri-color" to="/login">
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100 d-none d-lg-flex justify-content-center align-items-center onboard-bg">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Register;
