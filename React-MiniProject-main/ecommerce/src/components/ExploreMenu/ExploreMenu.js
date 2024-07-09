import React from 'react'
import './ExploreMenu.css'
import { Link } from 'react-router-dom'


const ExploreMenu = ({category,setCategory})=> {
    const menu_list = [
        {
            id:1,
            name:'Beauty',
            img_src:'menu_5.jpg'
        },
        {
            id:2,
            name:'Electronics',
            img_src:'menu_3.jpg'
        },
        {
            id:3,
            name:'Fashion',
            img_src:'menu_2.jpg'
        },
        {
            id:4,
            name:'Footwear',
            img_src:'menu_1.jpg'
        },
        {
        id:5,
        name:'Grocery',
        img_src:'menu_4.jpg'
        }
    ]
  return (
    <div>
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our mart</h1>
            <p className='explore-menu-text'>Step into a realm of unparalleled convenience and luxury with our extensive selection. Discover the freshest produce sourced directly from local farms, immerse yourself in the latest advancements in electronics, and elevate your style with chic clothing and footwear options. Whether you're a culinary connoisseur seeking gourmet delights or a tech enthusiast craving innovation, our diverse menu caters to every aspect of your lifestyle, making shopping an indulgent experience like no other.</p>
            
            <div className='explore-menu-list'>
                {menu_list.map((item)=>{
                    return (<Link to={`/${item.name}`} key={item.id}><div className='explore-menu-list-item'>
                        <img src={`imgassets/${item.img_src}`} alt='menuimage' className={category===item.name?'active':''}></img>
                        <p>{item.name}</p>
                    </div></Link>)
                })}
            </div>
        </div>    
    </div>
  )
}

export default ExploreMenu
