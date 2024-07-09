import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyOrders = () => {
    //fetch all the order history of user
    const [data,setData] = useState([]);
    const {url,token} =useContext(StoreContext)
    const navigate = useNavigate()

    const fetchOrders = async() =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        console.log(response.data.data)
    }
    //whenever the token gets updated the fetchOrders function will run
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className='container'>
        {data.map((order,index)=>{
            return(
                <div key={index} className='my-orders-list'>
                    <img src='/imgassets/parcel_icon.png' alt="parcel_icon"></img>
                    <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+ " x " + item.quantity
                        }
                        else{
                            return item.name+ " x " + item.quantity+","
                        }
                    })}</p>
                    <p>INR {order.amount}.00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span>&#x25cf;</span><b>{order.status}</b></p>
                    <button onClick={()=>navigate("/confirmation")}>Track Order</button>
                </div>
            )
        })}

        </div>
      
    </div>
  )
}

export default MyOrders
