import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './Store'

// pages
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Category from './pages/Category'
import Product from './components/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Test from './pages/test';
import ForgotPassword from './pages/ForgotPassword';
import EmailVerification from './pages/ForgotPassword/EmailVerification';
import ChangePassword from './pages/ForgotPassword/ChangePassword';
import Checkout from './pages/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
        <Route path='' element={<App />} >
          <Route index element={<Home/>} />
          <Route path='category/:category' element={<Category/>} />
          <Route path='product' element={<Product/>} />
          <Route path='about' element={<About/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>

        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='forgot-password' element={<ForgotPassword/>} />
        <Route path='email-verify/:email' element={<EmailVerification/>} />
        <Route path="change-password" element={<ChangePassword/>}/>
        <Route path='test' element={<Test/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
