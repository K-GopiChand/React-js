import React, { useRef } from "react";

function Exp1(){
     let countValue=useRef(0)
   let handleClick=  ()=>{
             countValue.current++
             console.log(countValue.current)

     }
    return(
        <div>
            <h1>useRef Hook Example</h1>
            <button onClick={handleClick}>Click Me</button>

        </div>
    )
}
export default Exp1