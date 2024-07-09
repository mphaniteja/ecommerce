import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="logoimage" height="50px" width="50px"></img>
        <img className='profile' src={assets.profile_image} alt="profile" height="40px" width="40px"></img>
      
    </div>
  )
}

export default Navbar
