import React from "react";

function Child1({click}){

    
    return(
      <>
           <h1>This is child component</h1>
           <button onClick={click}>Click me</button>

            
      </>


    )
}

export default Child1