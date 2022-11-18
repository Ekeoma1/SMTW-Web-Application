import React from 'react'
import {Link} from 'react-router-dom'
import Lottie from 'react-lottie'
import sewingTool from '../../assets/lottie/sewing-tools.json'

const index = () => {
  const defaultOptions ={
    loop: true,
    autoplay: true,
    animationData: sewingTool,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };
  return (
    <div className='form-page-wrapper d-flex justify-content-between'>
      <div className='w-100 d-none d-lg-flex justify-content-center align-items-center onboard-bg'>
      <Lottie options={defaultOptions} />

      </div>

      <div className='w-100 bg-white form-page-side-b'>
        <div className='form-page-side-b-border'>
            <form className='login-form mx-auto'>
                <header className='text-center'>
                    <h2>Log in</h2>
                </header>

                <div className='my-4'>
                    <input className='login-input-box' type="email" placeholder='Email' />
                </div>
                <div className='mb-4'>
                    <input className='login-input-box' type="password" placeholder='Password' />
                </div>

                <div className="text-end mb-4">
                    <Link className='pri-color' to="/forgot-password">Forgot password ?</Link>
                </div>
                
                <button className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center">
                    Log In
                    <div className="black-border-btn"></div>
                    <div className="red-border-btn"></div>
                </button>

                <div className='text-center my-2'>
                    <span>new here?</span> <Link className='pri-color' to="/register">sign up</Link>
                </div>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default index
