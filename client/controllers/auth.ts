import { Request, Response } from "express";
const bcrypt = require('bcryptjs');
import User from "../models/User";

export const  register = async(req:Request ,res:Response,next)=>{
    try{

        const  salt = bcrypt.genSaltSync(10);
        const  hash  = bcrypt.hashSync(req.body.password)
             const  newUser = new User({
                username :req.body.username ,
                email :req.body.email ,
                password:hash

             })

             await newUser.save()
             res.status(200).send("User has been created")
           

    }  catch(err){

    }

}
export const  login = async(req:Request ,res:Response,next)=>{
    try{

        const  salt = bcrypt.genSaltSync(10);
        const  hash  = bcrypt.hashSync(req.body.password)
             const  newUser = new User({
                username :req.body.username ,
                email :req.body.email ,
                password:hash

             })

             await newUser.save()
             res.status(200).send("User has been created")
           

    }  catch(err){

    }

}