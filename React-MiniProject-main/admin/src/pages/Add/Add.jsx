import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'


const Add = ({url}) => {

    const [image,setImage]=useState(false)
    const [data,setData]=useState({
        name:'',
        cost:'',
        category:''
    })

    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler= async(e)=>{
        e.preventDefault();

        const formdata=new FormData();
        formdata.append('name',data.name)
        formdata.append('cost',data.cost)
        formdata.append('category',data.category)
        formdata.append('image',image)

        const response = await axios.post(`${url}/api/ecom/add`,formdata); 
        if(response.data.success){
            setData({
                name:'',
                cost:'',
                category:''
            })
            setImage(false) 
            toast.success(response.data.message)     
        }
        else{
            toast.error(response.data.message)
        }
    }


  return (
    <div  className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex-col'> 
                <p>Upload Image</p>
                <label htmlFor='image'>
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt=""></img>
                </label>
                <input onChange={(e)=>{setImage(e.target.files[0])}}type="file" id="image" hidden required></input>
            </div>
            <div className='add-product-name flex-col'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Product Name' required></input>
            </div>
            <div className='add-category-price'>
                <div className='add-category flex-col'>
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} value={data.category} name='category'>
                        <option value=''disabled>Select a category</option>
                        <option value='Grocery'>Grocery</option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Fashion'>Fashion</option>
                        <option value='Beauty'>Beauty</option>
                        <option value='Footwear'>Footwear</option>
                    </select>
                </div>
                <div className='add-price flex-col'>
                    <p>Product Price</p>
                    <input  onChange={onChangeHandler} value={data.cost} type="Number" name="cost" placeholder='INR 0' required></input>
                </div>
            </div>
            <button type='submit' className='add-button'>Add</button>
        </form> 
    </div>
  )
}

export default Add
