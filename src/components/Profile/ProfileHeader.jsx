import React from 'react'
import { useSelector } from 'react-redux'

const ProfileHeader = () => {
  const user = useSelector((state)=> state.user.userInfo)
  return (
    <div className='profile-header'>
      <div className='text-center'>
        <div className="mx-auto profile-img"></div>
        <div className='mt-2'>
            <h5 className="white-text" >{user.fullName ?? user.email}</h5>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
