import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CatItemE from '../CategoryItem/CatItemE'
import './Grocery.css'

const Electronics = () => {
    const {productList}=useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>Electronics</h2>
        <div className='item-display-list'>
            {productList.map((item,index)=>{
              if(item.category==='Electronics'){
                return <CatItemE key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemE>
              }  
            }
        )}
        </div>
    </div>
  )
}

export default Electronics
