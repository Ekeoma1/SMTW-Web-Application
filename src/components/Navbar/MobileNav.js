import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const MobileNav = ({ mobileNav, toggle, sideToggle, sidebar }) => {
  return (
    <div className={`${mobileNav && "d-none"} ${!sidebar && 'reduce-mob-nav'} d-lg-none mobile-nav`}>
      <button
        onClick={sideToggle}
        className={`${sidebar && "d-none"} text-white px-0`}
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>
      <div className={!sidebar && 'invisible'}>
        <div className="text-end">
          <button onClick={toggle} className="text-white px-0">
            <CloseIcon />
          </button>
        </div>
        <div>
          <button onClick={sideToggle} className="mb-3 text-white">
            Our Category
          </button>

          <Link to="#">
            <div className="mb-3 text-white">About Us</div>
          </Link>

          <Link to="#">
            <div className="mb-3 text-white">Create Measurement</div>
          </Link>

          <Link
            to="/login"
            className="btn-wrapper text-white text-center d-flex align-items-center justify-content-center"
          >
            Login
            <div className="white-border-btn"></div>
            <div className="red-border-btn"></div>
          </Link>

          <div className="d-flex gap-2 mt-3">
            <ShoppingCartIcon />
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
