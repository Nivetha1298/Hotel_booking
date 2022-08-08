import * as express from "express"
import { Request, Response } from 'express';
import { createHotel, deleteHotel, gethotel, gethotelbyid, updateHotel } from "../controllers/hotel";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error";

const router =express.Router();
// create
 router.post("/"  , createHotel ) 
   

  
 

//  update
 router.put("/:id"  ,updateHotel)

//  Delete 
router.delete("/:id" ,deleteHotel)
// get by id
router.get("/:id" ,gethotelbyid)

// get all  
router.get("/" ,gethotel);
 




 export default router