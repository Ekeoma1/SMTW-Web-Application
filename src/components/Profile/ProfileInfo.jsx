import React from 'react'

const ProfileInfo = () => {
  return (
    <div className='profile-container'>
      <form  action="">
        <div>
          <label className='profile-label'>Full Name</label>
          <input className='w-100 profile-input' type="text" />          
        </div>

        <div>
          <label className='profile-label'>Email Address</label>
          <input className='w-100 profile-input' type="email" />          
        </div>

        <div>
          <label className='profile-label'>Birth date</label>
          <input className='w-100 profile-input' type="email" />          
        </div>

        <div className='mt-3'>
          <button className='w-100 profile-btn' type='submit'>Save Edits</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileInfo
