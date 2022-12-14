"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.getHotelRooms = exports.gethotel = exports.gethotelbyid = exports.deleteHotel = exports.updateHotel = exports.createHotel = void 0;
var Hotel_1 = require("../models/Hotel");
var Room_1 = require("../models/Room");
// *********************************************   CRUD CODE    for hotel ***********************************************
// Creating a hotel
var createHotel = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var newHotel, savedHotel, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newHotel = new Hotel_1["default"](req.body);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, newHotel.save()];
            case 2:
                savedHotel = _a.sent();
                res.status(200).json(savedHotel);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                next(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createHotel = createHotel;
// Update a hotel
var updateHotel = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var updateHotel_1, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.body);
                return [4 /*yield*/, Hotel_1["default"].findByIdAndUpdate(req.params.id, { $set: req.body }, { "new": true })];
            case 1:
                updateHotel_1 = _a.sent();
                res.status(200).json(updateHotel_1);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateHotel = updateHotel;
// delete a hotel
var deleteHotel = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Hotel_1["default"].findByIdAndDelete(req.params.id)];
            case 1:
                _a.sent();
                res.status(200).json("Hotel has been deleted");
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteHotel = deleteHotel;
// getting a hotel by id
var gethotelbyid = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hotel, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Hotel_1["default"].findById(req.params.id)];
            case 1:
                hotel = _a.sent();
                res.status(200).json(hotel);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.gethotelbyid = gethotelbyid;
// get all hotels
var gethotel = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, min, max, others, hotels, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("hello");
                _a = req.query, min = _a.min, max = _a.max, others = __rest(_a, ["min", "max"]);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Hotel_1["default"].find(__assign({}, others))];
            case 2:
                hotels = _b.sent();
                res.status(200).json(hotels);
                return [3 /*break*/, 4];
            case 3:
                err_5 = _b.sent();
                next(err_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.gethotel = gethotel;
// getrooms 
var getHotelRooms = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var hotel, list, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, Hotel_1["default"].findById(req.params.id)];
            case 1:
                hotel = _a.sent();
                return [4 /*yield*/, Promise.all(hotel.rooms.map(function (room) {
                        return Room_1["default"].findById(room);
                    }))];
            case 2:
                list = _a.sent();
                res.status(200).json(list);
                return [3 /*break*/, 4];
            case 3:
                err_6 = _a.sent();
                next(err_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getHotelRooms = getHotelRooms;
//# sourceMappingURL=hotel.js.map