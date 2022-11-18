import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row gap-md-0 gap-3">
            <div className="col-md">
              <Link to="/" className="logo text-white">
                SMTW
              </Link>

              <p className="text-capitalize">the right cloth for you</p>

              <p>
                Bulding 7a, InterSwitch, Oko-awo Street, Victoria Island, Lagos.
              </p>

              <div>
                Tel:{" "}
                <a className="text-white" href="tel:08147016112">
                  +234-814-701-6112
                </a>
              </div>
              <div>
                Email:{" "}
                <a
                  className="text-white"
                  href="mailto:eke.igwe@interswitchng.com"
                >
                  eke.igwe@interswitchng.com
                </a>
              </div>
            </div>
            <div className="col-md">
              <div className="text-md-center text-start">
                <p className="fw-bold">General</p>

                <p>
                  <Link className="text-white" to="#">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="#">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="#">
                    Careers
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="#">
                    Help & FAQ
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md">
              <div className="text-md-center text-start">
                <p className="fw-bold">Legal Info</p>

                <p>
                  <Link className="text-white" to="#">
                    Terms & Conditions
                  </Link>
                </p>
                <p>
                  <Link className="text-white" to="#">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md">
              <div>
                <p className="pri-color fw-bold text-capitalize">
                  {" "}
                  Subscribe to our newsletter
                </p>
                <div className="d-flex align-items-center">
                  <input
                    className="subscribe-input"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="subscribe-btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* copyright bar */}
      <div className="bg-white py-2 copyright-bar">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0">
              Copyright &copy; {new Date().getFullYear()} SMTW. Powered By
              InterSwitch Group
            </p>

            <div className="d-flex gap-3 footer-social-icon">
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
              <TwitterIcon />
              </a>
              <a href="#" target="_blank">
                <InstagramIcon />
              </a>
              <a href="#" target="_blank">
                <LinkedInIcon />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
