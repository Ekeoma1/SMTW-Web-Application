import React, { useState } from "react";
import HouseIcon from "@mui/icons-material/House";
import EditOutlined from "@ant-design/icons";
import { Button, Modal } from "antd";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="profile-container">
        <div className="profile-header-text mb-3">Current Address</div>
        <div className="profile-address-container">
          <div className="w-100 mb-2 d-flex justify-content-between align-items-center">
            <div>
              <HouseIcon /> Lagos Home Address
            </div>
            <div onClick={showModal}>
              <EditOutlined /> Edit
            </div>
          </div>

          <div className="d-flex mb-2 justify-content-between align-items-center">
            <div>Address</div>
            <div>7a Oko-awo St, V.I</div>
          </div>

          <div className="d-flex mb-2 justify-content-between align-items-center">
            <div>City</div>
            <div>Lagos</div>
          </div>

          <div className="d-flex mb-2 justify-content-between align-items-center">
            <div>Country</div>
            <div>Nigeria</div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>Phone Number</div>
            <div>+2348147016112</div>
          </div>
        </div>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form action="">
          <div>
            <label className="profile-label">Address</label>
            <input className="w-100 profile-input" type="text" />
          </div>

          <div>
            <label className="profile-label">Country</label>
            <input className="w-100 profile-input" type="text" />
          </div>

          <div>
            <label className="profile-label">City</label>
            <input className="w-100 profile-input" type="email" />
          </div>

          <div className="mt-3">
            <button className="w-100 profile-btn" type="submit">
              Save Edits
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Address;
