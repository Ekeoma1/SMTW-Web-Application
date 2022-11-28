import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import sewingTool from "../../assets/lottie/sewing-tools.json";
import { useFormik } from "formik";
import axios from "axios";
import { login } from "../../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";

import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";

const Login = () => {
  const isLoggedIn = useSelector((state)=> state.user.LoginSuccess)

  useEffect(()=> {
    isLoggedIn && navigate("/profile")
  },[isLoggedIn])

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [errOpen, setErrOpen] = useState(false);
  const [loginMsg, setLoginMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // lottie file
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: sewingTool,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  

  const LoginUser = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://localhost:7290/api/user/login",
        values
      );
      setLoading(false);
      setLoginMsg("Successful Login");
      dispatch(login(response.data[0]));
      console.log(response.data[0]);
      setOpen(true);
      setTimeout(() => {
        navigate('/profile')
      }, 3000);
    } catch (error) {
      setLoading(false);
      setLoginMsg(error.message);
      setErrOpen(true);
      setTimeout(() => {
        setErrOpen(false);
      }, 3000);
    }
  };

  // formik validation
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password > 5) {
      errors.password = "Must be atleast 6 characters";
    } else if (
      !values.password.match(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])"
      )
    ) {
      errors.password =
        "Must contain number, lowercase, uppercase and special sign";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      LoginUser(values);
    },
  });
  return (
    <div className="form-page-wrapper d-flex justify-content-between">
      <div className="w-100 d-none d-lg-flex justify-content-center align-items-center onboard-bg">
        <Lottie options={defaultOptions} />
      </div>

      <div className="w-100 bg-white form-page-side-b">
        <div className="form-page-side-b-border">
          <form onSubmit={formik.handleSubmit} className="login-form mx-auto">
            <header className="text-center">
              <h2>Log in</h2>
            </header>

            <div className="my-4">
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className="login-input-box"
                type="email"
                placeholder="Email"
                name="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                className="login-input-box"
                type="password"
                placeholder="Password"
                name="password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <Collapse in={open}>
              <Alert sx={{ mb: 2 }} severity="success">
                {loginMsg}
              </Alert>
            </Collapse>

            <Collapse in={errOpen}>
              <Alert sx={{ mb:2 }} severity="error">{loginMsg}</Alert>
            </Collapse>

            <div className="text-end mb-4">
              <Link className="pri-color" to="/forgot-password">
                Forgot password ?
              </Link>
            </div>

            <button className="btn-wrapper mx-auto text-center d-flex align-items-center justify-content-center">
              {loading ? (
                <span
                  class="spinner-border text-danger spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Log In"
              )}
              <div className="black-border-btn"></div>
              <div className="red-border-btn"></div>
            </button>

            <div className="text-center my-2">
              <span>new here?</span>{" "}
              <Link className="pri-color" to="/register">
                sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
