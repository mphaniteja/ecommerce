import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CatItemF from '../CategoryItem/CatItemF'
import './Grocery.css'


const Fashion = () => {
    const {productList}=useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>Fashion</h2>
        <div className='item-display-list'>
            {productList.map((item,index)=>{
              if(item.category==='Fashion')
              {
                return <CatItemF key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemF>
              }      
            }
        )}
        </div>
    </div>
  )
}

export default Fashion
