import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import ecomRouter from "./routes/ecomRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import 'dotenv/config.js'


//app config
const app=express()
const port=4000


//middleware-communicate between frontend and backend
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoint
app.use("/api/ecom",ecomRouter)
//making it available to the frontend
app.use('/images',express.static('uploads'))
//storing the login credentials of the user
app.use('/api/user',userRouter)
//cart details of particular user
app.use('/api/cart',cartRouter)
//to handle the order page
app.use('/api/order',orderRouter)

//http method to request the data from the server
app.get("/",(req,res)=>{
    res.send("API Working")
})

//the express will listen to the localhost through the port
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://btsruby:13061321@cluster0.dfdydfo.mongodb.net/?