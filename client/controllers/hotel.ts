import { Request, Response } from "express";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error";
// *********************************************   CRUD CODE ***********************************************
export  const createHotel = async (req:Request,res:Response,next)=>{
    const  newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    
       }
       catch(err){
    
        next(err);
       }

}


export  const updateHotel = async (req:Request,res:Response,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id  ,{$set:req.body} , {new:true})
        res.status(200).json(updateHotel)
    
       }
       catch(err){
    
        res.status(500).json(err)
       }

} 

export  const deleteHotel = async (req:Request,res:Response,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
 }
 catch(err){

     res.status(500).json(err)
    }

}

export  const gethotelbyid = async (req:Request,res:Response,next)=>{
    
    try {
        const  hotel =await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    }
    catch(err){
        res.status(500).json(err)
    }
}


export  const gethotel = async (req:Request,res:Response,next)=>{
   
    try {
     const  hotels =await Hotel.find();
     res.status(200).json(hotels);
 }
 catch(err){
    //  res.status(500).json(err)
    next(err)
 }
    
    
}



