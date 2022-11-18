import React, {useState} from "react";
import { Modal } from 'antd';

const Checkout = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

  return (
    <section className="white-text">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="card bg-transparent border-white">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h5 className="white-text">Shipping Address</h5>
                    <button onClick={showModal} className="text-danger">Change address</button>
                </div>
                <div>
                    <div>Eke Igwe</div>
                    <div>No 7A, Oko-awo Street, Victoria Island, Lagos</div>
                    <div>+2348147016112</div>

                    {/* Modal for changing shipping address */}
                    <Modal title="Change Shipping Address" open={open} confirmLoading={confirmLoading} onOk={handleOk} onCancel={handleCancel}>
                        <div>
                            <input className="login-input-box" type="text" placeholder="Street Address" />
                        </div>
                        <div>
                            <input className="login-input-box" type="text" placeholder="City" />
                        </div>
                        <div>
                            <input className="login-input-box" type="text" placeholder="State " />
                        </div>
                        <div>
                            <input className="login-input-box" type="tel" placeholder="Phone number " />
                        </div>
                    </Modal>
                </div>
                </div>
            </div>
          </div>
          <div className="col-3">
            <div className="checkout-wrapper">
              <h5 className="white-text">Summary</h5>
              <div className="checkout-summary mt-3">
                <div>Cart subtotal</div>
                <div className="text-end">&#8358;23,000</div>

                <div>Delivery</div>
                <div className="text-end">&#8358;1,000</div>
              </div>
              <hr />
              <div className="checkout-summary">
                <div>Total</div>
                <div className="text-end">&#8358;24,000</div>
              </div>
              <div className="text-center mt-3">
                <button className="white-border-btn text-white position-static">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
