import mongoose from "mongoose";

const ecomSchema= new mongoose.Schema({
    name:{type:String,required:true},
    cost:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})


const ecomModel = mongoose.models.ecommerce || mongoose.model('ecommerce',ecomSchema)


export default ecomModel;