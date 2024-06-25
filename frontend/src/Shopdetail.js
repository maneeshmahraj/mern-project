
import Pages from "./Pages";



const Shopdetail=()=>{
    return(

        <>
        <div className="details">
           
           <div className="details1">
             <div className="detailsimg">
              <img src="../Images/apple.jpg" className="detailsimg"/>
             </div>
             <div className="detailscolor">

             </div>
             <div className="discount1">
                 <p style={{fontSize:"24px" ,fontWeight:"bold", color:"white",display:"flex", justifyContent:"center"}}> Fress Apple</p>
               <div style={{display:"flex", justifyContent:"center"}}>
               <h3 style={{marginTop:"5px",color:"gray"}}>20%</h3> <h1 style={{color:"gray"}}>OFF</h1>
               </div>
             </div>
           </div>
           <div className="details2">
              <div className="detailsimg2">
                
              <img src="../Images/leechi.webp" className="detailsimg2" />
             
             </div>
             <div className="detailscolor2">

             </div>
             <div className="discount2">
             <p style={{fontSize:"24px" ,fontWeight:"bold", color:"yellowgreen",display:"flex", justifyContent:"center"}}> Fress Apple</p>
               <div style={{display:"flex", justifyContent:"center"}}>
               <h3 style={{marginTop:"5px",color:"gray"}}>20%</h3> <h1 style={{color:"gray"}}>OFF</h1>
               </div>
             </div>
           </div>
           <div className="details3">
           <div className="detailsimg3">
              <img src="../Images/blackgrapsh.webp" className="detailsimg2" />
                
          </div>
         <div className="detailscolor3">

         </div>
            <div className="discount3">
            <p style={{fontSize:"24px" ,fontWeight:"bold", color:"white",display:"flex", justifyContent:"center"}}> Fress Apple</p>
               <div style={{display:"flex", justifyContent:"center"}}>
               <h3 style={{marginTop:"5px", color:"gray"}}>20%</h3> <h1 style={{color:"gray"}}>OFF</h1>
               </div>
         </div>
            </div>
        </div>
        <Pages/>
        </>

    );
}
export default Shopdetail;