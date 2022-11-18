import React from "react";

const Security = () => {
  return (
    <div className="profile-container">
      <div className="profile-header-text mb-2">Security</div>
      <form className='profile-info-form' action="">
        <div>
          <label className='profile-label'>Current Password</label>
          <input className='w-100 profile-input' type="password" />          
        </div>

        <div>
          <label className='profile-label'>New Password</label>
          <input className='w-100 profile-input' type="password" />          
        </div>

        <div>
          <label className='profile-label'>Confirm New Password</label>
          <input className='w-100 profile-input' type="password" />          
        </div>

        <div className='mt-3'>
          <button className='w-100 profile-btn' type='submit'>Update Password</button>
        </div>
      </form>
    </div>
  );
};

export default Security;
