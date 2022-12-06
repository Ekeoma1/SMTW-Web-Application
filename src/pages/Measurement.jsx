import React, {useState, useEffect} from "react";
import "../assets/css/measurement.css";
import Meas from "../assets/images/measurement.webp";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const Measurement = () => {
    const [loading, setLoading]= useState(false);
    const [open, setOpen]= useState(false);
    useEffect(()=> {
      window.scrollTo(0,0);
    },[])

    const onBtnClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false); 
            setOpen(true);
        }, 3000);

        setTimeout(()=> {
            setOpen(false);     
        }, 4000)
    }
  return (
    <div
      style={{ backgroundImage: `url(${Meas})` }}
      className="measure-hero position-relative"
    >
      <div className="measure-hero-overlay row align-items-center justify-content-center position-absolute w-100 h-100">
        <div className="col-sm-7 text-center">
            <h2 className="white-text">Your Measurements</h2>
            <p>We know that measurement will be a problem so request a tailor</p>
            <div className="mt-3">
                <button
                // to="#"
                onClick={()=> onBtnClick()}
                className="mx-auto btn-wrapper white-text text-center d-flex align-items-center justify-content-center "
                >
                {loading ? (
                <span
                  class="spinner-border text-danger spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Request"
              )}
                <div className="white-border-btn"></div>
                <div className="red-border-btn"></div>
                </button>
            </div>
            <Collapse in={open}>
              <Alert sx={{ mb: 2 }} severity="success">
                Your Request is successful, we would reach out to you
              </Alert>
            </Collapse>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
