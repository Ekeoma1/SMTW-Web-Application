import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'

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
import Layout from './Layout'
import { useSelector} from 'react-redux';
import Measurement from './pages/Measurement';


function App() {
  const isLoggedIn = useSelector((state)=> state.user.LoginSuccess) 
  console.log(isLoggedIn)

  const PrivateRoute = ()=> {
    return isLoggedIn ? <Outlet/> : <Navigate to="/login" />;
  }
  
  return (
    <Routes>
      <Route path='' element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path='category/:category' element={<Category/>} />
        <Route path='product' element={<Product/>} />
        <Route path='about' element={<About/>} />
        <Route  path="/" element={<PrivateRoute/>} >
          <Route path="cart" element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="create-measurement" element={<Measurement/>} />
        </Route>
      </Route>

      <Route path='login' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='forgot-password' element={<ForgotPassword/>} />
      <Route path='email-verify/:email' element={<EmailVerification/>} />
      <Route path="change-password" element={<ChangePassword/>}/>
      <Route path='test' element={<Test/>}/>
</Routes>
  );
}

export default App;
