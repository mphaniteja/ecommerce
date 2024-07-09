import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import 'dotenv/config.js'


//creating a function which genrates token by taking the user ID 
const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//login user
const loginUser = async (req,res)=>{
    const {email,password} =req.body;
    try{
        const user = await userModel.findOne({email})
    
        if(!user){
            return res.json({success:false,message:"User Doesn't exists!"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid Password!"})
        }
        //creating a token and sending it as a response
        const token = createToken(user._id);
        res.json({success:true,token,message:"Logged In Successfully!"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:'error'})

    }

}


//register user
const registerUser = async (req,res)=>{
    const {name,password,email}=req.body;
    try{
        //checking if the user already exists
        const exists = await userModel.findOne({email})
        if(exists)
        {
            return res.json({success:false,message:"User Already exists!"})
        }
        
        //validating email format & strong password
        if(!validator.isEmail(email))
        {
            return res.json({success:false,message:"Please enter a valid Email!"})
        }
        if(password.length < 8){
            return res.json({success:false,message:"Please enter a Strong Password"})
        }

        //encrypting and hashing the user password
        //genSalt range is 5-15
        const salt = await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        
        //storing the successfully created user detail
        const user = await newUser.save()

        //creating a token 
        const token=createToken(user._id)
        res.json({success:true,token,message:"Registered and Logged In Successfully!"})

    }catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }

}

export {loginUser,registerUser}