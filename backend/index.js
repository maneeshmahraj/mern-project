const express = require("express");
const app= express();
const mongoose= require("mongoose");
var cors = require('cors');
const bodyparser = require('body-parser')
require("dotenv").config();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
const userRouter= require("./routers/userRouter");
paymentRoute=require("./routers/payment");
mongoose.connect(process.env.DATABASE_URL+process.env.DBNAME);
const PORT=process.env.PORT || 8080;

app.use("/userlogin", userRouter);
app.use("/api/payment/",paymentRoute)
app.listen(PORT, ()=>{
    console.log("App run at 8000 Port");
})

