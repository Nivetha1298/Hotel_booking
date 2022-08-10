"use strict";
exports.__esModule = true;
var express = require("express");
var room_1 = require("../controllers/room");
var verifyToken_1 = require("../utils/verifyToken");
var router = express.Router();
// create
router.post("/:hotelid", verifyToken_1.verifyAdmin, room_1.createRoom);
//  update
router.put("/:id", verifyToken_1.verifyAdmin, room_1.updateRoom);
//  Delete 
router["delete"]("/:id", verifyToken_1.verifyAdmin, room_1.deleteRoom);
// get by id
router.get("/:id", room_1.getroombyid);
// get all  
router.get("/", room_1.getroom);
exports["default"] = router;
//# sourceMappingURL=rooms.js.map