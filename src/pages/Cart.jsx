import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
  const [qty, setQty] = useState(1);

  return (
    <section>
      <div className="container">
        <h3>My Cart</h3>
        <div>Estimated delivery date:</div>

        <div className="mt-3">
          <div className="row">


            <div className="col-8">
              <div className="d-flex gap-3">
                <div className="cart-product-img"></div>
                <div>
                  <div className="mb-1">Product name</div>
                  <div className="cart-product-name fw-bold mb-1">
                    &#8358;23,000
                  </div>

                  <div className="d-flex gap-3 align-items-center">
                    <button 
                        disabled={qty==1 ?true: false}
                      className="cart-btn"
                      onClick={() => setQty(qty - 1)}
                    >
                      <RemoveIcon />
                    </button>
                    {qty}
                    <button
                      className="cart-btn"
                      onClick={() => setQty(qty + 1)}
                    >
                      <AddIcon />
                    </button>
                  </div>

                  <div className="delete-frm-cart-btn mt-2">
                    <DeleteOutlinedIcon/> <span>Delete</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>



            <div className="col-4">
              <div className="checkout-wrapper">
                <h5>Cart Summary</h5>
                <div className="checkout-details-wrapper mt-3">
                  <div>Cart subtotal</div>
                  <div>&#8358;23,000</div>
                </div>
                <hr />
                <div className="text-center mt-3">
                  <button className="white-border-btn text-white position-static">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
