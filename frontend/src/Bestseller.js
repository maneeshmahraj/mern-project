
import { FaStar } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import Viewsuser from "./Viewsuser";
const Bestseller=()=>{
    return(
        <>
       <div className="bestseller">
       <div className="bestseller1">
       <p>Bestseller Products</p>
      
       </div>
        <div className="bestseller2">
        <span>Latin words, combined with a handful of model sentence structures, to generate Lorem </span>
        <p>Ipsum which looks reasonable.</p>
        </div>
        <div className="bestseller3">
             <div className="bestseller4">
                <div className="bestseller5">
                      <img src="../Images/apple.jpg" style={{borderRadius:"50%",heigth:"400px", width:"400px"}} />
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>
                   
                    </div>
             </div>
             <div className="bestseller4">
             <div className="bestseller5">
                      <img src="../Images/santa.webp" style={{borderRadius:"50%",heigth:"200px", width:"200px"}} />
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>
                    
                    </div>
             </div>
             <div className="bestseller4">
             <div className="bestseller5">
                      <img src="../Images/leechi.webp" style={{borderRadius:"50%",heigth:"200px", width:"200px"}}/>
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>
                    
                    </div>
             </div>
             <div className="bestseller4">
             <div className="bestseller5">
                      <img src="../Images/pears.webp" style={{borderRadius:"50%",heigth:"200px", width:"200px"}}/>
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>

                    </div>
             </div>
             <div className="bestseller4">
             <div className="bestseller5">
                      <img src="../Images/melon.png" style={{borderRadius:"50%",heigth:"200px", width:"200px"}} />
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>
                   
                    </div>
             </div>
             <div className="bestseller4">
             <div className="bestseller5">
                      <img src="../Images/blackgrapsh.webp" style={{borderRadius:"50%",heigth:"200px", width:"200px"}} />
                </div>
                <div className="bestseller6">
                    <p style={{fontSize:"20px",color:"rgb(100, 83, 83)",fontWeight:"bold",margin:"10px"}}>Organic 
                        <br/>Tomato</p>
                        <span style={{fontSize:"20px",color:"yellowgreen"}}><FaStar /><FaStar /><FaStar /><FaStar /></span><span style={{fontSize:"20px",color:"rgb(100, 83, 83)"}}><FaStar /></span>
                        <br/>
                    <span className="many">3.49$</span>
                    <button className="many1"><FaLock /> Add to <br/> cart</button>
                   
                    </div>
             </div>

        </div>
       </div>
       <Viewsuser/>
        </>
    );
}
export default Bestseller;