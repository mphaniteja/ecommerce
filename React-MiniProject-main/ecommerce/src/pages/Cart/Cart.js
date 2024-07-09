import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = ({setShowLogin}) => {
  const {cartItems,productList,removeFromCart,getTotalCartAmount,url,token,addToCart,deleteFromCart}=useContext(StoreContext)
  const navigate= useNavigate();

  const RequireLogin =()=>{  
    if(!token){
      alert('Login to Purchase Product!')
      setShowLogin(true)
    }
    else{ 
      navigate('/order')
    }

  }
 
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Category</p>
          <p>Total</p>
          <p>Actions</p>
        </div>
        <br/>
        <hr/>
        {productList.map((item,index) =>{
          if(cartItems[item._id]>0){ 
             return (
              <React.Fragment key={item._id}>
              <div className='cart-items-title cart-items-item'>
                <img src={url+"/images/"+item.image} alt='itemimage'></img>
                <p>{item.name}</p>
                <p>₹{item.cost}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.category}</p>
                <p>₹{item.cost * cartItems[item._id]}</p>
                <p className='actionbuttons'>
                <img className='add' onClick ={()=>removeFromCart(item._id)} src={`../../../imgassets/remove_icon_red.png`} alt="remove" ></img>
                <img className='remove' onClick ={()=>addToCart(item._id)} src={`../../../imgassets/add_icon_green.png`} alt="add"></img>
                <img className='delete' onClick={()=>deleteFromCart(item._id)}src={'../../../imgassets/delete_icon.png'} alt="delete"></img>
                </p>  
              </div>
              <hr/>
              </React.Fragment>      
             )
        }})}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2 className='cart-total-title'>Cart Total</h2>
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
          <button onClick={RequireLogin}>PROCEED TO CHECKOUT</button>
        </div> 
        <div class='cart-promocode'>
          <div>
            <p>If you have a promo code,Enter it here!</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code'></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
