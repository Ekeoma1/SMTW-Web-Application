import React, {useState} from 'react'
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const user = useSelector((state)=> state.user.userInfo)
  const [fullName, setFullName] = useState(user.fullName ?? '');
  const [email, setEmail]= useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber ?? ' ');
  return (
    <div className='profile-container'>
      <form  action="">
        <div>
          <label className='profile-label'>Full Name</label>
          <input value={fullName} onChange={(e)=> setFullName(e.target.value)} className='w-100 profile-input' type="text" />          
        </div>

        <div>
          <label className='profile-label'>Email Address</label>
          <input value={email} onChange={(e)=> setEmail(e.target.value)} className='w-100 profile-input' type="email" />          
        </div>

        <div>
          <label className='profile-label'>Phone Number</label>
          <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} className='w-100 profile-input' type="tel" />          
        </div>

        <div className='mt-3'>
          <button className='w-100 profile-btn' type='submit'>Save Edits</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileInfo
