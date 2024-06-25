
const User= require("../models/userModels");
const bcryt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const secret_key="mk123";
const insertData=async(req,res)=>{
    try {
        const {username,mobileno,email,password}=req.body;

        const hashPassword=await bcryt.hash(password,10);
        const user=await User.create({
            username:username,
            mobilenumber:mobileno,
            email:email,
            password: hashPassword
        })
        res.json("data insert");
        
    } catch (error) {
      console.log("somthing is wrong...")  
    }
}
const loginData=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})
        let isValidPassword=await bcryt.compare(password,user.password);
        if(isValidPassword)
        {
            const token=await jwt.sign({userId:user._id,username:user.username,email:user.email},secret_key)
           
            res.status(201).json({token:token,username:user.username,email:user.email,massage:"you r loged in "});
        }
        else{
            res.json({massage:"plz enter valid password"})
        }


    } catch (error) {
      console.log("somthing is wrong...")  
        
    }

}
const checkToken=async(req,res)=>{
    try {
        res.send("evrything is okk now !!")
    } catch (error) {
        
    }
}
module.exports={
    insertData,
    loginData,
    checkToken
}