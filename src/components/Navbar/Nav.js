import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import WidgetsIcon from "@mui/icons-material/Widgets";

const Nav = ({toggle, mToggle}) => {
  return (
    <nav>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-lg-flex d-none nav-item-gap ">
            <button onClick={toggle} className="nav-item">
              Our Categories
            </button>
            <Link className="nav-item" to="/about">
              About Us
            </Link>
          </div>
          <Link to="/" className="logo text-white">
            SMTW
          </Link>

          <div className="d-lg-flex d-none align-items-center nav-item-gap">
            <Link className="nav-item" to="/">
              Create Measurement
            </Link>
            <Link
              to="/login"
              className="btn-wrapper text-white text-center d-flex align-items-center justify-content-center"
            >
              Login
              <div className="white-border-btn"></div>
              <div className="red-border-btn"></div>
            </Link>

            <Link className="white-text" to="/cart">
              <ShoppingCartIcon />
            </Link>
            

            <Link className="white-text" to="/profile">
              <PersonIcon />
            </Link>
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={mToggle}
            className="d-lg-none"
          >
            <WidgetsIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
