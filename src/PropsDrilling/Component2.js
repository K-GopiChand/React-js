import React from "react";
import Component3 from "./Component3";
function Component2({name}){
    return(
        <div style={{margin:"50px auto",height:"600px",width:"600px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>
            <h1>Component2</h1>

            <Component3 name={name}/>
        </div>
    )
}

export default Component2