import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios'


export const StoreContext= createContext(null)

const StoreContextProvider =(props) =>{
    
    const [cartItems,setCartItems]=useState({});

    const [productList,setProductList]=useState([])

    //giving the url for backend
    //To receive the token sent by the backend
    const url ='http://localhost:4000'
    const[token,setToken]=useState('');

    const addToCart=  async (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))

        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        //sending the items in the cart to the backend.
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart= async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        //Removing the items from the cart to the backend.
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }

    const deleteFromCart= async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]=0}))
        //Deleting the items from the cart to the backend.
        if(token){
            await axios.post(url+"/api/cart/delete",{itemId},{headers:{token}})
        }
    }
    

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0)
            {  
                const itemInfo= productList.find((product)=>product._id===item)
                totalAmount+=itemInfo.cost * cartItems[item];
            }
        }
        return totalAmount;
    }
    const fetchProductList=async()=>{
        const response = await axios.get(url+"/api/ecom/list")
        setProductList(response.data.data)
        
    }
    //To prevent the cart from removing items when the page reloads but still the user is logged in
    const loadCartData = async (token)=>{
        const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }

    useEffect(()=>{
       async function loadData(){
        await fetchProductList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"))
       }
       }
       loadData();
    },[])

    const contextValue={
        url,token,
        setToken,
        productList,
        setProductList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;