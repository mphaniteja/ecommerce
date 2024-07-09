import React, { useContext } from 'react'
import { useState, useEffect} from 'react'
import './Login.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const Login = ({setShowLogin}) => {
    //data used in frontend
    const [currState,setCurrState]=useState('Login')

    const {url,setToken} = useContext(StoreContext)

    //data which is stored inorder to sent to backend
    const [data,setData]=useState({
        name:'',
        email:'',
        password:''

    })
    useEffect(()=>{
        console.log(data)
    },[data])

    const onChangeHandler=(e)=>{
        const name= e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    }


    //function for backend
    const onLogin = async(e)=>{
        e.preventDefault();
        let newUrl=url;
        if(currState==='Login'){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response = await axios.post(newUrl,data);
        //if successfully logged in then store the token
        if(response.data.success){
            setToken(response.data.token);
            //storing it locally
            localStorage.setItem("token",response.data.token)
            alert(response.data.message)
            //hide the login after logged in 
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }

    }



  return (  
    <div className='login-popup'>
            <form onSubmit={onLogin}className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src='imgassets/cross_icon.png' alt=""></img>
                </div>
                <div className='login-popup-inputs'>
                    {currState==='Login'?<></>:
                    <div className='login-container'>
                        <label htmlfor="name">Name</label>
                        <input  name="name" onChange={onChangeHandler} value={data.name} type='text' placeholder='Your Name' required/>
                    </div>}
                    <div className='login-container'>
                        <label htmlfor="email">Email</label>
                        <input  name="email" onChange={onChangeHandler} value={data.email} type='email' placeholder='Your Email' required/>
                    </div>
                    <div className='login-container'>
                        <label htmlfor="password">Password</label>
                        <input  name="password" onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required/>
                    </div>
                </div>
                <button type='submit'>{currState==='Sign Up'?'Create Account':'Login'}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required></input>
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {currState==='Login'
                ?<p>Create a new Account?<span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>:<p>Already have an Account?<span onClick={()=>setCurrState('Login')}>Login here</span></p>}

            </form>
    </div>
  )
}

export default Login
