
import axios from "axios";
import { useState } from "react";

const Searchpro=()=>{
    const [ptype,setPtype]=useState("");
    const [mydata,setMydata]=useState([]);
    
const handlSubmit=()=>{
    let api="http://localhost:8000/userlogin/search";
    axios.post(api,{protypename:ptype}).then((res)=>{
        setMydata(res.data);
        console.log(res.data);
    })
}
const ans= mydata.map((key)=>{
   
    return(
      <>
 <div className="orgnicpro">
         <div className="proimg">
   <img src={key.image} alt="" className="proimg1"/>
         </div>
         <div className="contentorgnic">
        <h3>Grapes</h3> 
Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt
       
         </div>
         <h4 className="pay">${key.price}</h4>
         <button className="pay1">Add to cart</button>
        </div>
      </>
    );
  })
    return(
        <>
        <div className="searchproduct">
        <input type="text" placeholder="Enter  type of vagitables " className="input-search" onChange={(e)=>{setPtype(e.target.value)}}/>
            <button className="submitn" onClick={handlSubmit}>Search now</button>
        </div>
       <div className="searchpro1">
       <div className="productnav2">
        {ans}
        </div>
     
       </div>
        </>
    );
}
export default Searchpro;