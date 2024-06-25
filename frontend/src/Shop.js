
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItems } from "./productSlice";
import { useDispatch } from "react-redux";
import Shopdetail from "./Shopdetail";
const username=localStorage.getItem("username")

const Shop=()=>{

 const [mydata,setMydata]=useState([]);
    const dishpatch=useDispatch();
const navigate=useNavigate();
   
    const loadData=()=>{
      let api="http://localhost:8000/userlogin/getitems";
      axios.get(api).then((res)=>{
         setMydata(res.data);
      })
    }
    useEffect(()=>{
       
        loadData();
    },[])

    const addCart=(id)=>{
      let api="http://localhost:8000/userlogin/addtocart";
      axios.post(api,{id:id}).then((res)=>{
       // console.log(res.data);
      dishpatch(addItems({id:res.data._id,productname:res.data.productname,price:res.data.price,image:res.data.image,qnty:1}))
      })
    }
    const ans=mydata.map((key)=>{
      return(
        <>
   <div className="orgnicpro">
           <div className="proimg">
     <img src={key.image} alt="" className="proimg1"/>
           </div>
           <div className="contentorgnic">
          <h3>{key.productname}</h3> 
Lorem ipsum dolor sit amet
 consectetur adipisicing elit sed do
  eiusmod te incididunt
         
           </div>
           <h4 className="pay">${key.price}</h4>
           <button className="pay1" onClick={()=>{addCart(key._id)}}  >Add to cart</button>
          </div>
        </>
      );
    })
    const logout=()=>{
      localStorage.clear();
      navigate("/home");
  }
    return(
        <>
       
     
       <div className="shopproduct">
         <div className="productnav">
         <div className="ourproduct">
         <div className="ourproduct1">
            <h1>Our Organic Products welcome : <b style={{color:" rgb(167, 245, 11)"}}>{username}</b></h1>
            </div>
         <div className="productnav1">
          <ul>
                  
           <li> <a href="" onClick={logout} className="link2" >Logout</a></li>
          </ul>
         </div>
          </div>
         <div className="productnav2">
       {ans}
      
         </div>
         </div>
       </div>
       <Shopdetail/>
        </>
    );
}
export default Shop;