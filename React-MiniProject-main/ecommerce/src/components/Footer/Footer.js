import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">

            <div className="footer-content-left">
                <img src='imgassets/logo.png'alt="logo"></img> 
                <p>Elevate Your Shopping Experience: Explore, Click, Delight!HD invites you to embark on a journey where every click leads to discovery. Dive into a vast array of products, explore curated collections, and with each click, find delight in seamless transactions and unparalleled customer satisfaction. Elevate your shopping to new heights today!</p>
                <div className="footer-social-icons">
                    <img src='imgassets/facebook_icon.png'  alt="facebook"></img>
                    <img src='imgassets/linkedin_icon.png' alt="linkedin"></img>
                    <img src='imgassets/twitter_icon.png' alt="twitter"></img>
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul> 
            </div>
            
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8072662921</li>
                    <li>contact-devatharshini91@gmail.com</li>
                </ul> 
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright @{new Date().getFullYear()}All rights reserved!</p>
    </div>
  )
}

export default Footer
