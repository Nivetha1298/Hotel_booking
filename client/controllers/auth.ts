import { Request, Response } from "express";
const bcrypt = require('bcryptjs');
import User from "../models/User";
import { createError } from "../utils/error";
const jwt =require('jsonwebtoken')

// Authentication for Register

export const  register = async(req:Request ,res:Response,next)=>{
    try{
                           //encrypting password
        const  salt = await bcrypt.genSaltSync(10);
        const  hash  =  await bcrypt.hashSync(req.body.password,salt)
             const  newUser = new User({
                username :req.body.username ,
                email :req.body.email ,
                password:hash ,
                isAdmin : req.body.isAdmin,
                img:req.body.img , 
                phone:req.body.phone ,
                city:req.body.city 

             })

             await newUser.save()
             res.status(200).send("User has been created")
           

    }  catch(err){
                             
    }

}

//Authentication for login
export const  login = async(req:Request ,res:Response,next)=>{
    try{


       const user:any = await User.findOne({username:req.body.username });
       if(!user)
       return next(createError(404 , "User not found"));
                       //decrypting the password
 const isPasswordCorrect=await bcrypt.compare(
    req.body.password     ,
    user.password
 );
       if(!isPasswordCorrect)
       return next(createError(400 , "Wrong password or username"));

       
          
      
    const token = jwt.sign({

        id: user._id,

        isAdmin:user.isAdmin,

      },process.env.JWT_KEY,{

        expiresIn:"2d"

      })
      const {password ,isAdmin , ...otherDetails}=user._doc;
       res.cookie("access_token" , token , {
        httpOnly:true ,
       } ).status(200).json({  details: {...otherDetails}  ,isAdmin});

    }  catch(err){
        next(err);

    }

}


