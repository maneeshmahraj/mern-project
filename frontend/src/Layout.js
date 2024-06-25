
import { Link,Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Layout=()=>{
    const cartitems=useSelector(state=>state.shop.fltitems);
    const navigate=useNavigate();

    const handlePage=()=>{
        navigate("/login/")
    }
    const searchData=()=>{
        navigate("searchpro")
    }
    const cartItems=()=>{
        navigate("wishlist")
    }
    return(

        <>
        <div className="layout">
          
         <nav className="nav">
        
        <lable className="logo">Fruitables</lable>
         <ul>
            <li><Link to="home" className="link">Home</Link></li>
            <li><Link to="about" className="link">About</Link></li>
            <li><Link to="shop" className="link">Shop</Link></li>
            <li><Link to="detail" className="link">Shopdetail</Link></li>
            <li><Link to="page" className="link">Pages</Link></li>
            <li><Link to="contect" className="link">Contact</Link></li>
            <li><Link to="registration" className="link">Registration</Link></li>

           
          </ul>
         </nav>
         <div className="icons">
        <ul>
        <li onClick={handlePage}><CiUser /></li>
        <li onClick={()=>{cartItems()}}><MdOutlineLocalGroceryStore /></li> <span className="cartnumber">{cartitems.length}</span>
        <li className="searchlogo" onClick={searchData}><FaSearch /></li>

        </ul>

         </div>
        </div>
        <Outlet/>
      
        </>
    );
}
export default Layout;