"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
// DATABASE FOR USERS
var UserSchema = new mongoose_1["default"].Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        "default": false
    }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].model("User", UserSchema);
//# sourceMappingURL=User.js.map