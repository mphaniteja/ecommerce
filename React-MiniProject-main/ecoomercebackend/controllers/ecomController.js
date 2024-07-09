import ecomModel from "../models/ecomModel.js";
import fs from 'fs';


//add ecom items


const addEcom = async(req,res)=>{

        let image_filename=`${req.file.filename}`;

        const ecom = new ecomModel({
            name:req.body.name,
            cost:req.body.cost,
            category:req.body.category,
            image:image_filename
        })
        try{
            await ecom.save();
            res.json({success:true,message:"Item Added"})
        }
        catch(error){
            console.log(error)
            res.json({success:false,message:"Error"})
        }
}

//all the list in website

const listEcom=async(req,res)=>{
    try{
        const ecoms=await ecomModel.find({})
        res.json({success:true,data:ecoms})
    }catch(error){
        console.log('Error')
        res.json({success:false,message:"Error"})
    }

}

//remove the item from ecom

const removeEcom=async(req,res) =>{
    try{
        const ecom = await ecomModel.findById(req.body.id);
        //deletes the image from the upload folder
        fs.unlink(`uploads/${ecom.image}`,()=>{})
        //deletes the data from mongodb
        await ecomModel.findByIdAndDelete(req.body.id);

        res.json({success:true,message:'Item Removed'})

    }catch(error){
        console.log('Error')
        res.json({success:false,message:"Error"})
    }

}


export {addEcom,listEcom,removeEcom}