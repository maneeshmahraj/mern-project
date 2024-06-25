
import About from "./About";
import { useNavigate } from "react-router-dom";
const Home=()=>{

 const navigate=useNavigate();
   const r=()=>{
  
    let show='';
    let ind=0;
    let store =document.querySelector('#img2');
    setInterval(fun,100)
    function fun()
    {
        let str="Organic Veggies & Fruits Foods";
        let len=str.length
        if(ind<len)
        {
            store.innerHTML+=str[ind];
            ind++;
        }else{
            clearInterval();
            store.innerHTML=" "
            ind=0;
        }
    }

   }
  const handleSearch=()=>{
    navigate("../searchpro")
  }
    return(
        <>
        <div className="front-page"></div>
       <div className="homemanage">
          <div className="heading">
            <h1 className="title2">100% organic Food!!</h1>
            <p className="title" id="img2" onMouseEnter={r}>Organic Veggies & Fruits Foods</p>
            <br/>
            <input type="text" placeholder="Enter  type of vagitables " className="input-search" />
            <button className="submitn" onClick={handleSearch}>Search now</button>
          </div>
         <div className="heading2">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={"../Images/apple.jpg"} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={"../Images/a2.jpeg"} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={"../Images/leechi.webp"} className="d-block w-100" />
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
          </div>
        <About/>
        
        </>
    );
}
export default Home;