import React from "react";
import hero from "../../assets/images/category/tailor-store-header.webp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Product = () => {
  return (
    <div>
      <div className="row align-items-center gap-lg-0 gap-3 m-0">
        <div className="col-lg-6 p-0">
          <img src={hero} className="object-fit-cover" alt="not" />
        </div>
        <div className="col-lg-6">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col">
                <h2>Plain Men shirt</h2>
                <p>
                  A elegant modern business shirt. Wear with dark chinos
                  for a classic, stylish business look. Order our recommended
                  design or customize it to your preference. Made to your
                  measurements.
                </p>
                <div className="row">
                    <div className="col-md">
                        <div>Color: White<ArrowDropDownIcon/></div>
                        <div>Fabric: Cotton <ArrowDropDownIcon/></div>
                        <div>Pockets: None <ArrowDropDownIcon/></div>
                    </div>
                    <div className="col-md">
                        <div>Sleeve: Long <ArrowDropDownIcon/></div>
                        <div>Cuff: Single Button <ArrowDropDownIcon/></div>
                    </div>
                </div>
                
                <form className="mt-2">
                    <textarea className="w-75 bg-transparent border border-white product-textarea" placeholder="Additional Information" name="" id=""></textarea>
                </form>

                <div className="mt-2">
                  <button className="text-white white-border-btn position-static">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
