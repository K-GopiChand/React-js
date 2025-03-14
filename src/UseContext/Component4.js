import React, { useContext } from "react";
import { ContextData } from "./Component1";

function Component4(){
                 let data=useContext(ContextData)
    return(
        <div style={{margin:"50px auto",height:"400px",width:"400px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>
            <h1>Component4</h1>
            <h3>My name is {data[0]} </h3>
            <h4>My age is {data[1]} </h4>
            <h5>Fav number is {data[2]}</h5>
        </div>
    )
}

export default Component4