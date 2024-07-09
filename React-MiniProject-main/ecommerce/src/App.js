import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Grocery from './components/MenuCategory/Grocery'
import Electronics from './components/MenuCategory/Electronics'
import Fashion from './components/MenuCategory/Fashion'
import Beauty from './components/MenuCategory/Beauty'
import Footwear from './components/MenuCategory/Footwear'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import OrderConfirmation from './pages/Confirmation/OrderConfirmation'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <ToastContainer/>
      <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/'  element={<Home/>}></Route>
          <Route path='/Grocery' element={<Grocery/>}> </Route>
          <Route path='/Electronics' element={<Electronics/>}> </Route>
          <Route path='/Fashion' element={<Fashion/>}> </Route>
          <Route path='/Beauty' element={<Beauty/>}> </Route>
          <Route path='/Footwear' element={<Footwear/>}> </Route>
          <Route path='/cart' element={<Cart setShowLogin={setShowLogin}/>}></Route>
          <Route path='/order'  element={<PlaceOrder/>}></Route>
          <Route path='/verify'  element={<Verify/>}></Route>
          <Route path='/myorders'  element={<MyOrders/>}></Route>
          <Route path='/confirmation'  element={<OrderConfirmation/>}></Route>
        </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App

