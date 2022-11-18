import React from "react";

const ForgotPassword = () => {
  return (
    <div className="full-vh w-100 row justify-content-center align-items-center">
      <div className="col-md-4 col-12">
        <header className="text-center">
          <h2 className="white-text">Forgot password ?</h2>
          <p>Enter the email address associated with your account</p>
        </header>
        <form>
          <input
            className="login-input-box bg-transparent border border-white"
            type="email"
            placeholder="Enter your email"
          />
          <div className="text-center mt-4">
            <button type="submit" className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center">
              Submit
              <div className="white-border-btn"></div>
              <div className="red-border-btn"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
