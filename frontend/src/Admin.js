
import { Link, Outlet, useNavigate } from "react-router-dom";

const username=localStorage.getItem("username")
const Admin=()=>{

     const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/home");
    }
    const handleInsert=()=>{
        navigate("/insert")
    }
    const handleDelete=()=>{
        navigate("/update")
    }
    const handleOrders=()=>{
        navigate("/customerorder")
    }
    return(
        <>
         <div className="shop">
       <div className="shop1">
       <p style={{fontSize:"30px", color:"yellowgreen"}}> 
     
      welcome to Admin page!! <b style={{color:"orange"}}>{username}</b> mahraj......</p> 
       </div>

        <div>
        <button onClick={logout} >Logout</button>
        </div>
        
         <div className="datainfo">
          <div className="datainfo1">
          <ul>
           <li><Link to="insert" className="link2" onClick={handleInsert}>Insert</Link></li>
           <li><Link to="update" className="link2" onClick={handleDelete}>UpdateData</Link></li>
           <li><Link to="customerorder" className="link2" onClick={handleOrders}>Customer Orders</Link></li>


          </ul>
         </div>
         <div className="datainfo2">
        <Outlet/>
         </div>
         </div>
       </div>
        </>
    );
}
export default Admin;