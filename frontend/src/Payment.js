
import { useSelector } from "react-redux";
import { useState } from 'react';
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";
const Payment=()=>{
  const [input, setInput]=useState({})    
    const cartItems=useSelector(state=>state.shop.fltitems);


    let totalprice=0;
    let productDetails="";
    let image=""
    const ans=cartItems.map((key)=>{

       totalprice+=key.price*key.qnty;
       productDetails+=" qty -"+key.qnty+" rate-  "+ key.price;
       image=key.image;
     console.log( productDetails)
    })
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value; 
        setInput(values=>({...values, [name]:value}));
      }
      const [myproduct,setMyProduct] = useState({
        price: totalprice,
        name: productDetails,
        img:image,
        

});
const initPay = (data) => {
    const options = {
      key : "rzp_test_VoVYKn1fdyShDu",
      amount: data.amount,
      currency: data.currency,
    //   name: myproduct.name,
      description: "my good t shirt",
      image:myproduct.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "https://localhost:8000/api/payment/verify";
          const {data} = await axios.post(verifyURL,response);
        } catch(error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  
  const handlePay = async () => {
    try {
      const orderURL = "http://localhost:8000/api/payment/orders";
      const {data} = await axios.post(orderURL,{amount: myproduct.price,productitems:myproduct.name,  ...input});
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };
    return(
        <>
        <div className="paymentSys">
           <div className="pay11">
           <div className="totalAmountShow2">
             <h2>TotalAmount:</h2>
             <div className="totleamt2">$
            {totalprice}.00</div>

      </div>
      <div className="bestseller0">
        Latin words, combined with a handful of model sentence structures, to generate Lorem 
       Ipsum which looks reasonable.
        </div>
           </div>
           <div className="pay22">
            <h4>Pay with card</h4>
            <label>Contect information</label>
            <div className="emaillabel"><span style={{marginLeft:"5px", fontSize:"20px"}}><MdOutlineEmail /></span>
            <input type="email" placeholder="email@example.com" name="email" value={input.email} className="inputpayment" onChange={handleInput}/>
            </div>
            <div className="emaillabel">+91
            <input type="number" placeholder="9616000016" name="mobile" value={input.mobile} className="inputpayment" onChange={handleInput}/>
            </div>
            <br/>
            <label>Card information</label>
            <div className="emaillabel">
            <input type="text" placeholder="1234 1254 6534 9999" name="cardno" value={input.cardno} className="inputpayment" onChange={handleInput} />
            <img src="../Images/card3.jpg" height="20px"/>
            <img src="../Images/card1.jpg" height="20px"/>
            <img src="../Images/card4.jpg" height="20px"/>

            </div>
            <div className="emaillabel1">
           <div className="emaillabel2">
           <input type="date" className="inputpayment" name="date" value={input.date} onChange={handleInput} />
           </div>
           <div className="emaillabel3">
           <input type="text" placeholder="CVC" className="inputpayment" name="cvc" value={input.cvc} onChange={handleInput} />
           </div>
            </div>
            <br/>
            <label>Name on card</label>
            <div className="emaillabel">
            <input type="text" className="inputpayment" name="cardname" value={input.cardname} onChange={handleInput} />
            </div>
            <br/>
            <label>Country</label>
            <div className="emaillabel">
            <select className="inputpayment">
                <option>India</option>
                <option>UK</option>
                <option>USA</option>
                <option>South afrika</option>
                <option>japan</option>
                <option>rasiya</option>
                <option>nepal</option>
                <option>shree lanka</option>
                <option>Bangladesh</option>

            </select>
            </div>
            <br/>
            <button className="emaillabellast" onClick={handlePay}>
                        pay
           </button>
           </div>
        </div>
        </>
    )
}
export default Payment;