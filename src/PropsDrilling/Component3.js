import React from "react";
import Component4 from "./Component4";
function Component3({name}){
    return(
        <div style={{margin:"50px auto",height:"500px",width:"500px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>
            <h1>Component3</h1>


            <Component4 name={name}/>
        </div>
    )
}

export default Component3