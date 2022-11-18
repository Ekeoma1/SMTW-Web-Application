import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const UserOrder = () => {
  return (
    <div className="profile-container">
      <div className="mb-3">
        <div className="profile-header-text mb-3">Current Orders</div>
        <div className="row">
          <div className="col-md-4">
            <div className="cart-product-img"></div>
          </div>
          <div className="col-md-8">
            <div>
              <div>Product name</div>
              <div>&#8358;23,000</div>
              <div>Qty: 1</div>
              <div>Color: Black</div>
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex gap-3">
            <button className="alt-profile-btn px-3">Contact Support</button>
            <button className="profile-btn px-3">Package Tracking</button>
        </div>
      </div>
      <hr />

      <div>
        <div className="profile-header-text">Past Orders</div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <div>Order No: 12345</div>
          <div>
            14 May 2021 <KeyboardArrowDownIcon />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center my-2">
          <div>Order No: 12345</div>
          <div>
            14 May 2021 <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrder;
