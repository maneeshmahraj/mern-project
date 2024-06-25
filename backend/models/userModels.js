
const mongoose = require("mongoose");


const userSchema= new mongoose.Schema({ 
   
    username:String,
    mobilenumber:Number,
    email:String,
    password:String
})

module.exports= mongoose.model("Userprofile", userSchema);