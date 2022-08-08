"use strict";
exports.__esModule = true;
var express = require("express");
var hotel_1 = require("../controllers/hotel");
var router = express.Router();
// create
router.post("/", hotel_1.createHotel);
//  update
router.put("/:id", hotel_1.updateHotel);
//  Delete 
router["delete"]("/:id", hotel_1.deleteHotel);
// get by id
router.get("/:id", hotel_1.gethotelbyid);
// get all  
router.get("/", hotel_1.gethotel);
exports["default"] = router;
//# sourceMappingURL=hotels.js.map