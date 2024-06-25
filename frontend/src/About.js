

import { FaCarSide } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Shop from "./Shop";
const About=()=>{
    return(
        <>
        <div className="aboutitems">
     <div className="freeshoping">
        <div className="freeshoping2">
     <FaCarSide className="freeshoping1" />
     </div>
     <h4 style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"20px"}}>Free Shipping</h4>
     <p style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"10px", fontSize:'20px'}}>Free on order over $300</p>
     </div>
     <div className="freeshoping"> 
     <div className="freeshoping2">
     <MdOutlineSecurity className="freeshoping1"/>
     </div>
     <h4 style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"20px"}}>Security Payment</h4>
     <p style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"10px", fontSize:'20px'}}>100% security payment</p>
     </div>
     <div className="freeshoping">
     <div className="freeshoping2">

     <MdEmojiTransportation className="freeshoping1"/>
     </div>
     <h4 style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"20px"}}>30 Day Return</h4>
     <p style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"10px", fontSize:'20px'}}>30 day money guarantee</p>
        </div>
        <div className="freeshoping">
     <div className="freeshoping2">

        <IoCallOutline  className="freeshoping1"/>
        </div>
        <h4 style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"20px"}}>24/7 Support</h4>
     <p style={{color:"rgb(107, 103, 103)", display:"flex", justifyContent:"center",marginTop:"10px", fontSize:'20px'}}>Support every time fast</p>
        </div>
        </div>
        <Shop/>
        </>
    );
}
export default About;