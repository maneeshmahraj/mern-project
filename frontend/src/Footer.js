
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer=()=>{
    return(
        <>
        <div className="footer">
       <div className="footer1">
       <div className="logo1">
        <div className="logo4">
        <p className="logo2">Fruitables</p>
        <span style={{color:"orange", fontSize:"20px"}}>Fresh products</span>
        </div>
        <div className="logo3">
        <input type="text" placeholder="Enter email " className="input-search2" />
            <button className="submitn2" >subscribe now</button>
        </div>
        <div className="logo5">
      <div className="logo7">
      <span className="logo6"> <FaTwitter /></span>
       <span className="logo6"> <RiFacebookFill /></span>
       <span className="logo6"> <SiYoutube /></span>
       <span className="logo6"><FaLinkedinIn /></span>
      </div>
        </div>
        </div>
       </div>
       <div className="footer2">
     <div className="footer22">
        <br/>
     <h3 style={{color:"white"}}> Why People Like us!</h3> 
     <br/>
          <p className="footer23">
              typesetting, remaining 
               <br/>essentially  
                   unchanged. It was
                   <br/>
                 <br/> popularised in the 1960s
             <br/>  with the like
               Aldus PageMaker including of Lorem Ipsum.
               </p>
             <br/>
              <button className="pay2">Read more</button>
     </div>
     <div className="footer24">
            <ul>
                 <li style={{fontSize:"28px", fontWeight:"bold",color:"white"}}>Shop Info</li> 
                 <br/>
                    <li><a href="#"> About Us</a></li>  
                  <li><a href="#">  Contact Us</a></li>
                   <li><a href="#"> Privacy Policy</a></li>
                     <li><a href="#">  Terms & Condition</a></li>
                   <li><a href="#"> Return Policy</a></li>
                   <li><a href="#"> FAQs & Help</a></li>
            </ul>
     </div>
     <div className="footer24">
            <ul>
                 <li style={{fontSize:"28px", fontWeight:"bold",color:"white"}}>Account</li> 
                 <br/>
                    <li><a href="#"> My Account</a></li>  
                  <li><a href="#">Shop details</a></li>
                   <li><a href="#"> Shopping Cart</a></li>
                     <li><a href="#">  Wishlist</a></li>
                   <li><a href="#"> Order History</a></li>
                   <li><a href="#">International Orders</a></li>
            </ul>
     </div>
     <div className="footer22">
        <br/>
     <h3 style={{color:"white"}}>Contact</h3> 
     <br/>
          <p className="footer23">
          Address: 1429 Netus Rd,
          <br/> NB 284405
               <br/>Email:Budoliya@gmail.com
               <br/>
                 <br/>Phone: +91 9140688969
                 <br/>
             <br/> Payment Accepted
              
               </p>
            
            
     </div>
       </div>
       <div className="fottor">
       <span style={{float:"left",color:"white",fontSize:"20px"}}><span style={{fontSize:"20px",color:"green"}}>Your Site Name,</span> All right reserved.</span>
       <span style={{float:"right",fontSize:"20px",color:"white"}}>Designed By <span style={{textDecoration:"underline",fontSize:"20px",color:"green"}}>MK Budholiya</span> Distributed By <span style={{textDecoration:"underline",fontSize:"20px",color:"green"}}>ThemeWagon</span> </span>
       </div>
        </div>
        </>
    );
}
export default Footer;