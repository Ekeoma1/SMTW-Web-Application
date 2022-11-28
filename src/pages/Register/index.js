import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import Lottie from 'react-lottie'
import sweingThred from '../../assets/lottie/funny-sewing-thread.json'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { register } from "../../features/User/userSlice";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [loginMsg, setLoginMsg] = useState(null);
  // const [isSuccess, setIsSuccess] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state)=> state.user.LoginSuccess)

  useEffect(()=> {
    isLoggedIn && navigate("/")
  },[isLoggedIn])


  const defaultOptions ={
    loop: true,
    autoplay: true,
    animationData: sweingThred,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    },
  };

  const RegisterUser= async(values)=> {
    setLoading(true)
    try {
      const response = await axios.post('https://localhost:7290/api/user/register', values)
      setLoading(false);
      // setIsSuccess("success")
      setLoginMsg("Successful Registration");
      dispatch(register())
      setOpen(true);
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } catch (error) {
      // setIsSuccess("error")
      setLoading(false);
      setLoginMsg(error.message);
      setErrOpen(true);
      setTimeout(() => {
        setErrOpen(false);
      }, 3000);
    }
  }


  const [loading, setLoading] = useState();
  // formik form validation
  const passwordChheck ="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])"
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNumber: '',
    },
    
    validationSchema: Yup.object({
      phoneNumber: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required('A phone number is required'),
      password: Yup.string()
        .matches(passwordChheck, 'Must contain number, lowercase, uppercase and special sign')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      RegisterUser(values)
    },
  });
  return (
    <div className="form-page-wrapper d-flex justify-content-between">
      <div className="w-100 bg-white form-page-side-b">
        <div className="form-page-side-b-border">
          <form onSubmit={formik.handleSubmit} className="login-form mx-auto">
            <header className="text-center">
              <h2>Register</h2>
            </header>

            <div className="my-4">
              <input
                className="login-input-box"
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="mb-4">
            <input
                className="login-input-box"
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <input
                className="login-input-box"
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <Collapse in={open}>
              <Alert sx={{ mb:2 }}  severity="success" >
                {loginMsg}
              </Alert>
            </Collapse>

            <Collapse in={errOpen}>
              <Alert sx={{ mb:2 }} severity="error">{loginMsg}</Alert>
            </Collapse>

            <button type="submit" className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center">
            {loading ? <span class="spinner-border text-danger spinner-border-sm" role="status" aria-hidden="true"></span>: "Register"}
              <div className="black-border-btn"></div>
              <div className="red-border-btn"></div>
            </button>

            <div className="text-center my-2">
              <span>already have an account?</span>{" "}
              <Link className="pri-color" to="/login">
                login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100 d-none d-lg-flex justify-content-center align-items-center onboard-bg">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Register;
