import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home');

    const {getTotalCartAmount,token,setToken} =useContext(StoreContext);

    const navigate=useNavigate()

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('');
        navigate('/')
    }

  return (
    <div className='navbar' id='navbar'>
        <div className='navbar-content'>
            <div className='navbar-left'>
                    <Link to='/'><img src='/imgassets/logo.png' className ='logo' alt='logoimg'></img></Link>
                    <div class="overlay">
                        <p class="text">MART</p>
                    </div>
            </div>
            <div className='navbar-center'>
                <ul className='navbar-menu'>
                    <Link  to ='/'onClick={()=> setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
                    <a href="#explore-menu" onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>About Us</a>
                    <Link  to ='/Beauty'onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Beauty</Link>
                    <Link  to ='/Electronics'onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Electronics</Link>
                    <Link  to ='/Fashion'onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Fashion</Link>
                    <Link  to ='/Footwear'onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Footwear</Link>
                    <Link  to ='/Grocery'onClick={()=> setMenu('menu')} className={menu==='menu'?'active':''}>Grocery</Link>
                    <a  href="#footer" onClick={()=> setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
                </ul>
            </div>      
        
            <div className='navbar-right'>
                <div className='navbar-cart-icon'>
                    <Link to='/cart'><img src="/imgassets/basket_icon.png" alt="basketicon" height="40px" width="40px"/></Link>
                    <div className={getTotalCartAmount()===0?'':'dot'}></div>
                </div>
                {/* Logout Login made dynamic */}
                {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
                :
                <div className='navbar-profile'>
                    <img src='/imgassets/profile_icon.png' alt="profileicon" height="40px" width="40px"></img>
                    <ul className='nav-profile-dropdown'>
                        <li onClick={()=>navigate("/myorders")}><img src='/imgassets/bag_icon.png' alt='bagicon'></img><p>Order</p></li>
                        <hr/>
                        <li onClick={logout}><img src='/imgassets/logout_icon.png' alt='logouticon'></img><p>Logout</p></li>
                    </ul>
                </div>}
            </div> 
        </div>    
    </div>
  )
}

export default Navbar
