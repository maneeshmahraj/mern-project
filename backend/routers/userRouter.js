var express= require("express");
const jwt=require("jsonwebtoken");
const secret_key="mk123";
var router= express.Router();
const userController= require("../controllers/userControllers");
const productController=require("../controllers/productController");
const authMiddlevare=async(req,res,next)=>{
   
   const token=req.body.token;
   if(token)
   {
    const  sure=await jwt.verify(token,secret_key);
    next();
   }
   else 
   {
    res.send("User Not in login by past time");
   }

}



router.post("/registration",userController.insertData)
router.post("/login",userController.loginData)
router.post("/authtoken",authMiddlevare,userController.checkToken);
router.post("/product",productController.productData);
router.get("/getitems",productController.displayData);
router.post("/delpro",productController.delData);
router.post("/editfind",productController.editData);
router.post("/update",productController.editSave);
router.post("/search",productController.searchData);
router.post("/addtocart",productController.addToCard);
router.get("/customerdata",productController.customerData)
router.post("/ordershipping",productController.orderShip)
module.exports= router;
