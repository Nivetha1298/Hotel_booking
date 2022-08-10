"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var RoomSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }]
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("Room", RoomSchema);
//# sourceMappingURL=Room.js.map