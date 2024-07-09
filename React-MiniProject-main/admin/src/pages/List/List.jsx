import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'
import './List.css'

const List = ({url}) => {

    const [list,setList]=useState([])

    const fetchList =async () =>{
        const response = await axios.get(`${url}/api/ecom/list`)
        console.log(response.data)

        if(response.data.success){
            setList(response.data.data);
        }
        else{
            toast.error('Cant fetch data')
        }
    }
    const removeItem = async(productId)=>{
        const response = await axios.post(`${url}/api/ecom/remove`,{id:productId})
        await fetchList();
        if(response.data.success){
        }
        else{
            toast.error(response.data.message)
        }
    }
    useEffect(()=>{
        fetchList();
    },[])
  return (
    <div className='list add flex-col'>
        <p>List of Products in Stock</p>
        <div className='list-table'>
            <div className='list-table-format title'>
                <b>Images</b>
                <b>Item Id</b>
                <b className="nameofpro">Product Name</b>
                <b className="nameofcat">Category</b>
                <b className="nameofprice">Price/Unit</b>
                <b>Action</b>
            </div>
            {list.map((item,index)=>{
                return (
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/`+item.image} alt="image" height="80px" width="80px"></img>
                        <p>{item._id}</p>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p> ₹{item.cost}</p>
                        <p onClick={()=>{removeItem(item._id)}} className='cursor'>X</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List
