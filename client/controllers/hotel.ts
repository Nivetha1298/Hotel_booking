import { Request, Response } from "express";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import Hotel from "../models/Hotel";
import Room from "../models/Room";
import { createError } from "../utils/error";
// *********************************************   CRUD CODE    for hotel ***********************************************

// Creating a hotel
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

// Update a hotel
export  const updateHotel = async (req:Request,res:Response,next)=>{
    try{
        console.log(req.body)
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id  ,{$set:req.body} , {new:true})
        res.status(200).json(updateHotel)
    
       }
       catch(err){
    
        res.status(500).json(err)
       }

} 
// delete a hotel
export  const deleteHotel = async (req:Request,res:Response,next)=>{
    try{
        const currentHotel = await Hotel.findById(req.params.id)
        console.log("del",currentHotel)
        currentHotel.rooms.forEach(async(e) =>{
            await Room.findByIdAndDelete(e)
            // console.log("rooms",e)
        })
         await Hotel.findByIdAndDelete(req.params.id);
        return  res.status(200).json("Hotel has been deleted");
 }
 catch(err){

     res.status(500).json(err)
    }

}
// getting a hotel by id
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

// get all hotels
export  const gethotel = async (req:Request,res:Response,next)=>{
    console.log("hello");
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
       
      })
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
    
}

// getrooms 
export const getHotelRooms =  async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(

           hotel.rooms.map((room)=>{
              return Room.findById(room);
           })
        );
        res.status(200).json(list)
    }
    catch(err){
        next(err);
    }
}   







