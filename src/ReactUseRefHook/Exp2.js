import React, { useRef } from "react";

function Exp2(){
     let countValue=useRef(0)
   let handleClick=  ()=>{
             countValue.current++
             console.log(countValue.current)

     }
    return(
        <div>
            <h1>useRef Hook Example</h1>
            <h2>The count value is {countValue.current}</h2>
            <button onClick={handleClick}>Increment</button>

        </div>
    )
}
export default Exp2