 import axios from 'axios';
import React from 'react'
 import { useState,useEffect } from 'react';
 const CustomerOrders = () => {
    const [mydata,setMydata]=useState([]);
   
const loadData=()=>{
  let api="http://localhost:8000/userlogin/customerdata";
  axios.get(api).then((res)=>{
   // console.log(res.data);
    setMydata(res.data)

  })
}
   
    const orderShip=(id)=>{
      let api="http://localhost:8000/userlogin/ordershipping";
      axios.post(api,{id:id}).then((res)=>{
        console.log(res.data);
        loadData();
      })
    }
    useEffect(()=>{
      loadData();
      
    },[])
    const ans=mydata.map((key)=>{
      return(
          <>
          <tr>
              <td>{key.cardname}</td>
              <td>{key.email}</td>
              <td>{key.mobile}</td>
              <td>
                 {key.cardno}
              </td>
              <td>{key.cvc}</td>
              <td>{key.totalproductprice}</td>
              <td>{key.qnty}</td>
              <td>{key.date}</td>           
              <td>{key.status?<button id='orderShip' onClick={()=>{orderShip(key._id)}}>Shipping</button>:<button id='orderShip' style={{backgroundColor:"red"}}>Shipped</button>}</td>
             
          </tr>
          </>
      )
    })
   return (
     <>
      <div className="datashow">
        <table className="tbl">
            <tr >
                <th>Card name</th>
                <th>customer email</th>
                <th>cus mobile no</th>
                <th>cust cardno</th>
                <th>cvc</th>
                <th>totalprice</th>
                <th>product quantity</th>
                <th>date</th>
                <th></th>


            </tr>
            {ans}
         </table>
        </div>
     </>
   )
 }
 
 export default CustomerOrders;