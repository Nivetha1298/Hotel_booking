const jwt =require('jsonwebtoken')
import { Request, Response } from "express"
import User from "../models/User";
import  {createError}from "../utils/error"
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, "You are not authenticated!"));
    }
  
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (err) return next(createError(403, "Token is not valid!"));
      req.user = user;
      next();
    });
  };

  export const verifyUser = (req, res, next) => {
    verifyToken(req, res,() => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
      }
    });
  };
  export const verifyAdmin = async(req, res, next) => {
  
    verifyToken(req, res, async () => {
      const isadmin = req.headers.userss;
      const _id = JSON.parse(isadmin)._id
      console.log(isadmin);
      const isAdmin= (await User.findById(_id)).isAdmin
    
      if (isAdmin) {
        next();
      } else {
        return next(createError(403, "You are not authorized!"));
       }
    });
  };