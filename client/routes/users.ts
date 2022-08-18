import * as express from "express"
import { Request, Response } from 'express';
import{ deleteUser, getUserbyid, getUsers, updateUser }from "../controllers/user"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const router =express.Router();

// ROUTING FOR USERS
 //  update
 router.put("/:id"  ,  verifyUser ,updateUser)

//  Delete 
router.delete("/:id" ,   verifyUser ,deleteUser)
// get by id
router.get("/:id" ,    verifyUser ,getUserbyid)

// get all  
router.get("/"   , verifyAdmin ,getUsers);
 


 export default router