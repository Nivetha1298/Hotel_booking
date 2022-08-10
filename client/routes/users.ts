import * as express from "express"
import { Request, Response } from 'express';
import{ deleteUser, getUserbyid, getUsers, updateUser }from "../controllers/user"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken";

const router =express.Router();

// router.get("/checkauthentication" , verifyToken ,(req:Request,res:Response,next)=>{
//    res.send("You are logged in ")
// })

// router.get("/checkuser/:id" , verifyUser,(req:Request,res:Response,next)=>{
//    res.send(" Hello user ,You are logged in  and you can delete your account")
// })
// router.get("/checkadmin/:id" , verifyAdmin ,(req:Request,res:Response,next)=>{
//    res.send(" Hello admin ,You are logged in  and you can delete all account")
// })

 //  update
 router.put("/:id"  ,  verifyUser ,updateUser)

//  Delete 
router.delete("/:id" ,   verifyUser ,deleteUser)
// get by id
router.get("/:id" ,    verifyUser ,getUserbyid)

// get all  
router.get("/"   , verifyAdmin ,getUsers);
 


 export default router