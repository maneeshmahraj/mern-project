
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Registration from "./Registration";
import Login from "./Login";
import Admin from "./Admin";
import Insert from "./Insert";
import Update from "./Update";
import Editdata from "./Editdata";
import Searchpro from "./Searchpro";
import Cart from "./Cart";
import Footer from "./Footer";
import Shopdetail from "./Shopdetail";
import Pages from "./Pages";
import Viewsuser from "./Viewsuser";
import Payment from "./Payment";
import CustomerOrders from "./CustomerOrders";


const App=()=> {


  return (
   <>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="registration" element={<Registration/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="admin" element={<Admin/>}>
    <Route index element={<Insert/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="edit/:id" element={<Editdata/>}/>
      <Route path="customerorder" element={<CustomerOrders/>}/>
    </Route>
    <Route path="searchpro" element={<Searchpro/>}/>
    <Route path="wishlist" element={<Cart/>}/>
    <Route path="detail" element={<Shopdetail/>}/>
    <Route path="page" element={<Pages/>}/>
    <Route path="contect" element={<Viewsuser/>}/>
    <Route path="payment" element={<Payment/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
   <Footer/>
   </>
  );
}

export default App;
