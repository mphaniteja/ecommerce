import React, { useContext} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useState} from 'react'
import axios from 'axios'

const PlaceOrder = () => {

  const {getTotalCartAmount,token,cartItems,productList,url} =useContext(StoreContext)

    const [data,setData] =useState({
      firstName:'',
      lastName:'',
      email:'',
      street:'',
      city:'',
      state:'',
      zipcode:'',
      country:'',
      phone:''

    })

    const onChangeHandler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData(data =>({...data,[name]:value}))

    }

    const placeOrder =async(e)=>{
      e.preventDefault();
      let orderItems =[];
      productList.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo =item;
          itemInfo["quantity"] = cartItems[item._id]
          orderItems.push(itemInfo)
        }
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+100,
      }
      let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      if (response.data.success){
        const {session_url} = response.data;
        window.location.replace(session_url);
      }
      else{
        console.log('error in payment')
      }
    }
  
  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='place-order-left-title'>Delivery Information</p>
          <div className='form-container'>
            <label htmlfor="firstname">FirstName</label>
            <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text"  required></input>
          </div>
          <div className='form-container'>
            <label htmlfor="lastname">LastName</label>
            <input name='lastName' onChange={onChangeHandler}  value={data.lastName} type="text" required></input>
          </div>
          <div className='form-container'>
            <label htmlfor="email">Email</label>
            <input name='email' onChange={onChangeHandler}  value={data.email}  type="email" required></input>
          </div>
        <div className='form-container'>
            <label htmlfor="street">Street</label>
            <input name='street' onChange={onChangeHandler}  value={data.street} type="text" required></input>
        </div>
        <div className='form-container'>
            <label htmlfor="city">City</label>
            <input name='city' onChange={onChangeHandler}  value={data.city} type="text" required></input>
        </div>
        <div className='form-container'>
            <label htmlfor="state">State</label>
            <input name='state' onChange={onChangeHandler}  value={data.state} type="text" required></input>
        </div>
        <div className='form-container'>
            <label htmlfor="zipcode">Zipcode</label>
            <input name='zipcode' onChange={onChangeHandler}  value={data.zipcode} type="text" required></input>
        </div>
        <div className='form-container'>
            <label htmlfor="country">Country</label>
            <input name='country' onChange={onChangeHandler}  value={data.country} type="text" required></input>
        </div>
        <div className='form-container'>
          <label htmlfor="phone">Phone</label>
          <input name='phone' onChange={onChangeHandler}  value={data.phone} type="number" required></input>
        </div>   
      </div>
      <div className='place-order-right'>
        <div className='cart-total'>
            <h2>Cart Total</h2>
            <div>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>₹{getTotalCartAmount()===0?0:100}</p>
                </div>
                <hr/>
                <div className='cart-total-details'>
                  <p>Total</p>
                  <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+100}</p>
                </div>
              </div>
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div> 
      </div> 
    </form>
  )
}

export default PlaceOrder
