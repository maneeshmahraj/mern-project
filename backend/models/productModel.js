

const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    productname:String,
    price:Number,
    protypename:String,
    image:String
})
module.exports=mongoose.model("product",productSchema);