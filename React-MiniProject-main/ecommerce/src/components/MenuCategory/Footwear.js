import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CatItemFW from '../CategoryItem/CatItemFW'
import './Grocery.css'

const Footwear = () => {
    const {productList}=useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>Footwear</h2>
        <div className='item-display-list'>
            {productList.map((item,index)=>{
              if(item.category==='Footwear'){
                return <CatItemFW key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemFW>
              }     
            }
        )}
        </div>
    </div>
  )
}


export default Footwear
