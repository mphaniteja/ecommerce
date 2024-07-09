import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CatItemB from '../CategoryItem/CatItemB'
import './Grocery.css'

const Beauty = () => {
    const {productList}=useContext(StoreContext)
    return (
      <div className='item-display' id='item-display'>
          <h2>Beauty</h2>
          <div className='item-display-list'>
              {productList.map((item,index)=>{
                if(item.category==='Beauty')
                {
                    return <CatItemB key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemB>
                }       
              }
          )}
          </div>
      </div>
    )
}

export default Beauty
