import mongoose from "mongoose";

// DATABASE FOR USERS
const UserSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          // required: true,
          unique: true,
        },
        email: {
          type: String,
          // required: true,
          unique: true,
        },
       
        img: {
          type: String,
        },
        city: {
          type: String,
       
        },
        phone: {
          type: String,
          
        },
        password: {
          type: String,
          // required: true,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
      },
  

{timestamps : true}



);

export default mongoose.model("User" ,UserSchema)

