import * as express from "express"
import { Request, Response } from 'express';
import { createHotel, deleteHotel, gethotel, gethotelbyid, updateHotel } from "../controllers/hotel";
import Hotel from "../models/Hotel";
import { createError } from "../utils/error";
import { verifyAdmin } from "../utils/verifyToken";

const router =express.Router();
// create
 router.post("/"  ,verifyAdmin, createHotel ) 
   

  
 

//  update
 router.put("/:id"  ,  verifyAdmin ,updateHotel)

//  Delete 
router.delete("/:id" ,  verifyAdmin , deleteHotel)
// get by id
router.get("/:id" ,gethotelbyid)

// get all  
router.get("/" ,gethotel);
 




 export default router