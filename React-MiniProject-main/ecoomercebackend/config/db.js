import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://btsruby:13061321@cluster0.dfdydfo.mongodb.net/MiniProject').then(()=>console.log("DB Connected"));

}