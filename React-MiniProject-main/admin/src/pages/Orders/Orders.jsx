import React, { useEffect } from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Orders = ({url}) => {
  const [orders,setOrders]=useState([]);

  const fetchAllOrders = async () =>{
      const response = await axios.get(url+"/api/order/list");
      if(response.data.success){
        setOrders(response.data.data)
        console.log(response.data.data)
      }
      else{
        toast.error("Can't fetch the order list")
      }
  }
  useEffect(()=>{
    fetchAllOrders();
  },[])
  return (
    <div className='list add flex-col'>
        <p>List of Orders</p>
        <div className='list-table'>
          <div className='list-table-format title'>
              <b>Customer Id</b>
              <b>Name</b>
              <b>Address</b>
              <b>No.of.Orders</b>
              <b>Date</b>
              <b>Order Status</b>  
          </div>
          {orders.map((item,index)=>{
              return (
                  <div key={index} className='list-table-format'>
                      <p>{item.userId}</p>
                      <p>{item.address.firstName} {item.address.lastName}</p>
                      <p>{item.address.street},{item.address.city},{item.address.state}-{item.address.zipcode}</p>
                      <p>{item.items.length}</p>
                      <p>{item.date}</p>
                      <p>{item.status}</p>
                  </div>
              )
          })}
      </div>
    </div>
  )
}

export default Orders
