import express from 'express';
import { addEcom,listEcom,removeEcom } from '../controllers/ecomController.js';
import multer from 'multer'


const ecomRouter = express.Router();

//Image Storage Enginer---Upload folder
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload =multer({storage:storage})

ecomRouter.post('/add',upload.single("image"),addEcom)
ecomRouter.get('/list',listEcom)
ecomRouter.post('/remove',removeEcom)


export default ecomRouter;