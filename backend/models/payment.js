const mongoose= require("mongoose");

const PaymentSchema=new mongoose.Schema({
       
     productname:String,
     cardname:String,
     email:String,
     mobile:String,
     cardno:String,
     cvc:String,
     totalproductprice:Number,
     qnty:String,
     date:String,
     status:Boolean
});


module.exports= new  mongoose.model("payment", PaymentSchema);