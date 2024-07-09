import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import CatItem from '../CategoryItem/CatItem'
import './Grocery.css'

const Grocery = () => {
    const {productList} = useContext(StoreContext)
  return (
    <div className='item-display' id='item-display'>
        <h2>Grocery</h2>
        <div className='item-display-list'>
            {productList.map((item,index)=>{
              if(item.category==='Grocery')
              {
                return <CatItem  key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItem>
              }    
            }
        )}
        </div>
    </div>
  )
}

export default Grocery
