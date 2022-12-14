import { Request, Response } from "express";
import User from "../models/User";
import { createError } from "../utils/error"; 
// *********************************************   CRUD CODE  for LOGIN  USERS***********************************************


// UPDATING A USER
export  const updateUser = async (req:Request,res:Response,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        next(err);
      }

} 
// DELETING A USER
export  const deleteUser = async (req:Request,res:Response,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }

}
// GET USER BY ID
export  const getUserbyid = async (req:Request,res:Response,next)=>{
    
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
      } catch (err) {
        next(err);
      }
}

// GET ALL USERS
export  const getUsers = async (req:Request,res:Response,next)=>{
   
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        next(err);
      }
    
    
}



