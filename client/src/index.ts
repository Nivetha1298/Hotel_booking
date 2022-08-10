

import * as express from "express"
import  * as dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "../routes/auth"
import usersRoute from "../routes/users"
import hotelsRoute from "../routes/hotels"
import roomsRoute from "../routes/rooms"
var cookieParser = require('cookie-parser')
const bodyparser = require("body-parser");


const app:express.Application =express();
app.use(bodyparser.urlencoded({extended:true}))

dotenv.config()

const url :string = process.env.MONGO

   const connect=async()=>{
    try{
     mongoose.connect(url );
     console.log("connected to mongodb")

}catch(error){
handleError(error);
}}
// to save jwt token in cookie
app.use(cookieParser())
// middleware to connect mongo
app.use(express.json())


// middleware
app.use("/api/auth" , authRoute);
app.use("/api/users" , usersRoute);
app.use("/api/hotels" , hotelsRoute);
app.use("/api/rooms" , roomsRoute);
// Error handling using middleware
app.use((err ,req ,res,next)=>{
    const errorStatus:any = err.status || 500 
    const  errorMessage:any = err.message || "Some thing went wrong"
return  res.status(errorStatus).json({
    success : false ,
    status :errorStatus ,
    message :errorMessage ,
    stack :err.stack ,
})
}
)





mongoose.connection.on("disconnected" ,()=>{
    console.log("mongo disconnected"); 
})



   


app.listen(8000,() =>{
    connect()

    console.log(" connected backend ");

})

function handleError(error: any) {
    throw new Error("Function not used.");
}
