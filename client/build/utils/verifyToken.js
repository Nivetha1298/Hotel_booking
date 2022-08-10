"use strict";
exports.__esModule = true;
exports.verifyAdmin = exports.verifyUser = exports.verifyToken = void 0;
var jwt = require('jsonwebtoken');
var error_1 = require("../utils/error");
var verifyToken = function (req, res, next) {
    var token = req.cookies.access_token;
    if (!token) {
        return next((0, error_1.createError)(401, "You are not authenticated!"));
    }
    jwt.verify(token, process.env.JWT_KEY, function (err, user) {
        if (err)
            return next((0, error_1.createError)(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};
exports.verifyToken = verifyToken;
var verifyUser = function (req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return next((0, error_1.createError)(403, "You are not authorized!"));
        }
    });
};
exports.verifyUser = verifyUser;
var verifyAdmin = function (req, res, next) {
    (0, exports.verifyToken)(req, res, function () {
        if (req.user.isAdmin) {
            next();
        }
        else {
            return next((0, error_1.createError)(403, "You are not authorized!"));
        }
    });
};
exports.verifyAdmin = verifyAdmin;
//# sourceMappingURL=verifyToken.js.map