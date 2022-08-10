"use strict";
exports.__esModule = true;
var express = require("express");
var user_1 = require("../controllers/user");
var verifyToken_1 = require("../utils/verifyToken");
var router = express.Router();
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
router.put("/:id", verifyToken_1.verifyUser, user_1.updateUser);
//  Delete 
router["delete"]("/:id", verifyToken_1.verifyUser, user_1.deleteUser);
// get by id
router.get("/:id", verifyToken_1.verifyUser, user_1.getUserbyid);
// get all  
router.get("/", verifyToken_1.verifyAdmin, user_1.getUsers);
exports["default"] = router;
//# sourceMappingURL=users.js.map