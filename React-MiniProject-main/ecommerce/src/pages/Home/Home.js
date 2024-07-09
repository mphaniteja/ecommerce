import React from 'react'
import { useState, useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import CatItem from '../../components/CategoryItem/CatItem'
import CatItemB from '../../components/CategoryItem/CatItemB'
import CatItemE from '../../components/CategoryItem/CatItemE'
import CatItemF from '../../components/CategoryItem/CatItemF'
import CatItemFW from '../../components/CategoryItem/CatItemFW'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { StoreContext } from '../../context/StoreContext'

const Home = () => {
    const [category,setCategory]=useState('All')
    const {productList} = useContext(StoreContext)
    let count =0;
    let countE=0;
    let countF=0;
    let countFW=0;
    let countB=0;

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <div className='top-picks'> 
        <h2>Top picks for You!</h2>
            <div className='item-display' id='item-display'>
              <div className='item-display-list'>
                  {productList.map((item,index)=>{
                    if(item.category==='Grocery' && count<4)
                    {
                      count+=1;
                      return <CatItem  key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItem>
                    }    
                  }
              )}
              </div>
            </div> 
          <div className='item-display' id='item-display'>
            <div className='item-display-list'>
                  {productList.map((item,index)=>{
                    if(item.category==='Electronics'&& countE<4){
                      countE+=1;
                      return <CatItemE key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemE>
                    }  
                  }
              )}
            </div>
          </div>
          <div className='item-display' id='item-display'>
              <div className='item-display-list'>
                  {productList.map((item,index)=>{
                    if(item.category==='Fashion'&& countF<4)
                    {
                      countF+=1;
                      return <CatItemF key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemF>
                    }      
                  }
              )}
              </div>
          </div> 
          <div className='item-display' id='item-display'>
              <div className='item-display-list'>
                    {productList.map((item,index)=>{
                      if(item.category==='Beauty' && countB<4)
                      {
                          countB+=1;
                          return <CatItemB key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemB>
                      }       
                    }
                )}
                </div>
          </div>
          <div className='item-display' id='item-display'>
              <div className='item-display-list'>
                  {productList.map((item,index)=>{
                    if(item.category==='Footwear' && countFW<4){
                      countFW+=1;
                      return <CatItemFW key={index} _id={item._id} name={item.name} cost={item.cost} image={item.image}></CatItemFW>
                    }     
                  }
              )}
              </div>
          </div>
      </div>
    </div>   
  )
}

export default Home
