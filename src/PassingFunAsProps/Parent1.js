import React from "react";
import Child1 from "./Child1";

function Parent1(){

    let change=()=>{
               alert("Hello Good afternoon")
    }
    return(
      <>
           <h1>This is parent component</h1>
             <Child1 click={change}/>    
      
      </>


    )
}

export default Parent1