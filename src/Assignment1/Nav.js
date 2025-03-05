import React from "react";

function Nav(){
    return(
       <>
          <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"brown",boxShadow:"0px 0px 10px black",height:"50px",width:"100%",padding:"10px 10px"}}>
            
            <h3>Home </h3>
            <h3>Order</h3>
            <h3>Food</h3>
            <h3>Restaurant</h3>
            <h3>Testimonals</h3>
            <h3>Contact Us</h3>
            <img src="menu-bar.png"></img>

       </div>
       
       
       </>


    )
}
export default Nav