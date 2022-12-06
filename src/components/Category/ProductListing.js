import React from "react";
import pic from "../../assets/images/category/plain.webp";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductListing = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="product-wrapper">
          <div className="card product-card border-0">
            <img src={pic} className="card-img-top" alt=" " />
            <div className="text-dark text-center">
              <div className="my-2">
                <p className="m-0">Plain Business shirt</p>
                <div>&#8358;15,000</div>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link className="product-btn" to="/product">
                  Customise
                </Link>
                {/* <button className="add-to-cart-btn">
                  <ShoppingCartIcon />
                </button> */}
              </div>
            </div>
          </div>

          <div className="card product-card border-0">
            <img src={pic} className="card-img-top" alt=" " />
            <div className="text-dark text-center">
              <div className="my-2">
                <p className="m-0">Plain Business shirt</p>
                <div>&#8358;15,000</div>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link className="product-btn" to="/product">
                  Customise
                </Link>
                {/* <button className="add-to-cart-btn">
                  <ShoppingCartIcon />
                </button> */}
              </div>
            </div>
          </div>

          <div className="card product-card border-0">
            <img src={pic} className="card-img-top" alt=" " />
            <div className="text-dark text-center">
              <div className="my-2">
                <p className="m-0">Plain Business shirt</p>
                <div>&#8358;15,000</div>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link className="product-btn" to="/product">
                  Customise
                </Link>
                {/* <button className="add-to-cart-btn">
                  <ShoppingCartIcon />
                </button> */}
              </div>
            </div>
          </div>

          <div className="card product-card border-0">
            <img src={pic} className="card-img-top" alt=" " />
            <div className="text-dark text-center">
              <div className="my-2">
                <p className="m-0">Plain Business shirt</p>
                <div>&#8358;15,000</div>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link className="product-btn" to="/product">
                  Customise
                </Link>
                {/* <button className="add-to-cart-btn">
                  <ShoppingCartIcon />
                </button> */}
              </div>
            </div>
          </div>

          <div className="card product-card border-0">
            <img src={pic} className="card-img-top" alt=" " />
            <div className="text-dark text-center">
              <div className="my-2">
                <p className="m-0">Plain Business shirt</p>
                <div>&#8358;15,000</div>
              </div>
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <Link className="product-btn" to="/product">
                  Customise
                </Link>
                {/* <button className="add-to-cart-btn">
                  <ShoppingCartIcon />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
