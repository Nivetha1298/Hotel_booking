import * as express from "express"
import { Request, Response } from 'express';
import { createRoom, deleteRoom, getroom, getroombyid, updateRoom } from "../controllers/room";


import { verifyAdmin } from "../utils/verifyToken";

const router =express.Router();
// create
 router.post("/:hotelid"  ,verifyAdmin, createRoom ) 
   

  
 

//  update
 router.put("/:id"  ,  verifyAdmin ,updateRoom)

//  Delete 
router.delete("/:id/:hotelid" ,  verifyAdmin , deleteRoom)
// get by id
router.get("/:id" ,getroombyid)

// get all  
router.get("/" ,getroom);
 




 export default router