import React, {useState} from "react";
import { useParams } from "react-router-dom";
import PinInput from "react-pin-input";

const EmailVerification = () => {
  let params = useParams();
  const [code, setCode] = useState('')

  const formSubmit =(e)=> {
    e.preventDefault();
    alert(code)
  }
  return (
    <div className="full-vh w-100 row justify-content-center align-items-center">
      <div className="col-md-4 col-12">
        <header className="text-center">
          <h2 className="white-text">Email Verification</h2>
          <p>
            Enter the code that we sent via this email address{" "}
            <span className="text-danger">{params.email}</span>{" "}
          </p>
        </header>
        <form onSubmit={formSubmit} className=" text-center">
          <PinInput
            length={6}
            initialValue=""
            // secret
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            inputStyle={{ borderColor: "white" }}
            inputFocusStyle={{ borderColor: "Red" }}
            onComplete={(value, index) => {setCode(value)}}
            autoSelect={true}
          />
          <div className="text-center mt-4">
            <button
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

export default EmailVerification;
