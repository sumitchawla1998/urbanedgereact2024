import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './user/pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserLogin from './user/pages/UserLogin'
import Products from './user/pages/Clothes'
import Contact from './user/pages/Contact'
import ProductDetails from './user/pages/ClothDetails'
import UserRegister from './user/pages/UserRegister'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Clothes from './user/pages/Clothes'
import ClothDetails from './user/pages/ClothDetails'
import Checkout from './user/pages/Checkout'
import Orders from './user/pages/Orders'
import About from './user/pages/About'
import { useUserStore } from './store/user'

function App() {
  let isloggedin = useUserStore((state) => state.isloggedin)

  return (
    <>

  <ToastContainer />
    <Routes>
     <Route path='/' element={<Home />} />
      <Route path='/userlogin' element={<UserLogin />} />
      <Route path='/userregister' element={<UserRegister />} />
      <Route path='/about' element={<About />} />
      <Route path='/clothes' element={<Clothes />} />
      <Route path='/clothes/:id' element={<ClothDetails /> } /> 
      <Route path='/checkout' element={ isloggedin ? <Checkout /> : <Navigate to="/userlogin" />  } /> 
      <Route path='/orders' element={ isloggedin ? <Orders /> :  <Navigate to="/userlogin" /> } /> 
      <Route path='/contact' element={<Contact /> } /> 
    </Routes>

    {/* <Orders /> */}

    </>
  )
}

export default App
