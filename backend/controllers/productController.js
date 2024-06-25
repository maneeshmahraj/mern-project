

const proModle=require("../models/productModel");
const paymentModel=require("../models/payment");
const productData=async(req,res)=>{
    
  const {productname,price,protypename,image}=req.body;
  const product=await proModle.create({
    productname:productname,
    price:price,
    protypename:protypename,
    image:image
  })
  console.log(product);
  res.send("image upload cloudinary!!");
}

const displayData=async(req,res)=>{
   
      try {
        await proModle.find().then((data)=>{
          res.json(data)
        })
      } catch (error) {
        console.log("error");
      }

}

const delData=async(req,res)=>{
  try {
    let id=req.body.id;
    proModle.findByIdAndDelete(id).then((d)=>{
      res.send("data delete!!")
    })
  } catch (error) {

    console.log("error");
    
  }
}
const editData=async(req,res)=>{
   
  try {
    let id=req.body.id;
    await proModle.findById(id).then((data)=>{
      res.json(data)
    })
  } catch (error) {
    console.log("error");
  }

}
const editSave=async(req,res)=>{
  try {
    const {id,productname,price,protypename}=req.body;
   
    await proModle.findByIdAndUpdate(id,{productname,price,protypename}).then((re)=>{
      res.status(201).json("data update!!")
    })
   
  } catch (error) {
    console.log("error");
  }
}
const searchData=async(req,res)=>{
  try {
    let protypename=req.body;
  
    proModle.find(protypename).then((mydata)=>{
      res.json(mydata);
    })
  } catch (error) {
    console.log("error");
    
  }
}
const addToCard=async(req,res)=>{
  try {
    const id=req.body.id;
    await proModle.findById(id).then((mydata)=>{
      res.status(201).json(mydata);
    })
  } catch (error) {
    console.log("error");
    
  }
}
const customerData=async(req,res)=>{
  try {
      const mydata=await paymentModel.find().then((data)=>{
       res.status(200).json(data);
      })
  } catch (error) {
    console.log("error");
  }
}
const orderShip=async(req,res)=>{
  try {
      const orderId=req.body.id;   
      const response=await paymentModel.findByIdAndUpdate(orderId,{status:false});
      res.status(200).json(response.status);
  } catch (error) {
    console.log("error");
  }
}
module.exports={
    productData,
    displayData,
    delData,
    editData,
    editSave,
    searchData,
    addToCard,
    customerData,
    orderShip
}