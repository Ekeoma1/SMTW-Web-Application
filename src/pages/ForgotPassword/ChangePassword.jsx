import React from "react";

const ChangePassword = () => {
  return (
    <div className="full-vh w-100 row justify-content-center align-items-center">
      <div className="col-md-4 col-12">
        <header className="text-center">
          <h3 className="white-text">Enter your new password</h3>
        </header>
        <form>
          <input
            className="login-input-box bg-transparent border border-white"
            type="password"
            placeholder="Enter new password"
          />

          <input
            className="login-input-box bg-transparent border border-white mt-3"
            type="password"
            placeholder="Re-Enter new password"
          />

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center"
            >
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

export default ChangePassword;
