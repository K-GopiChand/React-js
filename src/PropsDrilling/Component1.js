import React from "react";
import Component2 from "./Component2";
function Component1(){
    var name="raj"
    return(
        <div style={{margin:"50px auto",height:"700px",width:"700px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>
            <h1>Component1</h1>
            <h3>My name is {name}</h3>
            <Component2 name={name}/>
        </div>
    )
}

export default Component1