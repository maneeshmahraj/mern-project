

import axios from "axios";
import { useState } from "react";

const Insert=()=>{
    const [mydata,setMydata]=useState({});
      const [myfile,setMyfile]=useState("");
    const handlinput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMydata(values=>({...values,[name]:value}));
    
    }
    const handlFile=(e)=>{
        setMyfile(e.target.files[0]);
    }
    const handlSubmit=async()=>{

      const formData=new FormData();
      formData.append("file",myfile);
      formData.append("upload_preset",'jpnppfpt');
      formData.append('cloud_name','dqsi8ffeg');
      const responce=await axios.post('http://api.cloudinary.com/v1_1/dqsi8ffeg/image/upload',formData);
      console.log(responce.data.url);

    let api="http://localhost:8000/userlogin/product";
   
      await axios.post(api,{productname:mydata.productname,price:mydata.price,protypename:mydata.protypename,image:responce.data.url}).then((res)=>{
        alert(res.data);
       })
   
    }

    return(
        <>
       <div className="registration">
          <div className="registor">
            <h3 style={{display:"flex", justifyContent:"center", color:"rgb(107, 103, 103)"}}>Insert Data</h3>
          <label for="username">Enter productname:</label>
          <input type="text"  name="productname" onChange={handlinput}/>
          <label for="mobilenumber"> product price:</label>
          <input type="text"  name="price" onChange={handlinput}/>
          <label for="email">Enter product type:</label>
          <input type="email"  name="protypename" onChange={handlinput}/>
         
          <input type="file"  onChange={handlFile}/>
           <button className="datasave" onClick={handlSubmit}>Save</button>
          </div>
       </div>
        </>
    );
}
export default Insert;