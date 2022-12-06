import React, { useState, useEffect } from "react";
import "../assets/css/profile.css";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { Tabs } from "antd";
import ProfileInfo from "../components/Profile/ProfileInfo";
import UserOrder from "../components/Profile/UserOrder";
import Security from "../components/Profile/Security";
import Address from "../components/Profile/Address";

const Profile = () => {
  const [mode, setMode] = useState("left");
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <section>
      <div className="profile-page-wrapper">
        <ProfileHeader />
        <div className="profile-body">
          <Tabs tabPosition={mode} defaultActiveKey="1">
            <Tabs.TabPane tab="Profile Info" key="1">
              <ProfileInfo/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="My Order" key="2">
              <UserOrder/>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Security" key="3">
              <Security/>
            </Tabs.TabPane>
            {/* <Tabs.TabPane tab="Address Details" key="4">
              <Address/>
            </Tabs.TabPane> */}
            <Tabs.TabPane tab="Measurement" key="4">
              <div>Measurment</div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Profile;
