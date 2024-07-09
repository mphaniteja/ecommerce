import React, { useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import './CatItem.css'

const CatItemFW = ({_id,name,image,cost,description}) => {
   const {cartItems,addToCart,removeFromCart,url} =useContext(StoreContext);
   console.log(cartItems[_id])

  return (
    <div className='menu-item'>
        <div className='menu-item-img-container'>
            <img className='menu-item-image' src={url+"/images/"+image} alt='itemimages'height="250px" width="250px"></img>
            {!(cartItems[_id])
              ?<img  className='add'onClick ={()=>addToCart(_id)} src={`../../../imgassets/add_icon_white.png`} alt="add"></img>
              :<div className='menu-item-counter'>
                  <img onClick ={()=>removeFromCart(_id)} src={`../../../imgassets/remove_icon_red.png`} alt="remove"></img>
                  <p>{cartItems[_id]}</p>
                  <img onClick ={()=>addToCart(_id)} src={`../../../imgassets/add_icon_green.png`} alt="add"></img>
              </div>
            }
        </div>
        <div className='menu-item-info'>
            <div className='menu-item-name'>
              <p>{name}</p>
            </div>
            <p className='menu-item-price'>₹{cost}</p>   
        </div>
    </div>
  )
}

export default CatItemFW
