import React from 'react'
import './OrderConfirmation.css'
import { useNavigate } from 'react-router-dom'

const OrderConfirmation = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='order-confirmation'>
        <p>Your order is Shipped!</p>
        <p>Expected Delivery in 2 Working Days!</p>
    </div>
    <button className='backbutton'onClick={()=>navigate('/myorders')}>Back to my Orders!</button>
    </>
  )
}

export default OrderConfirmation
