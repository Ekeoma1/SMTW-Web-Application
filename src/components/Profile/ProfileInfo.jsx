import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { updateUser } from '../../features/User/userSlice';

const ProfileInfo = () => {
  const user = useSelector((state)=> state.user.userInfo)
  const [fullName, setFullName] = useState(user.fullName ?? '');
  const [email, setEmail]= useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber ?? ' ');
  const [profileMsg, setProfileMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false)
  const dispatch = useDispatch();
 

  // request for updating user info
  const updateProfile = async() => {
    try {
      const response = await axios.patch(`https://localhost:7290/api/user/${user.id}`, [
        {
          "path": "/fullname",
          "op": "add",
          "value": fullName
        },
        {
          "path": "/phoneNumber",
          "op": "add",
          "value": phoneNumber
        }
      ])
      setProfileMsg("Profile Updated Successfully")
      setOpen(true)
      dispatch(updateUser(response.data))
      setTimeout(() => {
        setOpen(false)
      }, 3000);
    } catch (error) {
      setProfileMsg(error.message)
      setErrOpen(true)

      setTimeout(() => {
        setErrOpen(false)
      }, 3000);
    }
  }

  return (
    <div className='profile-container'>
      <Collapse in={open}>
        <Alert sx={{ mb: 2 }} severity="success">
          {profileMsg}
        </Alert>
      </Collapse>

      <Collapse in={errOpen}>
        <Alert sx={{ mb:2 }} severity="error">{profileMsg}</Alert>
      </Collapse>
      <form onSubmit={(e)=> e.preventDefault()}  action="">
        <div>
          <label className='profile-label'>Full Name</label>
          <input value={fullName} onChange={(e)=> setFullName(e.target.value)} className='w-100 profile-input' type="text" />          
        </div>

        <div>
          <label className='profile-label'>Email Address</label>
          <input disabled value={email} onChange={(e)=> setEmail(e.target.value)} className='w-100 profile-input' type="email" />          
        </div>

        <div>
          <label className='profile-label'>Phone Number</label>
          <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} className='w-100 profile-input' type="tel" />          
        </div>

        <div className='mt-3'>
          <button onClick={() => updateProfile()} className='w-100 profile-btn'>Save Edits</button>
        </div>
      </form>
    </div>
  )
}

export default ProfileInfo
